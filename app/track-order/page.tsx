'use client';

import { useState } from 'react';
import TrackOrderSearch from './components/TrackOrderSearch';
import OrderStatusTimeline from './components/OrderStatusTimeline';

interface OrderData {
  order: {
    id: number;
    invoiceNumber: string;
    customerName: string;
    productName: string;
    quantity: number;
    orderDate: string;
  };
  statuses: Array<{
    id: number;
    statusName: string;
    statusOrder: number;
    completedAt: string | null;
  }>;
}

export default function TrackOrderPage() {
  const [orderData, setOrderData] = useState<OrderData | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSearch = async (invoiceNumber: string) => {
    setLoading(true);
    setError(null);
    setOrderData(null);

    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 800));

    // Mock data for demonstration - in production this would come from the API
    const mockOrders: { [key: string]: OrderData } = {
      'INV-001': {
        order: {
          id: 1,
          invoiceNumber: 'INV-001',
          customerName: 'John Doe',
          productName: 'Bulk Bags - Large',
          quantity: 500,
          orderDate: new Date(Date.now() - 13 * 24 * 60 * 60 * 1000).toISOString(),
        },
        statuses: [
          { id: 1, statusName: 'Cutting', statusOrder: 1, completedAt: new Date(Date.now() - 13 * 24 * 60 * 60 * 1000).toISOString() },
          { id: 2, statusName: 'Moisture Proofing', statusOrder: 2, completedAt: new Date(Date.now() - 12 * 24 * 60 * 60 * 1000).toISOString() },
          { id: 3, statusName: 'Weaving', statusOrder: 3, completedAt: new Date(Date.now() - 11 * 24 * 60 * 60 * 1000).toISOString() },
          { id: 4, statusName: 'Extrusion', statusOrder: 4, completedAt: new Date(Date.now() - 10 * 24 * 60 * 60 * 1000).toISOString() },
          { id: 5, statusName: 'Printing', statusOrder: 5, completedAt: new Date(Date.now() - 9 * 24 * 60 * 60 * 1000).toISOString() },
          { id: 6, statusName: 'Webbing', statusOrder: 6, completedAt: new Date(Date.now() - 8 * 24 * 60 * 60 * 1000).toISOString() },
          { id: 7, statusName: 'Sewing Unit', statusOrder: 7, completedAt: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString() },
          { id: 8, statusName: 'Packing', statusOrder: 8, completedAt: new Date(Date.now() - 6 * 24 * 60 * 60 * 1000).toISOString() },
          { id: 9, statusName: 'Burst Test', statusOrder: 9, completedAt: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000).toISOString() },
          { id: 10, statusName: 'Inspection', statusOrder: 10, completedAt: new Date(Date.now() - 4 * 24 * 60 * 60 * 1000).toISOString() },
          { id: 11, statusName: 'Storage', statusOrder: 11, completedAt: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString() },
          { id: 12, statusName: 'Cylinder Creation in Progress', statusOrder: 12, completedAt: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000).toISOString() },
          { id: 13, statusName: 'Cylinder Creation Done', statusOrder: 13, completedAt: null },
        ],
      },
    };

    try {
      const data = mockOrders[invoiceNumber.toUpperCase()];
      
      if (!data) {
        throw new Error('Order not found. Try "INV-001"');
      }

      setOrderData(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-slate-900 mb-3">Track Your Order</h1>
          <p className="text-lg text-slate-600">
            Enter your invoice number to see the current status of your order
          </p>
        </div>

        {/* Search Section */}
        <div className="mb-12">
          <TrackOrderSearch onSearch={handleSearch} isLoading={loading} />
        </div>

        {/* Error Message */}
        {error && (
          <div className="mb-8 p-4 bg-red-50 border border-red-200 rounded-lg">
            <p className="text-red-800 font-semibold">{error}</p>
          </div>
        )}

        {/* Order Details and Timeline */}
        {orderData && (
          <div className="space-y-8">
            {/* Order Information Card */}
            <div className="bg-white rounded-lg shadow-lg p-6 md:p-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Order Details</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <p className="text-sm font-semibold text-slate-500 uppercase">Invoice Number</p>
                  <p className="text-xl text-slate-900 font-bold">{orderData.order.invoiceNumber}</p>
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-500 uppercase">Customer Name</p>
                  <p className="text-xl text-slate-900 font-bold">{orderData.order.customerName}</p>
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-500 uppercase">Product</p>
                  <p className="text-xl text-slate-900 font-bold">{orderData.order.productName}</p>
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-500 uppercase">Quantity</p>
                  <p className="text-xl text-slate-900 font-bold">{orderData.order.quantity} units</p>
                </div>
              </div>
            </div>

            {/* Status Timeline */}
            <div className="bg-white rounded-lg shadow-lg p-6 md:p-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-8">Manufacturing Progress</h2>
              <OrderStatusTimeline statuses={orderData.statuses} />
            </div>
          </div>
        )}

        {/* Empty State */}
        {!orderData && !loading && !error && (
          <div className="bg-white rounded-lg shadow-lg p-12 text-center">
            <p className="text-slate-500 text-lg">Search for an order to see its status</p>
          </div>
        )}
      </div>
    </div>
  );
}
