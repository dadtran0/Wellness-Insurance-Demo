import { useState, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router';
import { Camera, Loader2, TrendingUp, Activity, User } from 'lucide-react';

export function RiskAssessmentScan() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const resultType = searchParams.get('result') || 'normal';

  const [progress, setProgress] = useState(0);
  const [isScanning, setIsScanning] = useState(false);
  const [phase, setPhase] = useState<'face' | 'body' | 'analysis'>('face');

  useEffect(() => {
    const startTimer = setTimeout(() => setIsScanning(true), 1000);
    return () => clearTimeout(startTimer);
  }, []);

  useEffect(() => {
    if (isScanning && progress < 100) {
      const timer = setTimeout(() => {
        const newProgress = Math.min(progress + 5, 100); // 20 seconds
        setProgress(newProgress);

        // Change phases
        if (newProgress < 40) {
          setPhase('face');
        } else if (newProgress < 75) {
          setPhase('body');
        } else {
          setPhase('analysis');
        }
      }, 300);
      return () => clearTimeout(timer);
    }

    if (progress >= 100) {
      const redirect = setTimeout(() => {
        navigate(`/v2/risk-assessment-result?result=${resultType}`);
      }, 800);
      return () => clearTimeout(redirect);
    }
  }, [isScanning, progress, navigate, resultType]);

  const getPhaseText = () => {
    switch (phase) {
      case 'face':
        return 'Analyzing facial markers...';
      case 'body':
        return 'Measuring vital signs...';
      case 'analysis':
        return 'Calculating risk score...';
    }
  };

  const getPhaseIcon = () => {
    switch (phase) {
      case 'face':
        return <User className="w-32 h-32 text-white opacity-50" />;
      case 'body':
        return <Activity className="w-32 h-32 text-white opacity-50" />;
      case 'analysis':
        return <TrendingUp className="w-32 h-32 text-white opacity-50" />;
    }
  };

  return (
    <div className="min-h-full bg-gray-900 font-sans flex flex-col">
      {/* Header */}
      <div className="bg-gray-800 text-white p-4">
        <h1 className="font-semibold text-center">Health Risk Assessment</h1>
      </div>

      {/* Camera View */}
      <div className="flex-1 flex flex-col items-center justify-center p-6">
        {!isScanning ? (
          <>
            <div className="relative w-64 h-64 mb-6">
              <div className="absolute inset-0 bg-gradient-to-br from-gray-700 to-gray-800 rounded-3xl overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <TrendingUp className="w-32 h-32 text-indigo-400 opacity-50" />
                </div>
                <div className="absolute top-4 right-4">
                  <Camera className="w-6 h-6 text-white opacity-75" />
                </div>
              </div>
            </div>
            <h2 className="text-white text-lg font-semibold mb-2">Get Ready</h2>
            <p className="text-gray-400 text-sm">Multi-phase scan starting...</p>
          </>
        ) : (
          <>
            <div className="relative w-64 h-64 mb-6">
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-600 to-purple-800 rounded-3xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/30 to-transparent h-8 animate-scan" />
                <div className="absolute inset-0 flex items-center justify-center">
                  {getPhaseIcon()}
                </div>
              </div>
              <div className="absolute inset-0 bg-indigo-500 rounded-3xl animate-pulse opacity-20" />
            </div>

            <div className="text-center w-full max-w-xs mb-6">
              <div className="flex items-center justify-center gap-2 mb-4">
                <Loader2 className="w-5 h-5 text-indigo-400 animate-spin" />
                <h2 className="text-white text-xl font-semibold">{getPhaseText()}</h2>
              </div>

              {/* Phase Indicators */}
              <div className="grid grid-cols-3 gap-2 mb-4">
                <div className={`rounded-lg p-2 ${phase === 'face' ? 'bg-indigo-600' : 'bg-gray-700'}`}>
                  <p className="text-xs text-white/80">Phase 1</p>
                  <p className="text-xs font-semibold text-white">Face</p>
                </div>
                <div className={`rounded-lg p-2 ${phase === 'body' ? 'bg-indigo-600' : 'bg-gray-700'}`}>
                  <p className="text-xs text-white/80">Phase 2</p>
                  <p className="text-xs font-semibold text-white">Body</p>
                </div>
                <div className={`rounded-lg p-2 ${phase === 'analysis' ? 'bg-indigo-600' : 'bg-gray-700'}`}>
                  <p className="text-xs text-white/80">Phase 3</p>
                  <p className="text-xs font-semibold text-white">Analysis</p>
                </div>
              </div>

              <div className="w-full bg-gray-700 rounded-full h-3 overflow-hidden mb-2">
                <div className="h-full bg-gradient-to-r from-indigo-500 to-purple-600 transition-all duration-300" style={{ width: `${progress}%` }} />
              </div>
              <p className="text-gray-400 text-sm">{progress.toFixed(0)}% complete</p>
            </div>

            <div className="bg-gray-800 rounded-xl p-4 border border-gray-700">
              <p className="text-xs text-gray-400 text-center">
                AI processing powered by <span className="text-indigo-400 font-semibold">Elfie</span>
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
