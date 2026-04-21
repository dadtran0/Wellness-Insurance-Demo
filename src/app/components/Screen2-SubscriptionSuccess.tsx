import { useNavigate } from 'react-router';
import { Shield, CheckCircle2, Sparkles } from 'lucide-react';

export function SubscriptionSuccess() {
  const navigate = useNavigate();

  return (
    <div className="min-h-full bg-gradient-to-b from-blue-50 to-white flex flex-col items-center justify-center p-6">
      {/* Success Animation */}
      <div className="relative mb-8">
        <div className="absolute inset-0 bg-green-400 rounded-full opacity-20 animate-pulse" />
        <Shield className="w-24 h-24 text-green-500 relative z-10" />
        <CheckCircle2 className="w-10 h-10 text-white bg-green-500 rounded-full absolute -bottom-2 -right-2 z-20" />
      </div>

      {/* Title */}
      <h1 className="text-2xl font-bold text-gray-900 mb-3 text-center">
        You're Protected!
      </h1>

      {/* Subtitle */}
      <p className="text-gray-600 text-center mb-8 max-w-xs">
        Digital Wellness Cover is now active. Start your first health check now or later.
      </p>

      {/* Info Card */}
      <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 mb-8 w-full max-w-sm">
        <div className="flex items-center gap-3 mb-4">
          <Sparkles className="w-5 h-5 text-blue-600" />
          <h3 className="font-semibold text-gray-900">What's Included</h3>
        </div>

        <div className="space-y-3 text-sm">
          <div className="flex justify-between">
            <span className="text-gray-600">Monthly Premium</span>
            <span className="font-semibold text-gray-900">10,000đ</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Health Scans</span>
            <span className="font-semibold text-gray-900">2 per month</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Cash Benefit</span>
            <span className="font-semibold text-green-600">100,000đ</span>
          </div>
        </div>

        <div className="mt-4 pt-4 border-t border-gray-100">
          <p className="text-xs text-gray-500">
            Cash benefit paid instantly to ZaloPay wallet if abnormality detected
          </p>
        </div>
      </div>

      {/* CTAs */}
      <div className="space-y-3 w-full max-w-sm">
        <button
          onClick={() => navigate('/dashboard')}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 rounded-xl transition-colors shadow-lg"
        >
          Start Health Check
        </button>
        <button
          onClick={() => navigate('/dashboard')}
          className="w-full bg-white hover:bg-gray-50 text-gray-700 font-medium py-3 rounded-xl border border-gray-200 transition-colors"
        >
          Later
        </button>
      </div>

      {/* Footer */}
      <p className="text-xs text-gray-400 text-center mt-8">
        Powered by Chubb Insurance
      </p>
    </div>
  );
}
