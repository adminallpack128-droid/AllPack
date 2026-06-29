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

    // Search for invoice in the database
    const result = await sql`
      SELECT id, invoice_number, tracking_status, tracking_updated_at 
      FROM invoices 
      WHERE invoice_number ILIKE $1
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
        status: invoice.tracking_status,
        updatedAt: invoice.tracking_updated_at,
      },
    });
  } catch (error) {
    console.error('Error fetching invoice:', error);
    return NextResponse.json(
      { error: 'Failed to fetch invoice status' },
      { status: 500 }
    );
  }
};
