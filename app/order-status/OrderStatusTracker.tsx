'use client';

import { FaCheck, FaTruck } from 'react-icons/fa';

interface OrderStatusTrackerProps {
  status: string;
  updatedAt?: string | null;
}

const STAGES = [
  { key: 'order_received', name: 'Order Received' },
  { key: 'cylinder_creation_in_progress', name: 'Cylinder Creation In Progress' },
  { key: 'cylinder_completion_done', name: 'Cylinder Completion Done' },
  { key: 'processing', name: 'Processing' },
  { key: 'packed', name: 'Packed' },
  { key: 'shipped', name: 'Shipped' },
  { key: 'out_for_delivery', name: 'Out for Delivery' },
  { key: 'delivered', name: 'Delivered' },
];

function formatDate(value?: string | null) {
  if (!value) return null;
  return new Date(value).toLocaleDateString('en-IN', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  });
}

export default function OrderStatusTracker({ status, updatedAt }: OrderStatusTrackerProps) {
  const currentIndex = STAGES.findIndex((s) => s.key === status?.toLowerCase());
  const currentStage = currentIndex !== -1 ? STAGES[currentIndex] : null;
  const updatedLabel = formatDate(updatedAt);

  return (
    <div className="rounded-xl border border-gray-100 bg-white p-6 shadow-md md:p-8">
      {/* Header */}
      <div className="mb-6 flex items-center gap-2">
        <FaTruck className="h-4 w-4 text-green-600" />
        <h3 className="font-semibold text-gray-900">Order Tracking</h3>
        {updatedLabel && (
          <span className="text-sm text-gray-500">&middot; updated {updatedLabel}</span>
        )}
      </div>

      {/* Stepper */}
      <ol className="flex flex-wrap items-start gap-y-6">
        {STAGES.map((stage, index) => {
          const done = index < currentIndex;
          const active = index === currentIndex;

          return (
            <li key={stage.key} className="flex items-center">
              <div className="flex w-20 flex-col items-center gap-2 text-center sm:w-24">
                <span
                  className={[
                    'flex h-9 w-9 items-center justify-center rounded-full text-sm font-semibold transition-colors',
                    done
                      ? 'bg-green-600 text-white'
                      : active
                        ? 'bg-green-600 text-white ring-4 ring-green-100'
                        : 'bg-gray-200 text-gray-500',
                  ].join(' ')}
                >
                  {done ? <FaCheck className="h-3.5 w-3.5" /> : index + 1}
                </span>
                <span
                  className={[
                    'text-xs leading-tight',
                    active ? 'font-semibold text-gray-900' : done ? 'text-gray-700' : 'text-gray-400',
                  ].join(' ')}
                >
                  {stage.name}
                </span>
              </div>

              {index < STAGES.length - 1 && (
                <span
                  className={[
                    'mx-1 mt-[-1.25rem] h-0.5 w-6 shrink-0 sm:w-10',
                    index < currentIndex ? 'bg-green-600' : 'bg-gray-200',
                  ].join(' ')}
                />
              )}
            </li>
          );
        })}
      </ol>

      {/* History */}
      {currentStage && (
        <div className="mt-6 border-t border-gray-100 pt-4">
          <p className="mb-2 text-sm font-medium text-gray-500">History</p>
          <div className="flex items-center justify-between gap-3 text-sm">
            <span className="font-medium text-gray-900">{currentStage.name}</span>
            {updatedLabel && <span className="shrink-0 text-xs text-gray-500">{updatedLabel}</span>}
          </div>
        </div>
      )}
    </div>
  );
}
