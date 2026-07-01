import { sql } from '@vercel/postgres';
import { NextRequest, NextResponse } from 'next/server';

export const POST = async (request: NextRequest) => {
  try {
    const { invoiceNumber } = await request.json();

    if (!invoiceNumber || invoiceNumber.trim() === '') {
      return NextResponse.json(
        { error: 'Invoice number is required' },
        { status: 400 }
      );
    }

    // Search for order by invoice number and get its latest status
    const result = await sql`
      SELECT 
        o.id,
        o.invoice_number,
        os.status_name as tracking_status,
        os.completed_at as tracking_updated_at,
        o.customer_name,
        o.product_name,
        os.status_order
      FROM orders o
      LEFT JOIN order_statuses os ON o.id = os.order_id
      WHERE o.invoice_number ILIKE ${invoiceNumber}
      ORDER BY os.status_order DESC
      LIMIT 1
    `;

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
        id: invoice.id,
        invoiceNumber: invoice.invoice_number,
        status: invoice.tracking_status || 'Unknown',
        updatedAt: invoice.tracking_updated_at,
        customerName: invoice.customer_name,
        productName: invoice.product_name,
        statusOrder: invoice.status_order || 0,
      },
    });
  } catch (error) {
    console.error('[v0] Error fetching invoice:', error);
    return NextResponse.json(
      { error: 'Failed to fetch invoice status' },
      { status: 500 }
    );
  }
};
