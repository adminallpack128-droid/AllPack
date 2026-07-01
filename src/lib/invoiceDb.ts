import { Pool } from 'pg';

// This is a SEPARATE database from AllPack's own POSTGRES_URL. It points at
// the Invoice-Generation app's production Neon project (AllpackInvoiceGeneration),
// which is the source of truth for invoice/order status. AllPack reads from it
// but never writes to it.
const globalForInvoiceDb = globalThis as unknown as { invoiceDbPool?: Pool };

const connectionString = process.env.INVOICE_DB_URL;

if (!connectionString) {
  throw new Error(
    'Missing INVOICE_DB_URL. Add the Invoice-Generation production connection ' +
      "string (AllpackInvoiceGeneration Neon project) as INVOICE_DB_URL in your " +
      "env vars. This is separate from POSTGRES_URL, which is AllPack's own database.",
  );
}

export const invoiceDbPool =
  globalForInvoiceDb.invoiceDbPool ??
  new Pool({
    connectionString,
    ssl: { rejectUnauthorized: false },
  });

if (process.env.NODE_ENV !== 'production') {
  globalForInvoiceDb.invoiceDbPool = invoiceDbPool;
}
