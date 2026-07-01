import { NextRequest, NextResponse } from 'next/server';
import { invoiceDbPool } from '@/lib/invoiceDb';

export const POST = async (request: NextRequest) => {
  try {
    const { invoiceNumber } = await request.json();

    if (!invoiceNumber || invoiceNumber.trim() === '') {
      return NextResponse.json(
        { error: 'Invoice number is required' },
        { status: 400 }
      );
    }

    // Read live from the Invoice-Generation production database. This is the
    // source of truth for `status` (financial lifecycle) and `tracking_status`
    // (physical fulfilment stage — order_received -> ... -> delivered), which
    // uses the exact same 8-stage vocabulary as OrderStatusTracker.tsx expects.
    const result = await invoiceDbPool.query(
      `SELECT invoice_number, status, tracking_status, tracking_updated_at,
              customer_name, document_type
         FROM invoices
        WHERE invoice_number ILIKE $1
        ORDER BY created_at DESC
        LIMIT 1`,
      [invoiceNumber.trim()],
    );

    if (result.rows.length === 0) {
      return NextResponse.json(
        { error: 'Invoice not found' },
        { status: 404 }
      );
    }

    const invoice = result.rows[0];

    return NextResponse.json({
      success: true,
      data: {
        invoiceNumber: invoice.invoice_number,
        // OrderStatusTracker.tsx renders the fulfilment timeline, so tracking_status
        // is what drives the stepper. `status` (paid/confirmed/issued/etc.) is the
        // separate financial/document lifecycle field, included in case you want to
        // surface it too (e.g. "Paid" badge alongside the tracker).
        status: invoice.tracking_status || 'order_received',
        documentStatus: invoice.status,
        documentType: invoice.document_type,
        updatedAt: invoice.tracking_updated_at,
        customerName: invoice.customer_name,
      },
    });
  } catch (error) {
    console.error('[v0] Error fetching invoice from Invoice-Generation DB:', error);
    return NextResponse.json(
      { error: 'Failed to fetch invoice status' },
      { status: 500 }
    );
  }
};
