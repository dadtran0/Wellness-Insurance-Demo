import { useNavigate, useSearchParams } from 'react-router';
import { CheckCircle, AlertTriangle, DollarSign, TrendingUp, Phone, FileText, Home, Activity, ArrowLeft } from 'lucide-react';

export function BodyVitalsResult() {
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
          <h1 className="font-bold text-gray-900">Body Vitals Results</h1>
          <p className="text-xs text-gray-600">AI Analysis Complete</p>
        </div>
      </div>

      {isAbnormal ? (
        /* ABNORMAL RESULT */
        <div className="min-h-full">
          <div className="bg-gradient-to-b from-orange-50 to-white p-6 border-b border-orange-100">
            <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <AlertTriangle className="w-12 h-12 text-orange-500" />
            </div>
            <h1 className="text-2xl font-bold text-gray-900 mb-2 text-center">
              Irregular Vitals Detected
            </h1>
            <p className="text-gray-600 text-center mb-4 px-4">
              Some of your vital signs are outside the normal range
            </p>
          </div>

          <div className="p-5">
            {/* CASH BENEFIT */}
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
              <h3 className="font-bold text-blue-900 mb-2">Your Health Matters</h3>
              <p className="text-sm text-blue-800 leading-relaxed">
                These results don't mean you're sick - they're early indicators. Use this benefit to consult a professional or schedule a follow-up check. We're with you every step.
              </p>
            </div>

            {/* Vitals Details */}
            <div className="bg-white rounded-2xl p-5 border border-gray-200 shadow-sm mb-6">
              <h3 className="font-semibold text-gray-900 mb-4">Detected Indicators</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center p-3 bg-orange-50 rounded-lg">
                  <span className="text-sm text-gray-700">Heart Rate</span>
                  <span className="font-bold text-orange-600">95 BPM (Elevated)</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-yellow-50 rounded-lg">
                  <span className="text-sm text-gray-700">Stress Level</span>
                  <span className="font-bold text-yellow-700">Moderate</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg">
                  <span className="text-sm text-gray-700">Breathing Rate</span>
                  <span className="font-bold text-green-600">16 /min (Normal)</span>
                </div>
              </div>
            </div>

            {/* Recommendations */}
            <div className="bg-white rounded-2xl p-5 border border-gray-200 shadow-sm mb-6">
              <h3 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-blue-600" />
                Recommended Actions
              </h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3 p-3 bg-blue-50 rounded-xl border border-blue-100">
                  <FileText className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium text-gray-900 text-sm mb-1">Rest & Re-check</h4>
                    <p className="text-xs text-gray-600">Take a break and scan again in 1-2 hours</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-3 bg-purple-50 rounded-xl border border-purple-100">
                  <Phone className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium text-gray-900 text-sm mb-1">Professional Consultation</h4>
                    <p className="text-xs text-gray-600">Consider speaking with a healthcare provider</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Scan Details */}
            <div className="bg-gray-50 rounded-2xl p-5 border border-gray-200 mb-6">
              <h3 className="font-semibold text-gray-900 mb-4">Scan Details</h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Scan Type</span>
                  <span className="font-semibold text-gray-900">Body Vitals Check</span>
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
                <strong>Important:</strong> This scan is for wellness monitoring only and is not a medical diagnosis.
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
            </div>
          </div>
        </div>
      ) : (
        /* NORMAL RESULT */
        <div className="flex flex-col items-center justify-center p-6 min-h-[calc(100vh-64px)]">
          <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mb-6 shadow-lg">
            <CheckCircle className="w-16 h-16 text-green-500" />
          </div>

          <h1 className="text-2xl font-bold text-gray-900 mb-3 text-center">
            Vitals Look Great!
          </h1>
          <p className="text-gray-600 text-center mb-8 leading-relaxed px-4 max-w-sm">
            All your vital signs are within healthy ranges. You're doing an excellent job taking care of yourself!
          </p>

          {/* Vitals Summary */}
          <div className="bg-white rounded-2xl p-5 border border-gray-200 shadow-sm mb-6 w-full max-w-sm">
            <h3 className="font-semibold text-gray-900 mb-4">Your Vitals</h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg">
                <span className="text-sm text-gray-700">Heart Rate</span>
                <span className="font-bold text-green-600">72 BPM</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg">
                <span className="text-sm text-gray-700">Breathing Rate</span>
                <span className="font-bold text-green-600">14 /min</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg">
                <span className="text-sm text-gray-700">Stress Level</span>
                <span className="font-bold text-green-600">Low</span>
              </div>
            </div>
          </div>

          {/* Marketing Message */}
          <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6 border-2 border-green-200 mb-6 w-full max-w-sm">
            <h3 className="font-bold text-green-900 mb-3 text-center">Keep It Up!</h3>
            <p className="text-sm text-green-800 text-center leading-relaxed mb-4">
              Regular monitoring helps you maintain optimal health. You have <strong>1 scan remaining</strong> this month.
            </p>
          </div>

          {/* Actions */}
          <div className="space-y-3 w-full max-w-sm">
            <button
              onClick={() => navigate('/v2/classic-services')}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 rounded-xl transition-colors"
            >
              Back to Health Services
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
