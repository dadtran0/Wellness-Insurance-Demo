import { useState } from 'react';
import { useNavigate } from 'react-router';
import { AlertTriangle, DollarSign, CheckCircle, TrendingUp, Phone, FileText, Home } from 'lucide-react';

export function ResultPayout() {
  const navigate = useNavigate();
  const [resultType] = useState<'normal' | 'abnormal'>('abnormal'); // Toggle for demo

  return (
    <div className="min-h-full bg-white">
      {resultType === 'normal' ? (
        /* NORMAL RESULT */
        <div className="flex flex-col items-center justify-center p-6 min-h-full">
          <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mb-6">
            <CheckCircle className="w-16 h-16 text-green-500" />
          </div>

          <h1 className="text-2xl font-bold text-gray-900 mb-3 text-center">
            Normal Status
          </h1>

          <p className="text-gray-600 text-center mb-8 max-w-xs">
            Your vitals are within safe range. Continue monitoring your health regularly.
          </p>

          <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200 w-full max-w-sm mb-6">
            <h3 className="font-semibold text-gray-900 mb-4">Scan Summary</h3>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-600">Status</span>
                <span className="font-semibold text-green-600">Normal</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Risk Level</span>
                <span className="font-semibold text-gray-900">Low</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Date</span>
                <span className="font-semibold text-gray-900">Apr 21, 2026</span>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 rounded-xl p-4 border border-blue-200 w-full max-w-sm mb-6">
            <p className="text-xs text-blue-700 text-center">
              Usage: <span className="font-semibold">1/2 scans</span> used this month
            </p>
          </div>

          <button
            onClick={() => navigate('/dashboard')}
            className="w-full max-w-sm bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 rounded-xl transition-colors"
          >
            Continue Monitoring
          </button>
        </div>
      ) : (
        /* ABNORMAL RESULT */
        <div className="min-h-full">
          {/* Header */}
          <div className="bg-gradient-to-b from-orange-50 to-white p-6 border-b border-orange-100">
            <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <AlertTriangle className="w-12 h-12 text-orange-500" />
            </div>

            <h1 className="text-2xl font-bold text-gray-900 mb-2 text-center">
              Abnormality Detected
            </h1>

            <p className="text-gray-600 text-center mb-4">
              Our AI has identified indicators that require follow-up monitoring
            </p>
          </div>

          {/* Payout Banner */}
          <div className="p-6">
            <div className="bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl p-6 shadow-xl mb-6 relative overflow-hidden">
              {/* Background pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
              </div>

              <div className="relative z-10">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                    <DollarSign className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-white/90 text-sm font-medium">Cash Benefit Received</span>
                </div>

                <div className="mb-3">
                  <div className="text-5xl font-bold text-white mb-1">100,000đ</div>
                  <p className="text-white/90 text-sm">Transferred to your ZaloPay wallet</p>
                </div>

                <div className="flex items-center gap-2 text-white/80 text-xs">
                  <CheckCircle className="w-4 h-4" />
                  <span>Payment processed instantly</span>
                </div>
              </div>
            </div>

            {/* Recommendations */}
            <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm mb-6">
              <h3 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-blue-600" />
                Recommended Next Steps
              </h3>

              <div className="space-y-3">
                <div className="flex items-start gap-3 p-3 bg-blue-50 rounded-xl border border-blue-100">
                  <FileText className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium text-gray-900 text-sm mb-1">Schedule Follow-up</h4>
                    <p className="text-xs text-gray-600">We recommend monitoring this in 7-14 days</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 bg-purple-50 rounded-xl border border-purple-100">
                  <Phone className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium text-gray-900 text-sm mb-1">Consult Professional</h4>
                    <p className="text-xs text-gray-600">Consider speaking with a healthcare provider</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Scan Details */}
            <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200 mb-6">
              <h3 className="font-semibold text-gray-900 mb-4">Scan Details</h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Status</span>
                  <span className="font-semibold text-orange-600">Attention Required</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Risk Level</span>
                  <span className="font-semibold text-gray-900">Moderate</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Date</span>
                  <span className="font-semibold text-gray-900">Apr 21, 2026</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Monthly Usage</span>
                  <span className="font-semibold text-gray-900">1/2 scans</span>
                </div>
              </div>
            </div>

            {/* Disclaimer */}
            <div className="bg-amber-50 rounded-xl p-4 border border-amber-200 mb-6">
              <p className="text-xs text-amber-800">
                <strong>Important:</strong> This scan is for wellness monitoring only and is not a medical diagnosis. Please consult a qualified healthcare professional for medical advice.
              </p>
            </div>

            {/* CTAs */}
            <div className="space-y-3">
              <button
                onClick={() => navigate('/dashboard')}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 rounded-xl transition-colors flex items-center justify-center gap-2"
              >
                <Home className="w-5 h-5" />
                Back to Dashboard
              </button>

              <button className="w-full bg-white hover:bg-gray-50 text-gray-700 font-medium py-3 rounded-xl border border-gray-200 transition-colors">
                View Full Report
              </button>
            </div>

            {/* Footer */}
            <p className="text-xs text-gray-400 text-center mt-6">
              Protected by Chubb • Data secured by Elfie AI
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
