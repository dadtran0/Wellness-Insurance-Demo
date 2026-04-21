import { useState } from 'react';
import { useNavigate } from 'react-router';
import { Shield, Lock, ArrowRight } from 'lucide-react';

export function LandingPage() {
  const navigate = useNavigate();
  const [passcode, setPasscode] = useState('');
  const [error, setError] = useState(false);
  const [isShaking, setIsShaking] = useState(false);

  const CORRECT_PASSCODE = 'Chubb2026Wellness';

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (passcode === CORRECT_PASSCODE) {
      navigate('/v2/bill-payment');
    } else {
      setError(true);
      setIsShaking(true);
      setTimeout(() => setIsShaking(false), 500);
      setTimeout(() => setError(false), 2000);
      setPasscode('');
    }
  };

  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-6 font-sans">
      <div className="w-full max-w-md">
        {/* Logo Section */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-full shadow-2xl mb-6">
            <Shield className="w-12 h-12 text-white" />
          </div>
          <h1 className="text-4xl font-extrabold text-gray-900 mb-3 tracking-tight">
            DIGITAL WELLNESS INSURANCE
          </h1>
        </div>

        {/* Passcode Card */}
        <div className="bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700 rounded-3xl shadow-2xl p-8">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
              <Lock className="w-6 h-6 text-white" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-white">Access Demo</h2>
              <p className="text-sm text-white/80">Enter passcode to continue</p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="passcode" className="block text-sm font-semibold text-white mb-2">
                Passcode
              </label>
              <input
                type="password"
                id="passcode"
                value={passcode}
                onChange={(e) => setPasscode(e.target.value)}
                className={`w-full px-5 py-4 border-2 rounded-xl text-center text-2xl font-bold tracking-widest focus:outline-none transition-all ${
                  error
                    ? 'border-red-500 bg-red-50 text-red-600'
                    : 'border-white/30 bg-white/10 text-white placeholder-white/50 focus:border-white focus:bg-white/20'
                } ${isShaking ? 'animate-shake' : ''}`}
                placeholder="••••••••••••••••••"
                maxLength={20}
                autoFocus
              />
              {error && (
                <p className="text-red-200 text-sm mt-2 text-center font-medium">
                  Incorrect passcode. Please try again.
                </p>
              )}
            </div>

            <button
              type="submit"
              className="w-full bg-white hover:bg-gray-100 text-blue-600 font-bold py-4 rounded-xl transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2 group"
            >
              <span>Enter Demo</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </form>

          <div className="mt-6 pt-6 border-t border-white/20">
            <div className="bg-white/10 rounded-xl p-4">
              <h3 className="font-semibold text-white text-sm mb-2">Demo Includes:</h3>
              <ul className="text-xs text-white/90 space-y-1">
                <li>• Bill Payment with Opt-out Insurance</li>
                <li>• Health Services Dashboard</li>
                <li>• AI Scanning Features (Face, Body, Risk)</li>
                <li>• Contract Management System</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          10%, 30%, 50%, 70%, 90% { transform: translateX(-10px); }
          20%, 40%, 60%, 80% { transform: translateX(10px); }
        }
        .animate-shake {
          animation: shake 0.5s ease-in-out;
        }
      `}</style>
    </div>
  );
}
