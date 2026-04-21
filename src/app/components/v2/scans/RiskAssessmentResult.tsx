import { useNavigate, useSearchParams } from 'react-router';
import { CheckCircle, AlertTriangle, DollarSign, TrendingUp, Phone, FileText, Home, ArrowLeft } from 'lucide-react';

export function RiskAssessmentResult() {
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
          <h1 className="font-bold text-gray-900">Risk Assessment Results</h1>
          <p className="text-xs text-gray-600">AI Analysis Complete</p>
        </div>
      </div>

      {isAbnormal ? (
        /* ELEVATED RISK */
        <div className="min-h-full">
          <div className="bg-gradient-to-b from-orange-50 to-white p-6 border-b border-orange-100">
            <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <AlertTriangle className="w-12 h-12 text-orange-500" />
            </div>
            <h1 className="text-2xl font-bold text-gray-900 mb-2 text-center">
              Elevated Risk Detected
            </h1>
            <p className="text-gray-600 text-center mb-4 px-4">
              Our AI has identified some health risk factors that warrant attention
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
              <h3 className="font-bold text-blue-900 mb-2">Prevention is Power</h3>
              <p className="text-sm text-blue-800 leading-relaxed">
                Early detection gives you the opportunity to take action. This benefit empowers you to seek professional guidance and make positive health changes before issues develop.
              </p>
            </div>

            {/* Risk Score Display */}
            <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl p-6 border-2 border-orange-200 mb-6">
              <div className="text-center mb-4">
                <p className="text-sm text-gray-600 mb-2">Health Risk Score</p>
                <div className="text-6xl font-bold text-orange-600 mb-2">6.5/10</div>
                <p className="text-sm font-semibold text-orange-700">Moderate Risk</p>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                <div className="h-full bg-gradient-to-r from-yellow-500 to-orange-500 w-[65%]" />
              </div>
            </div>

            {/* Risk Factors */}
            <div className="bg-white rounded-2xl p-5 border border-gray-200 shadow-sm mb-6">
              <h3 className="font-semibold text-gray-900 mb-4">Identified Risk Factors</h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3 p-3 bg-orange-50 rounded-lg">
                  <AlertTriangle className="w-5 h-5 text-orange-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium text-gray-900 text-sm mb-1">Elevated Heart Rate Patterns</h4>
                    <p className="text-xs text-gray-600">Suggests possible cardiovascular stress</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-3 bg-yellow-50 rounded-lg">
                  <AlertTriangle className="w-5 h-5 text-yellow-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium text-gray-900 text-sm mb-1">Facial Health Indicators</h4>
                    <p className="text-xs text-gray-600">Some markers outside optimal range</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-3 bg-red-50 rounded-lg">
                  <AlertTriangle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium text-gray-900 text-sm mb-1">Stress Level High</h4>
                    <p className="text-xs text-gray-600">Chronic stress can impact overall health</p>
                  </div>
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
                    <h4 className="font-medium text-gray-900 text-sm mb-1">Schedule Health Check-up</h4>
                    <p className="text-xs text-gray-600">Visit a healthcare provider for comprehensive assessment</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-3 bg-purple-50 rounded-xl border border-purple-100">
                  <Phone className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium text-gray-900 text-sm mb-1">Lifestyle Modifications</h4>
                    <p className="text-xs text-gray-600">Consider stress reduction, exercise, and nutrition changes</p>
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
                  <span className="font-semibold text-gray-900">Risk Assessment</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Risk Level</span>
                  <span className="font-semibold text-orange-600">Moderate (6.5/10)</span>
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
                <strong>Important:</strong> This assessment is for wellness monitoring only and is not a medical diagnosis.
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
        /* LOW RISK */
        <div className="flex flex-col items-center justify-center p-6 min-h-[calc(100vh-64px)]">
          <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mb-6 shadow-lg">
            <CheckCircle className="w-16 h-16 text-green-500" />
          </div>

          <h1 className="text-2xl font-bold text-gray-900 mb-3 text-center">
            Low Health Risk!
          </h1>
          <p className="text-gray-600 text-center mb-8 leading-relaxed px-4 max-w-sm">
            Excellent news! Your comprehensive health assessment shows low risk across all measured factors.
          </p>

          {/* Risk Score */}
          <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6 border-2 border-green-200 mb-6 w-full max-w-sm">
            <div className="text-center mb-4">
              <p className="text-sm text-gray-600 mb-2">Health Risk Score</p>
              <div className="text-6xl font-bold text-green-600 mb-2">2.5/10</div>
              <p className="text-sm font-semibold text-green-700">Low Risk</p>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
              <div className="h-full bg-gradient-to-r from-green-400 to-green-600 w-[25%]" />
            </div>
          </div>

          {/* Marketing Message */}
          <div className="bg-white rounded-2xl p-5 border border-gray-200 shadow-sm mb-6 w-full max-w-sm">
            <h3 className="font-bold text-green-900 mb-3 text-center">Outstanding Results!</h3>
            <p className="text-sm text-gray-700 text-center leading-relaxed mb-4">
              Your healthy lifestyle is paying off. Continue regular monitoring to maintain your excellent wellness status.
            </p>
            <div className="bg-green-50 rounded-lg p-3 text-center">
              <p className="text-xs text-green-800">
                <strong>Keep it up!</strong> You have <strong>1 scan remaining</strong> this month.
              </p>
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
          </div>
        </div>
      )}
    </div>
  );
}
