import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import { Camera, User, Loader2 } from 'lucide-react';

export function ElfieScan() {
  const navigate = useNavigate();
  const [isScanning, setIsScanning] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (isScanning && progress < 100) {
      const timer = setTimeout(() => {
        setProgress(prev => Math.min(prev + 10, 100));
      }, 300);
      return () => clearTimeout(timer);
    }

    if (progress >= 100) {
      const redirect = setTimeout(() => {
        navigate('/result');
      }, 1000);
      return () => clearTimeout(redirect);
    }
  }, [isScanning, progress, navigate]);

  const handleStartScan = () => {
    setIsScanning(true);
    setProgress(0);
  };

  return (
    <div className="min-h-full bg-gray-900 flex flex-col">
      {/* Header */}
      <div className="bg-gray-800 text-white p-4 flex items-center justify-between">
        <button
          onClick={() => navigate('/unlock')}
          className="text-gray-400 hover:text-white"
        >
          ← Back
        </button>
        <h1 className="font-semibold">Face Scan</h1>
        <div className="w-6" />
      </div>

      {/* Camera View */}
      <div className="flex-1 flex flex-col items-center justify-center p-6">
        {!isScanning ? (
          <>
            {/* Camera Preview Area */}
            <div className="relative w-64 h-64 mb-8">
              {/* Camera background */}
              <div className="absolute inset-0 bg-gradient-to-br from-gray-700 to-gray-800 rounded-3xl overflow-hidden">
                {/* Simulated camera feed */}
                <div className="absolute inset-0 bg-gradient-to-b from-blue-900/20 to-purple-900/20" />

                {/* Face guide overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative w-48 h-56">
                    {/* Face outline */}
                    <svg
                      className="w-full h-full text-blue-400 opacity-50"
                      viewBox="0 0 100 120"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <ellipse cx="50" cy="60" rx="35" ry="45" />
                      <circle cx="38" cy="50" r="3" fill="currentColor" />
                      <circle cx="62" cy="50" r="3" fill="currentColor" />
                      <path d="M 35 75 Q 50 80 65 75" />
                    </svg>

                    {/* Corner guides */}
                    <div className="absolute top-0 left-0 w-6 h-6 border-l-2 border-t-2 border-blue-400" />
                    <div className="absolute top-0 right-0 w-6 h-6 border-r-2 border-t-2 border-blue-400" />
                    <div className="absolute bottom-0 left-0 w-6 h-6 border-l-2 border-b-2 border-blue-400" />
                    <div className="absolute bottom-0 right-0 w-6 h-6 border-r-2 border-b-2 border-blue-400" />
                  </div>
                </div>

                {/* Camera icon */}
                <div className="absolute top-4 right-4">
                  <Camera className="w-6 h-6 text-white opacity-75" />
                </div>
              </div>
            </div>

            {/* Instructions */}
            <div className="text-center mb-8">
              <h2 className="text-white text-xl font-semibold mb-3">
                Position Your Face
              </h2>
              <p className="text-gray-400 text-sm mb-2">
                Align your face within the guide
              </p>
              <p className="text-gray-400 text-sm">
                Hold still for 10 seconds
              </p>
            </div>

            {/* Start Button */}
            <button
              onClick={handleStartScan}
              className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold py-4 px-12 rounded-full transition-all shadow-lg transform hover:scale-105 flex items-center gap-2"
            >
              <User className="w-5 h-5" />
              Start Scan
            </button>
          </>
        ) : (
          <>
            {/* Scanning Animation */}
            <div className="relative w-64 h-64 mb-8">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600 to-blue-600 rounded-3xl overflow-hidden">
                {/* Animated scanning line */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/30 to-transparent h-8 animate-scan" />

                {/* Face icon */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <User className="w-32 h-32 text-white opacity-50" />
                </div>
              </div>

              {/* Pulse effect */}
              <div className="absolute inset-0 bg-blue-500 rounded-3xl animate-pulse opacity-20" />
            </div>

            {/* Scanning Status */}
            <div className="text-center mb-8 w-full max-w-xs">
              <div className="flex items-center justify-center gap-2 mb-4">
                <Loader2 className="w-5 h-5 text-blue-400 animate-spin" />
                <h2 className="text-white text-xl font-semibold">
                  Analyzing...
                </h2>
              </div>

              {/* Progress Bar */}
              <div className="w-full bg-gray-700 rounded-full h-3 overflow-hidden mb-2">
                <div
                  className="h-full bg-gradient-to-r from-purple-500 to-blue-500 transition-all duration-300"
                  style={{ width: `${progress}%` }}
                />
              </div>
              <p className="text-gray-400 text-sm">{progress}% complete</p>
            </div>

            {/* AI Processing */}
            <div className="bg-gray-800 rounded-xl p-4 border border-gray-700">
              <p className="text-xs text-gray-400 text-center">
                AI processing powered by <span className="text-blue-400 font-semibold">Elfie</span>
              </p>
            </div>
          </>
        )}
      </div>

      {/* Footer Info */}
      {!isScanning && (
        <div className="p-6 bg-gray-800 border-t border-gray-700">
          <p className="text-xs text-gray-400 text-center">
            Your scan data is encrypted and secure. Results are for wellness monitoring only, not medical diagnosis.
          </p>
        </div>
      )}

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
