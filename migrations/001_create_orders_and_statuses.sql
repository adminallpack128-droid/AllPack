-- Orders + order status tracking for the "Track Your Order" / invoice search feature.
-- Matches the columns already referenced in app/api/invoices/search/route.ts.
-- Safe to run multiple times.
-- Paste into your Postgres provider's SQL editor (Neon / Vercel Postgres) and run.

-- 1) One row per order / invoice.
CREATE TABLE IF NOT EXISTS orders (
  id             SERIAL        PRIMARY KEY,
  invoice_number TEXT          NOT NULL UNIQUE,
  customer_name  TEXT          NOT NULL DEFAULT '',
  product_name   TEXT          NOT NULL DEFAULT '',
  created_at     TIMESTAMPTZ   NOT NULL DEFAULT now()
);

-- 2) Fulfilment stage history for an order. route.ts reads the row with the
--    highest status_order for a given order_id as the "current" status, so
--    every stage change should INSERT a new row rather than UPDATE in place.
--    Stages (status_order 1-8), matching the keys in OrderStatusTracker.tsx:
--      1 order_received
--      2 cylinder_creation_in_progress
--      3 cylinder_completion_done
--      4 processing
--      5 packed
--      6 shipped
--      7 out_for_delivery
--      8 delivered
CREATE TABLE IF NOT EXISTS order_statuses (
  id           SERIAL       PRIMARY KEY,
  order_id     INTEGER      NOT NULL REFERENCES orders(id) ON DELETE CASCADE,
  status_name  TEXT         NOT NULL,
  status_order INTEGER      NOT NULL,
  completed_at TIMESTAMPTZ  NOT NULL DEFAULT now()
);

CREATE INDEX IF NOT EXISTS idx_order_statuses_order_id ON order_statuses (order_id);
CREATE UNIQUE INDEX IF NOT EXISTS idx_orders_invoice_number ON orders (invoice_number);

-- 3) Seed one demo row so you can verify the search works end-to-end.
--    (The UI itself hints at "INV-001" as an example — see page.tsx line 119.)
INSERT INTO orders (invoice_number, customer_name, product_name)
VALUES ('INV-001', 'Demo Customer', 'Fertilizer Bags - 50kg')
ON CONFLICT (invoice_number) DO NOTHING;

INSERT INTO order_statuses (order_id, status_name, status_order, completed_at)
SELECT id, 'order_received', 1, now() - interval '3 days' FROM orders WHERE invoice_number = 'INV-001'
ON CONFLICT DO NOTHING;

INSERT INTO order_statuses (order_id, status_name, status_order, completed_at)
SELECT id, 'processing', 4, now() - interval '1 day' FROM orders WHERE invoice_number = 'INV-001'
ON CONFLICT DO NOTHING;
