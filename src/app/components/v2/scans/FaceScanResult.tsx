import { useNavigate, useSearchParams } from 'react-router';
import { CheckCircle, AlertTriangle, DollarSign, TrendingUp, Phone, FileText, Home, User, ArrowLeft } from 'lucide-react';

export function FaceScanResult() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const resultType = searchParams.get('result') || 'normal';
  const isAbnormal = resultType === 'abnormal';

  return (
    <div className="min-h-full bg-white font-sans">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 p-4 flex items-center gap-3">
        <button
          onClick={() => navigate('/v2/advanced-selection')}
          className="text-gray-600 hover:text-gray-900"
        >
          <ArrowLeft className="w-5 h-5" />
        </button>
        <div>
          <h1 className="font-bold text-gray-900">Face Scan Results</h1>
          <p className="text-xs text-gray-600">AI Analysis Complete</p>
        </div>
      </div>

      {isAbnormal ? (
        /* ABNORMAL RESULT - WITH ALLOWANCE */
        <div className="min-h-full">
          <div className="bg-gradient-to-b from-orange-50 to-white p-6 border-b border-orange-100">
            <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <AlertTriangle className="w-12 h-12 text-orange-500" />
            </div>
            <h1 className="text-2xl font-bold text-gray-900 mb-2 text-center">
              Health Indicators Detected
            </h1>
            <p className="text-gray-600 text-center mb-4 px-4">
              Our AI has identified some indicators that may require attention
            </p>
          </div>

          <div className="p-5">
            {/* CASH BENEFIT BANNER */}
            <div className="bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl p-6 shadow-xl mb-6 relative overflow-hidden">
              <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
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

            {/* Marketing Message */}
            <div className="bg-blue-50 rounded-xl p-5 border border-blue-200 mb-6">
              <h3 className="font-bold text-blue-900 mb-2">We're Here to Support You</h3>
              <p className="text-sm text-blue-800 leading-relaxed">
                Your health is our priority. Use the cash benefit to consult with healthcare professionals or for follow-up monitoring. Remember, early detection is key to wellness.
              </p>
            </div>

            {/* Recommendations */}
            <div className="bg-white rounded-2xl p-5 border border-gray-200 shadow-sm mb-6">
              <h3 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-blue-600" />
                Recommended Next Steps
              </h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3 p-3 bg-blue-50 rounded-xl border border-blue-100">
                  <FileText className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium text-gray-900 text-sm mb-1">Schedule Follow-up Scan</h4>
                    <p className="text-xs text-gray-600">Monitor changes in 7-14 days with another free scan</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-3 bg-purple-50 rounded-xl border border-purple-100">
                  <Phone className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium text-gray-900 text-sm mb-1">Consult Healthcare Provider</h4>
                    <p className="text-xs text-gray-600">Consider professional medical advice for peace of mind</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Details */}
            <div className="bg-gray-50 rounded-2xl p-5 border border-gray-200 mb-6">
              <h3 className="font-semibold text-gray-900 mb-4">Scan Details</h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Scan Type</span>
                  <span className="font-semibold text-gray-900">AI Face Scan</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Status</span>
                  <span className="font-semibold text-orange-600">Attention Required</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Date</span>
                  <span className="font-semibold text-gray-900">Apr 21, 2026</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Monthly Usage</span>
                  <span className="font-semibold text-gray-900">1/2 scans remaining</span>
                </div>
              </div>
            </div>

            {/* Disclaimer */}
            <div className="bg-amber-50 rounded-xl p-4 border border-amber-200 mb-6">
              <p className="text-xs text-amber-900 leading-relaxed">
                <strong>Important:</strong> This scan is for wellness monitoring only and is not a medical diagnosis. Please consult a qualified healthcare professional for medical advice.
              </p>
            </div>

            {/* Actions */}
            <div className="space-y-3">
              <button
                onClick={() => navigate('/v2/classic-services')}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 rounded-xl transition-colors flex items-center justify-center gap-2"
              >
                <Home className="w-5 h-5" />
                Back to Health Services
              </button>
              <button
                onClick={() => navigate('/v2/my-account')}
                className="w-full bg-white hover:bg-gray-50 text-gray-700 font-medium py-3 rounded-xl border border-gray-200 transition-colors flex items-center justify-center gap-2"
              >
                <User className="w-5 h-5" />
                View My Account
              </button>
            </div>
          </div>
        </div>
      ) : (
        /* NORMAL RESULT - WITH MARKETING MESSAGE */
        <div className="flex flex-col items-center justify-center p-6 min-h-[calc(100vh-64px)]">
          <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mb-6 shadow-lg">
            <CheckCircle className="w-16 h-16 text-green-500" />
          </div>

          <h1 className="text-2xl font-bold text-gray-900 mb-3 text-center">
            Excellent News!
          </h1>
          <p className="text-gray-600 text-center mb-8 leading-relaxed px-4 max-w-sm">
            Your face scan shows healthy indicators. Keep up the great work with your wellness journey!
          </p>

          {/* Marketing Message */}
          <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6 border-2 border-green-200 mb-6 w-full max-w-sm">
            <h3 className="font-bold text-green-900 mb-3 text-center">Stay Protected</h3>
            <p className="text-sm text-green-800 text-center leading-relaxed mb-4">
              Continue monitoring your health regularly. You have <strong>1 scan remaining</strong> this month to stay on top of your wellness.
            </p>
            <div className="bg-white rounded-xl p-4">
              <p className="text-xs text-gray-700 text-center">
                <strong>Pro Tip:</strong> Regular monitoring helps catch changes early. Schedule your next scan in 2-4 weeks!
              </p>
            </div>
          </div>

          {/* Scan Summary */}
          <div className="bg-white rounded-2xl p-5 border border-gray-200 shadow-sm mb-6 w-full max-w-sm">
            <h3 className="font-semibold text-gray-900 mb-4">Scan Summary</h3>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-600">Scan Type</span>
                <span className="font-semibold text-gray-900">AI Face Scan</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Status</span>
                <span className="font-semibold text-green-600">Healthy</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Risk Level</span>
                <span className="font-semibold text-gray-900">Low</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Date</span>
                <span className="font-semibold text-gray-900">Apr 21, 2026</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Monthly Usage</span>
                <span className="font-semibold text-gray-900">1/2 scans remaining</span>
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="space-y-3 w-full max-w-sm">
            <button
              onClick={() => navigate('/v2/classic-services')}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 rounded-xl transition-colors"
            >
              Back to Health Services
            </button>
            <button
              onClick={() => navigate('/v2/my-account')}
              className="w-full bg-white hover:bg-gray-50 text-gray-700 font-medium py-3 rounded-xl border border-gray-200 transition-colors"
            >
              View My Account
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
