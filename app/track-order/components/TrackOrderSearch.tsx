'use client';

import { useState } from 'react';
import { FaSearch } from 'react-icons/fa';

interface TrackOrderSearchProps {
  onSearch: (invoiceNumber: string) => void;
  isLoading: boolean;
}

export default function TrackOrderSearch({ onSearch, isLoading }: TrackOrderSearchProps) {
  const [invoiceNumber, setInvoiceNumber] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (invoiceNumber.trim()) {
      onSearch(invoiceNumber.trim());
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full">
      <div className="bg-white rounded-lg shadow-lg p-6 md:p-8">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1">
            <label className="block text-sm font-semibold text-slate-700 mb-2">
              Invoice Number
            </label>
            <input
              type="text"
              value={invoiceNumber}
              onChange={(e) => setInvoiceNumber(e.target.value)}
              placeholder="Enter invoice number (e.g., INV-001)"
              className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent"
              disabled={isLoading}
            />
          </div>
          <div className="flex items-end">
            <button
              type="submit"
              disabled={isLoading}
              className="w-full md:w-auto bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <FaSearch size={18} />
              {isLoading ? 'Searching...' : 'Track Order'}
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}
