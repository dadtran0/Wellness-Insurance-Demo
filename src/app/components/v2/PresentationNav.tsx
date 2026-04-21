import { useNavigate, useLocation } from 'react-router';
import { Home, Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';

export function PresentationNav() {
  const navigate = useNavigate();
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [showHint, setShowHint] = useState(true);

  // Auto-hide hint after 8 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowHint(false);
    }, 8000);
    return () => clearTimeout(timer);
  }, []);

  const flows = [
    {
      name: 'Core Journeys',
      screens: [
        { path: '/v2/bill-payment', label: '💳 Bill Payment Journey' },
        { path: '/v2/notification', label: '🏠 Health Services Journey' },
      ]
    },
    {
      name: 'Account & Contract Management',
      screens: [
        { path: '/v2/my-account', label: '👤 My Account Overview' },
      ]
    },
    {
      name: 'Documentation',
      screens: [
        { path: '/flow-diagram', label: '📋 Technical Flow Diagram' },
      ]
    }
  ];

  return (
    <>
      {/* Initial Hint Tooltip */}
      {showHint && !isOpen && (
        <div className="fixed bottom-24 right-6 z-50 animate-fadeIn">
          <div className="bg-gradient-to-r from-yellow-400 to-orange-400 text-gray-900 px-5 py-3 rounded-2xl shadow-2xl border-2 border-yellow-300 relative">
            <div className="absolute -bottom-2 right-8 w-4 h-4 bg-yellow-400 border-r-2 border-b-2 border-yellow-300 transform rotate-45"></div>
            <p className="text-sm font-bold mb-1">👋 Welcome to the Demo!</p>
            <p className="text-xs">Click the menu button below to navigate</p>
            <button
              onClick={() => setShowHint(false)}
              className="absolute -top-2 -right-2 w-6 h-6 bg-gray-800 text-white rounded-full text-xs hover:bg-gray-900"
            >
              ✕
            </button>
          </div>
        </div>
      )}

      {/* Toggle Button with Label */}
      <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3">
        {!isOpen && (
          <div className="bg-blue-600 text-white px-4 py-2 rounded-l-full shadow-lg animate-pulse">
            <p className="text-sm font-semibold whitespace-nowrap">📱 Navigation Menu</p>
          </div>
        )}
        <button
          onClick={() => {
            setIsOpen(!isOpen);
            setShowHint(false);
          }}
          className="w-14 h-14 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-2xl flex items-center justify-center transition-all hover:scale-110"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Navigation Panel */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50 w-80 max-h-[70vh] bg-white rounded-2xl shadow-2xl border-2 border-gray-200 overflow-hidden flex flex-col font-sans">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-4 border-b border-blue-700">
            <h3 className="font-bold text-lg mb-1">Presentation Navigation</h3>
            <p className="text-xs text-blue-100">Click to jump to any screen</p>
          </div>

          <div className="overflow-y-auto p-4 space-y-5">
            {flows.map((flow, idx) => (
              <div key={idx}>
                <div className="flex items-center gap-2 mb-3">
                  <div className="h-px flex-1 bg-gray-200"></div>
                  <h4 className="font-bold text-gray-600 text-xs uppercase tracking-wider">{flow.name}</h4>
                  <div className="h-px flex-1 bg-gray-200"></div>
                </div>
                <div className="space-y-2">
                  {flow.screens.map((screen, sidx) => (
                    <button
                      key={sidx}
                      onClick={() => {
                        navigate(screen.path);
                        setIsOpen(false);
                      }}
                      className={`group w-full text-left px-4 py-3 rounded-xl text-sm transition-all shadow-sm ${
                        location.pathname === screen.path.split('?')[0]
                          ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold shadow-md scale-105'
                          : 'bg-white hover:bg-blue-50 text-gray-700 hover:text-blue-700 border border-gray-200 hover:border-blue-300 hover:shadow-md'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span>{screen.label}</span>
                        {location.pathname !== screen.path.split('?')[0] && (
                          <span className="text-xs opacity-0 group-hover:opacity-100 transition-opacity text-blue-600">
                            Click to open →
                          </span>
                        )}
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="p-4 border-t-2 border-gray-200 bg-gradient-to-r from-gray-50 to-gray-100">
            <button
              onClick={() => {
                navigate('/v2/bill-payment');
                setIsOpen(false);
              }}
              className="w-full bg-gradient-to-r from-gray-700 to-gray-800 hover:from-gray-800 hover:to-gray-900 text-white font-semibold py-3 rounded-xl text-sm flex items-center justify-center gap-2 shadow-md transition-all hover:shadow-lg"
            >
              <Home className="w-5 h-5" />
              Reset to Bill Payment (Start)
            </button>
            <p className="text-xs text-gray-500 text-center mt-2">
              Quick jump to beginning of demo
            </p>
          </div>
        </div>
      )}

      {/* Backdrop */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-black/20 z-40"
        />
      )}

      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out;
        }
      `}</style>
    </>
  );
}
