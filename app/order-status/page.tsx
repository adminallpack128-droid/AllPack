'use client';

import { useState } from 'react';
import { Button } from '../Components/Ui/button';
import { Input } from '../Components/Ui/input';
import OrderStatusTracker from './OrderStatusTracker';
import { FaSearch, FaBox } from 'react-icons/fa';

interface InvoiceData {
  invoiceNumber: string;
  status: string;
  updatedAt: string;
}

export default function OrderStatusPage() {
  const [invoiceNumber, setInvoiceNumber] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [invoiceData, setInvoiceData] = useState<InvoiceData | null>(null);
  const [searched, setSearched] = useState(false);

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setInvoiceData(null);
    setSearched(true);

    try {
      const response = await fetch('/api/invoices/search', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ invoiceNumber: invoiceNumber.trim() }),
      });

      const result = await response.json();

      if (!response.ok) {
        setError(result.error || 'Failed to fetch invoice status');
        return;
      }

      setInvoiceData(result.data);
    } catch (err) {
      setError('An error occurred while searching. Please try again.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-orange-50">
      {/* Hero Section */}
      <section className="relative py-12 md:py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-500/5 to-green-500/5" />
        
        <div className="max-w-6xl mx-auto relative">
          <div className="text-center space-y-6 mb-12">
            {/* Icon */}
            <div className="flex justify-center">
              <div className="p-4 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full shadow-lg">
                <FaBox className="w-8 h-8 text-white" />
              </div>
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              Track Your Order
            </h1>

            {/* Subtitle */}
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Enter your invoice number to check the current status of your package
            </p>
          </div>

          {/* Search Form Card */}
          <div className="max-w-2xl mx-auto">
            <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8 md:p-10">
              <form onSubmit={handleSearch} className="space-y-6">
                <div className="relative">
                  <label className="block text-sm font-semibold text-gray-700 mb-3">
                    Invoice Number
                  </label>
                  <div className="relative">
                    <Input
                      type="text"
                      placeholder="e.g., INV-001"
                      value={invoiceNumber}
                      onChange={(e) => setInvoiceNumber(e.target.value)}
                      className="pl-12 h-12 text-base border-2 border-gray-200 focus:border-green-500 focus:ring-2 focus:ring-green-500/20"
                      disabled={loading}
                    />
                    <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  </div>
                  <p className="text-xs text-gray-500 mt-2">
                    You can find your invoice number in your order confirmation email
                  </p>
                </div>

                <Button
                  type="submit"
                  disabled={!invoiceNumber.trim() || loading}
                  className="w-full bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-semibold py-3 rounded-lg shadow-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? 'Searching...' : 'Track Package'}
                </Button>
              </form>

              {/* Error Message with Available Invoices */}
              {error && searched && (
                <div className="mt-6 space-y-4">
                  <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                    <p className="text-red-700 font-medium text-center">{error}</p>
                  </div>
                  <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                    <p className="text-blue-700 font-medium mb-2">✓ Valid Invoice Examples:</p>
                    <p className="text-blue-600 text-sm">Try searching with: <span className="font-bold text-blue-700">INV-001</span></p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      {searched && invoiceData && (
        <section className="py-12 md:py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="space-y-8">
              {/* Invoice Info Header */}
              <div className="bg-white rounded-xl shadow-md border border-gray-100 p-6 md:p-8">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <p className="text-sm text-gray-600 font-medium">Invoice Number</p>
                    <p className="text-2xl md:text-3xl font-bold text-gray-900 mt-1">
                      {invoiceData.invoiceNumber}
                    </p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-4 h-4 rounded-full bg-green-500" />
                    <span className="text-lg font-semibold text-green-700 capitalize">
                      {invoiceData.status.replace(/_/g, ' ')}
                    </span>
                  </div>
                </div>
              </div>

              {/* Order Status Tracker */}
              <OrderStatusTracker status={invoiceData.status} updatedAt={invoiceData.updatedAt} />

              {/* Help Section */}
              <div className="bg-gradient-to-r from-orange-50 to-yellow-50 rounded-xl border border-orange-200 p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Need Help?</h3>
                <p className="text-gray-700 mb-4">
                  If you can&apos;t find your invoice or have questions about your order:
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start space-x-3">
                    <span className="text-green-600 font-bold">📧</span>
                    <span>Check your email for the invoice details in your order confirmation</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-green-600 font-bold">📞</span>
                    <span>Contact us at <a href="tel:+918975040173" className="text-green-600 font-semibold hover:underline">+91 8975040173</a></span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-green-600 font-bold">💬</span>
                    <span>Message us on WhatsApp for instant support</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Empty State */}
      {!searched && (
        <section className="py-12 md:py-20 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center space-y-6">
              <div className="text-6xl">📦</div>
              <h2 className="text-2xl font-bold text-gray-900">
                Enter Your Invoice Number
              </h2>
              <p className="text-gray-600 text-lg">
                Start tracking your order by searching for your invoice number above
              </p>
            </div>
          </div>
        </section>
      )}
    </main>
  );
}
