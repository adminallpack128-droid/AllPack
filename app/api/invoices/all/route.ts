import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';

export const GET = async () => {
  try {
    // Get all invoices with their statuses
    const result = await sql`
      SELECT 
        o.id,
        o.invoice_number,
        os.status_name,
        os.status_order,
        o.customer_name,
        o.product_name
      FROM orders o
      LEFT JOIN order_statuses os ON o.id = os.order_id
      ORDER BY o.id, os.status_order DESC
    `;

    return NextResponse.json({
      total: result.rowCount,
      invoices: result.rows,
    });
  } catch (error) {
    console.error('[v0] Error fetching invoices:', error);
    return NextResponse.json(
      { error: 'Failed to fetch invoices', details: String(error) },
      { status: 500 }
    );
  }
};
