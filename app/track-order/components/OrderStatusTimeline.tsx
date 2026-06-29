'use client';

import { FaBox, FaWater, FaCubes, FaHammer, FaPrint, FaCheckCircle, FaShoppingCart, FaCog, FaCheck } from 'react-icons/fa';

interface Status {
  id: number;
  statusName: string;
  statusOrder: number;
  completedAt: string | null;
}

interface OrderStatusTimelineProps {
  statuses: Status[];
}

// Map status names to icons
const getStatusIcon = (statusName: string) => {
  const iconClass = "w-8 h-8";
  
  switch (statusName.toLowerCase()) {
    case 'cutting':
      return <FaBox className={iconClass} />;
    case 'moisture proofing':
      return <FaWater className={iconClass} />;
    case 'weaving':
      return <FaCubes className={iconClass} />;
    case 'extrusion':
      return <FaHammer className={iconClass} />;
    case 'printing':
      return <FaPrint className={iconClass} />;
    case 'webbing':
      return <FaCubes className={iconClass} />;
    case 'sewing unit':
      return <FaBox className={iconClass} />;
    case 'packing':
      return <FaBox className={iconClass} />;
    case 'burst test':
      return <FaWater className={iconClass} />;
    case 'inspection':
      return <FaCheckCircle className={iconClass} />;
    case 'storage':
      return <FaShoppingCart className={iconClass} />;
    case 'cylinder creation in progress':
      return <FaCog className={iconClass} />;
    case 'cylinder creation done':
      return <FaCheck className={iconClass} />;
    default:
      return <FaBox className={iconClass} />;
  }
};

export default function OrderStatusTimeline({ statuses }: OrderStatusTimelineProps) {
  // Find the current status (first one without completedAt or the last one)
  const currentStatusIndex = statuses.findIndex((s) => !s.completedAt);
  const finalStatusIndex = currentStatusIndex === -1 ? statuses.length - 1 : currentStatusIndex;

  return (
    <div className="w-full">
      {/* Desktop Timeline - Horizontal */}
      <div className="hidden md:block">
        <div className="flex items-start gap-2 overflow-x-auto pb-4">
          {statuses.map((status, index) => {
            const isCompleted = status.completedAt !== null;
            const isCurrent = index === finalStatusIndex;
            
            return (
              <div key={status.id} className="flex flex-col items-center flex-shrink-0">
                {/* Status Circle */}
                <div
                  className={`w-16 h-16 rounded-full flex items-center justify-center transition-all duration-200 ${
                    isCompleted
                      ? 'bg-green-100 text-green-700 shadow-lg'
                      : isCurrent
                      ? 'bg-blue-100 text-blue-700 shadow-lg animate-pulse'
                      : 'bg-gray-100 text-gray-400'
                  }`}
                >
                  {getStatusIcon(status.statusName)}
                </div>
                
                {/* Status Label */}
                <p
                  className={`text-xs font-semibold mt-3 text-center max-w-[80px] leading-tight ${
                    isCompleted
                      ? 'text-green-700'
                      : isCurrent
                      ? 'text-blue-700'
                      : 'text-gray-500'
                  }`}
                >
                  {status.statusName}
                </p>

                {/* Completion Date */}
                {status.completedAt && (
                  <p className="text-xs text-gray-500 mt-1">
                    {new Date(status.completedAt).toLocaleDateString()}
                  </p>
                )}

                {/* Connector Line */}
                {index < statuses.length - 1 && (
                  <div
                    className={`w-12 h-1 mt-2 ${
                      isCompleted ? 'bg-green-400' : 'bg-gray-300'
                    }`}
                  />
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Mobile Timeline - Vertical */}
      <div className="md:hidden">
        <div className="space-y-6">
          {statuses.map((status, index) => {
            const isCompleted = status.completedAt !== null;
            const isCurrent = index === finalStatusIndex;
            
            return (
              <div key={status.id} className="flex gap-4">
                {/* Timeline Dot and Line */}
                <div className="flex flex-col items-center">
                  <div
                    className={`w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-200 ${
                      isCompleted
                        ? 'bg-green-100 text-green-700 shadow-lg'
                        : isCurrent
                        ? 'bg-blue-100 text-blue-700 shadow-lg animate-pulse'
                        : 'bg-gray-100 text-gray-400'
                    }`}
                  >
                    {getStatusIcon(status.statusName)}
                  </div>
                  
                  {/* Vertical Connector */}
                  {index < statuses.length - 1 && (
                    <div
                      className={`w-1 h-12 mt-2 ${
                        isCompleted ? 'bg-green-400' : 'bg-gray-300'
                      }`}
                    />
                  )}
                </div>

                {/* Status Content */}
                <div className="pt-1 pb-6">
                  <p
                    className={`font-semibold text-lg ${
                      isCompleted
                        ? 'text-green-700'
                        : isCurrent
                        ? 'text-blue-700'
                        : 'text-gray-500'
                    }`}
                  >
                    {status.statusName}
                  </p>
                  {status.completedAt ? (
                    <p className="text-sm text-gray-600 mt-1">
                      Completed on {new Date(status.completedAt).toLocaleDateString()}
                    </p>
                  ) : isCurrent ? (
                    <p className="text-sm text-blue-600 mt-1 font-semibold">In Progress</p>
                  ) : (
                    <p className="text-sm text-gray-500 mt-1">Pending</p>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Status Summary */}
      <div className="mt-12 pt-8 border-t border-slate-200">
        <div className="grid grid-cols-3 gap-4 text-center">
          <div>
            <p className="text-2xl font-bold text-green-600">{statuses.filter(s => s.completedAt).length}/{statuses.length}</p>
            <p className="text-sm text-slate-600 mt-1">Steps Completed</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-blue-600">{finalStatusIndex + 1}/{statuses.length}</p>
            <p className="text-sm text-slate-600 mt-1">Current Step</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-slate-600">
              {Math.round((statuses.filter(s => s.completedAt).length / statuses.length) * 100)}%
            </p>
            <p className="text-sm text-slate-600 mt-1">Progress</p>
          </div>
        </div>
      </div>
    </div>
  );
}
