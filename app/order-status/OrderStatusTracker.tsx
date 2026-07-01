'use client';

import { FaCheckCircle, FaCircle, FaTruck, FaBox, FaCheckDouble } from 'react-icons/fa';

interface OrderStatusTrackerProps {
  status: string;
}

const statusStages = [
  {
    id: 1,
    name: 'Order Received',
    key: 'order_received',
    icon: FaCheckCircle,
    color: 'bg-green-500',
  },
  {
    id: 2,
    name: 'Cylinder Creation In Progress',
    key: 'cylinder_creation_in_progress',
    icon: FaBox,
    color: 'bg-blue-500',
  },
  {
    id: 3,
    name: 'Cylinder Completion Done',
    key: 'cylinder_completion_done',
    icon: FaCheckDouble,
    color: 'bg-green-600',
  },
  {
    id: 4,
    name: 'Processing',
    key: 'processing',
    icon: FaBox,
    color: 'bg-yellow-500',
  },
  {
    id: 5,
    name: 'Packed',
    key: 'packed',
    icon: FaBox,
    color: 'bg-orange-500',
  },
  {
    id: 6,
    name: 'Shipped',
    key: 'shipped',
    icon: FaTruck,
    color: 'bg-blue-600',
  },
  {
    id: 7,
    name: 'Out for Delivery',
    key: 'out_for_delivery',
    icon: FaTruck,
    color: 'bg-purple-500',
  },
  {
    id: 8,
    name: 'Delivered',
    key: 'delivered',
    icon: FaCheckCircle,
    color: 'bg-green-700',
  },
];

export default function OrderStatusTracker({ status }: OrderStatusTrackerProps) {
  // Find current stage index
  const currentStageIndex = statusStages.findIndex(
    (stage) => stage.key === status.toLowerCase()
  );

  const isCompleted = (index: number) => index <= currentStageIndex;
  const isCurrentStage = (index: number) => index === currentStageIndex;

  return (
    <div className="space-y-8">
      {/* Desktop Timeline - Horizontal */}
      <div className="hidden md:block">
        <div className="bg-white rounded-xl shadow-md border border-gray-100 p-8">
          {/* Timeline Container */}
          <div className="relative">
            {/* Connecting Lines */}
            <div className="absolute top-8 left-0 right-0 h-1 bg-gray-200">
              <div
                className="h-full bg-gradient-to-r from-green-500 to-blue-500 transition-all duration-500"
                style={{
                  width: currentStageIndex === -1 ? '0%' : `${((currentStageIndex + 1) / statusStages.length) * 100}%`,
                }}
              />
            </div>

            {/* Timeline Stages */}
            <div className="grid grid-cols-8 gap-2 relative z-10">
              {statusStages.map((stage, index) => {
                const Icon = stage.icon;
                const completed = isCompleted(index);
                const current = isCurrentStage(index);

                return (
                  <div key={stage.id} className="flex flex-col items-center">
                    {/* Circle Icon */}
                    <div
                      className={`relative mb-4 p-3 rounded-full transition-all duration-300 ${
                        completed || current
                          ? stage.color
                          : 'bg-gray-300'
                      } shadow-lg transform ${current ? 'scale-110' : 'scale-100'}`}
                    >
                      <Icon className="w-6 h-6 text-white" />
                    </div>

                    {/* Stage Name */}
                    <div className="text-center">
                      <p
                        className={`text-sm font-semibold transition-colors ${
                          completed || current
                            ? 'text-gray-900'
                            : 'text-gray-400'
                        }`}
                      >
                        {stage.name.split(' ').slice(0, 2).join(' ')}
                      </p>
                      {stage.name.split(' ').length > 2 && (
                        <p
                          className={`text-xs transition-colors ${
                            completed || current
                              ? 'text-gray-600'
                              : 'text-gray-300'
                          }`}
                        >
                          {stage.name.split(' ').slice(2).join(' ')}
                        </p>
                      )}
                    </div>

                    {/* Checkmark for Completed */}
                    {completed && !current && (
                      <div className="absolute top-0 right-0 w-5 h-5 bg-green-500 rounded-full flex items-center justify-center shadow-lg">
                        <span className="text-white text-xs font-bold">✓</span>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Current Status Message */}
          {currentStageIndex !== -1 && (
            <div className="mt-8 p-4 bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-lg">
              <p className="text-center text-green-800 font-semibold">
                ✓ Your order is currently <span className="text-green-700 font-bold">{statusStages[currentStageIndex].name}</span>
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Mobile Timeline - Vertical */}
      <div className="md:hidden">
        <div className="space-y-4">
          {statusStages.map((stage, index) => {
            const Icon = stage.icon;
            const completed = isCompleted(index);
            const current = isCurrentStage(index);

            return (
              <div key={stage.id} className="relative">
                {/* Vertical Line Connector */}
                {index < statusStages.length - 1 && (
                  <div className="absolute left-6 top-16 w-1 h-8 bg-gray-200">
                    <div
                      className={`w-full transition-all ${completed ? 'bg-green-500' : 'bg-gray-200'}`}
                    />
                  </div>
                )}

                {/* Stage Container */}
                <div className="flex items-start gap-4">
                  {/* Circle Icon */}
                  <div
                    className={`relative mt-1 p-3 rounded-full flex-shrink-0 transition-all duration-300 ${
                      completed || current ? stage.color : 'bg-gray-300'
                    } shadow-lg transform ${current ? 'scale-110' : 'scale-100'}`}
                  >
                    <Icon className="w-5 h-5 text-white" />
                  </div>

                  {/* Content */}
                  <div className="flex-1 pt-1">
                    <h3
                      className={`text-base font-semibold transition-colors ${
                        completed || current
                          ? 'text-gray-900'
                          : 'text-gray-400'
                      }`}
                    >
                      {stage.name}
                    </h3>
                    {completed && !current && (
                      <p className="text-xs text-green-600 font-medium mt-1">✓ Completed</p>
                    )}
                    {current && (
                      <p className="text-xs text-blue-600 font-medium mt-1">→ Currently Here</p>
                    )}
                  </div>

                  {/* Checkmark for Completed */}
                  {completed && !current && (
                    <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white text-xs font-bold">✓</span>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Current Status Message */}
        {currentStageIndex !== -1 && (
          <div className="mt-6 p-4 bg-gradient-to-r from-blue-50 to-cyan-50 border border-blue-200 rounded-lg">
            <p className="text-center text-blue-800 font-semibold">
              ✓ Currently: <span className="text-blue-700 font-bold block mt-1">{statusStages[currentStageIndex].name}</span>
            </p>
          </div>
        )}
      </div>

      {/* Timeline Legend */}
      <div className="bg-gray-50 rounded-xl border border-gray-200 p-6">
        <h3 className="font-bold text-gray-900 mb-4">Status Timeline</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { color: 'bg-green-500', label: 'Completed' },
            { color: 'bg-blue-500', label: 'In Progress' },
            { color: 'bg-gray-300', label: 'Pending' },
          ].map((item, index) => (
            <div key={index} className="flex items-center gap-2">
              <div className={`w-3 h-3 rounded-full ${item.color}`} />
              <span className="text-sm text-gray-700">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
