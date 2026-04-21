import { useState, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router';
import { Camera, Loader2, Activity } from 'lucide-react';

export function BodyVitalsScan() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const resultType = searchParams.get('result') || 'normal';

  const [progress, setProgress] = useState(0);
  const [isScanning, setIsScanning] = useState(false);

  useEffect(() => {
    const startTimer = setTimeout(() => setIsScanning(true), 1000);
    return () => clearTimeout(startTimer);
  }, []);

  useEffect(() => {
    if (isScanning && progress < 100) {
      const timer = setTimeout(() => {
        setProgress(prev => Math.min(prev + 6.67, 100)); // 15 seconds
      }, 300);
      return () => clearTimeout(timer);
    }

    if (progress >= 100) {
      const redirect = setTimeout(() => {
        navigate(`/v2/body-vitals-result?result=${resultType}`);
      }, 800);
      return () => clearTimeout(redirect);
    }
  }, [isScanning, progress, navigate, resultType]);

  return (
    <div className="min-h-full bg-gray-900 font-sans flex flex-col">
      {/* Header */}
      <div className="bg-gray-800 text-white p-4">
        <h1 className="font-semibold text-center">Body Vitals Check</h1>
      </div>

      {/* Camera View */}
      <div className="flex-1 flex flex-col items-center justify-center p-6">
        {!isScanning ? (
          <>
            <div className="relative w-64 h-64 mb-6">
              <div className="absolute inset-0 bg-gradient-to-br from-gray-700 to-gray-800 rounded-3xl overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <Activity className="w-32 h-32 text-blue-400 opacity-50" />
                </div>
                <div className="absolute top-4 right-4">
                  <Camera className="w-6 h-6 text-white opacity-75" />
                </div>
              </div>
            </div>
            <h2 className="text-white text-lg font-semibold mb-2">Position Your Upper Body</h2>
            <p className="text-gray-400 text-sm">Keep your torso visible</p>
          </>
        ) : (
          <>
            <div className="relative w-64 h-64 mb-6">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-blue-800 rounded-3xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/30 to-transparent h-8 animate-scan" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <Activity className="w-32 h-32 text-white opacity-50" />
                </div>
              </div>
              <div className="absolute inset-0 bg-blue-500 rounded-3xl animate-pulse opacity-20" />
            </div>

            <div className="text-center w-full max-w-xs mb-6">
              <div className="flex items-center justify-center gap-2 mb-4">
                <Loader2 className="w-5 h-5 text-blue-400 animate-spin" />
                <h2 className="text-white text-xl font-semibold">Measuring Vitals...</h2>
              </div>

              {/* Vital Signs Display */}
              <div className="grid grid-cols-2 gap-3 mb-4">
                <div className="bg-gray-800 rounded-lg p-3">
                  <p className="text-xs text-gray-400 mb-1">Heart Rate</p>
                  <p className="text-lg font-bold text-green-400">{Math.floor(60 + progress * 0.15)} BPM</p>
                </div>
                <div className="bg-gray-800 rounded-lg p-3">
                  <p className="text-xs text-gray-400 mb-1">Breathing</p>
                  <p className="text-lg font-bold text-blue-400">{Math.floor(12 + progress * 0.04)} /min</p>
                </div>
              </div>

              <div className="w-full bg-gray-700 rounded-full h-3 overflow-hidden mb-2">
                <div className="h-full bg-gradient-to-r from-blue-500 to-blue-600 transition-all duration-300" style={{ width: `${progress}%` }} />
              </div>
              <p className="text-gray-400 text-sm">{progress.toFixed(0)}% complete</p>
            </div>

            <div className="bg-gray-800 rounded-xl p-4 border border-gray-700">
              <p className="text-xs text-gray-400 text-center">
                AI processing powered by <span className="text-blue-400 font-semibold">Elfie</span>
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
