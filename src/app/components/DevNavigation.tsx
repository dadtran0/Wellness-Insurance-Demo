import { useNavigate, useLocation } from 'react-router';
import { ChevronLeft, ChevronRight, Home, Network } from 'lucide-react';

export function DevNavigation() {
  const navigate = useNavigate();
  const location = useLocation();

  const screens = [
    { path: '/zalopay-entry', name: 'ZaloPay Entry' },
    { path: '/subscription-success', name: 'Subscription' },
    { path: '/dashboard', name: 'Dashboard' },
    { path: '/unlock', name: 'Unlock Modal' },
    { path: '/scan', name: 'Elfie Scan' },
    { path: '/result', name: 'Result & Payout' },
    { path: '/flow-diagram', name: 'System Flow' },
  ];

  const currentIndex = screens.findIndex(s => s.path === location.pathname);
  const canGoPrev = currentIndex > 0;
  const canGoNext = currentIndex < screens.length - 1;
  const isFlowDiagram = location.pathname === '/flow-diagram';

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
      <div className="bg-gray-900/95 backdrop-blur-sm text-white rounded-full px-6 py-3 shadow-2xl flex items-center gap-4">
        <button
          onClick={() => canGoPrev && navigate(screens[currentIndex - 1].path)}
          disabled={!canGoPrev}
          className="disabled:opacity-30 disabled:cursor-not-allowed hover:text-blue-400 transition-colors"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        <div className="text-center min-w-[140px]">
          <div className="text-xs text-gray-400 mb-0.5">
            {isFlowDiagram ? 'Documentation' : `Screen ${currentIndex + 1}/6`}
          </div>
          <div className="text-sm font-medium">{screens[currentIndex]?.name}</div>
        </div>

        <button
          onClick={() => canGoNext && navigate(screens[currentIndex + 1].path)}
          disabled={!canGoNext}
          className="disabled:opacity-30 disabled:cursor-not-allowed hover:text-blue-400 transition-colors"
        >
          <ChevronRight className="w-5 h-5" />
        </button>

        <div className="w-px h-6 bg-gray-700 mx-2" />

        <button
          onClick={() => navigate('/zalopay-entry')}
          className="hover:text-blue-400 transition-colors"
          title="Reset to start"
        >
          <Home className="w-5 h-5" />
        </button>

        <button
          onClick={() => navigate('/flow-diagram')}
          className={`hover:text-blue-400 transition-colors ${isFlowDiagram ? 'text-blue-400' : ''}`}
          title="View system flow"
        >
          <Network className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}
