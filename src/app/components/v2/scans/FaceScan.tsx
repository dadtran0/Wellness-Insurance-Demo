import { useState, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router';
import { Camera, Loader2, User } from 'lucide-react';

export function FaceScan() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const resultType = searchParams.get('result') || 'normal';

  const [progress, setProgress] = useState(0);
  const [isScanning, setIsScanning] = useState(false);

  useEffect(() => {
    // Auto-start scanning after 1 second
    const startTimer = setTimeout(() => setIsScanning(true), 1000);
    return () => clearTimeout(startTimer);
  }, []);

  useEffect(() => {
    if (isScanning && progress < 100) {
      const timer = setTimeout(() => {
        setProgress(prev => Math.min(prev + 10, 100));
      }, 300);
      return () => clearTimeout(timer);
    }

    if (progress >= 100) {
      const redirect = setTimeout(() => {
        navigate(`/v2/face-scan-result?result=${resultType}`);
      }, 800);
      return () => clearTimeout(redirect);
    }
  }, [isScanning, progress, navigate, resultType]);

  return (
    <div className="min-h-full bg-gray-900 font-sans flex flex-col">
      {/* Header */}
      <div className="bg-gray-800 text-white p-4">
        <h1 className="font-semibold text-center">AI Face Scan</h1>
      </div>

      {/* Camera View */}
      <div className="flex-1 flex flex-col items-center justify-center p-6">
        {!isScanning ? (
          <>
            <div className="relative w-64 h-64 mb-6">
              <div className="absolute inset-0 bg-gradient-to-br from-gray-700 to-gray-800 rounded-3xl overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative w-48 h-56">
                    <svg className="w-full h-full text-purple-400 opacity-50" viewBox="0 0 100 120" fill="none" stroke="currentColor" strokeWidth="2">
                      <ellipse cx="50" cy="60" rx="35" ry="45" />
                      <circle cx="38" cy="50" r="3" fill="currentColor" />
                      <circle cx="62" cy="50" r="3" fill="currentColor" />
                      <path d="M 35 75 Q 50 80 65 75" />
                    </svg>
                    <div className="absolute top-0 left-0 w-6 h-6 border-l-2 border-t-2 border-purple-400" />
                    <div className="absolute top-0 right-0 w-6 h-6 border-r-2 border-t-2 border-purple-400" />
                    <div className="absolute bottom-0 left-0 w-6 h-6 border-l-2 border-b-2 border-purple-400" />
                    <div className="absolute bottom-0 right-0 w-6 h-6 border-r-2 border-b-2 border-purple-400" />
                  </div>
                </div>
                <div className="absolute top-4 right-4">
                  <Camera className="w-6 h-6 text-white opacity-75" />
                </div>
              </div>
            </div>
            <h2 className="text-white text-lg font-semibold mb-2">Position Your Face</h2>
            <p className="text-gray-400 text-sm">Align within the guide</p>
          </>
        ) : (
          <>
            <div className="relative w-64 h-64 mb-6">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600 to-purple-800 rounded-3xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/30 to-transparent h-8 animate-scan" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <User className="w-32 h-32 text-white opacity-50" />
                </div>
              </div>
              <div className="absolute inset-0 bg-purple-500 rounded-3xl animate-pulse opacity-20" />
            </div>

            <div className="text-center w-full max-w-xs mb-6">
              <div className="flex items-center justify-center gap-2 mb-4">
                <Loader2 className="w-5 h-5 text-purple-400 animate-spin" />
                <h2 className="text-white text-xl font-semibold">Analyzing Face...</h2>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-3 overflow-hidden mb-2">
                <div className="h-full bg-gradient-to-r from-purple-500 to-purple-600 transition-all duration-300" style={{ width: `${progress}%` }} />
              </div>
              <p className="text-gray-400 text-sm">{progress}% complete</p>
            </div>

            <div className="bg-gray-800 rounded-xl p-4 border border-gray-700">
              <p className="text-xs text-gray-400 text-center">
                AI processing powered by <span className="text-purple-400 font-semibold">Elfie</span>
              </p>
            </div>
          </>
        )}
      </div>

      <style>{`
        @keyframes scan {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(240px); }
        }
        .animate-scan {
          animation: scan 2s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
