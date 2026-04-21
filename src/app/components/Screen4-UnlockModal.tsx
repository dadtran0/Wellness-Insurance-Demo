import { useNavigate } from 'react-router';
import { Unlock, User, Activity, TrendingUp, DollarSign, CheckCircle } from 'lucide-react';

export function UnlockModal() {
  const navigate = useNavigate();

  return (
    <div className="min-h-full bg-gradient-to-b from-purple-50 to-blue-50 flex flex-col items-center justify-center p-6">
      {/* Icon */}
      <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center mb-6 shadow-xl">
        <Unlock className="w-10 h-10 text-white" />
      </div>

      {/* Title */}
      <h1 className="text-2xl font-bold text-gray-900 mb-2 text-center">
        Advanced Health Scan
      </h1>
      <p className="text-gray-600 text-center mb-8 max-w-xs">
        Get detailed AI-powered analysis of your health vitals
      </p>

      {/* Features */}
      <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 mb-6 w-full max-w-sm">
        <h3 className="font-semibold text-gray-900 mb-4">What You'll Get:</h3>

        <div className="space-y-4">
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
              <User className="w-5 h-5 text-purple-600" />
            </div>
            <div>
              <h4 className="font-medium text-gray-900 text-sm">AI Face Scan</h4>
              <p className="text-xs text-gray-500">Analyze facial vitals and health indicators</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
              <Activity className="w-5 h-5 text-blue-600" />
            </div>
            <div>
              <h4 className="font-medium text-gray-900 text-sm">Body Vitals Check</h4>
              <p className="text-xs text-gray-500">Comprehensive health status assessment</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center flex-shrink-0">
              <TrendingUp className="w-5 h-5 text-indigo-600" />
            </div>
            <div>
              <h4 className="font-medium text-gray-900 text-sm">Risk Assessment</h4>
              <p className="text-xs text-gray-500">Personalized health risk analysis</p>
            </div>
          </div>
        </div>

        {/* Benefit Highlight */}
        <div className="mt-6 pt-6 border-t border-gray-100">
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-4 border border-green-200">
            <div className="flex items-start gap-3">
              <DollarSign className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-green-900 text-sm mb-1">
                  Cash Benefit Included
                </h4>
                <p className="text-xs text-green-700">
                  If abnormality is detected, you'll receive <span className="font-bold">100,000đ</span> instantly to your ZaloPay wallet
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Privacy Note */}
      <div className="bg-gray-50 rounded-xl p-4 border border-gray-200 mb-6 w-full max-w-sm">
        <div className="flex items-start gap-2">
          <CheckCircle className="w-4 h-4 text-gray-400 mt-0.5 flex-shrink-0" />
          <p className="text-xs text-gray-600">
            Your data is encrypted and protected by Chubb. Scans are for wellness monitoring only, not medical diagnosis.
          </p>
        </div>
      </div>

      {/* CTAs */}
      <div className="space-y-3 w-full max-w-sm">
        <button
          onClick={() => navigate('/scan')}
          className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold py-4 rounded-xl transition-all shadow-lg transform hover:scale-105"
        >
          Continue to Scan
        </button>
        <button
          onClick={() => navigate('/dashboard')}
          className="w-full bg-white hover:bg-gray-50 text-gray-700 font-medium py-3 rounded-xl border border-gray-200 transition-colors"
        >
          Not Now
        </button>
      </div>

      {/* Footer */}
      <p className="text-xs text-gray-400 text-center mt-6">
        Usage: 0/2 scans remaining this month
      </p>
    </div>
  );
}
