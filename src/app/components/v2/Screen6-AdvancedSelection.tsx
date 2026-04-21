import { useNavigate } from 'react-router';
import { ArrowLeft, User, Activity, TrendingUp, Sparkles } from 'lucide-react';

export function AdvancedSelection() {
  const navigate = useNavigate();

  return (
    <div className="min-h-full bg-gradient-to-b from-purple-50 to-white font-sans">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 p-4 flex items-center gap-3">
        <button
          onClick={() => navigate('/v2/classic-services')}
          className="text-gray-600 hover:text-gray-900"
        >
          <ArrowLeft className="w-5 h-5" />
        </button>
        <div className="flex-1">
          <h1 className="font-bold text-gray-900">Advanced AI Scans</h1>
          <p className="text-xs text-gray-600">Choose your health assessment</p>
        </div>
      </div>

      <div className="p-5">
        {/* Introduction */}
        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-5 border border-blue-200 mb-6">
          <div className="flex items-center gap-3 mb-3">
            <Sparkles className="w-6 h-6 text-blue-600" />
            <h2 className="font-bold text-gray-900">Premium Health Scans</h2>
          </div>
          <p className="text-sm text-gray-700 leading-relaxed mb-3">
            Our AI-powered scans provide detailed health insights. Select the scan type that best matches your needs.
          </p>
          <div className="bg-white rounded-lg p-3">
            <p className="text-xs text-gray-600 mb-1">
              <strong className="text-green-600">Cash Benefit:</strong> If any scan detects abnormalities, you'll receive <strong>100,000đ</strong> instantly.
            </p>
            <p className="text-xs text-gray-500">
              Monthly limit: 2 scans • Remaining: 2 scans
            </p>
          </div>
        </div>

        {/* Scan Options */}
        <div className="space-y-4 mb-6">
          <h3 className="font-bold text-gray-900 text-sm">Select Scan Type:</h3>

          {/* Face Scan */}
          <button
            onClick={() => navigate('/v2/face-scan-intro')}
            className="w-full bg-gradient-to-br from-purple-50 to-purple-100 hover:from-purple-100 hover:to-purple-200 p-5 rounded-2xl border-2 border-purple-300 transition-all shadow-sm hover:shadow-lg active:scale-98 text-left"
          >
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 bg-purple-600 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-md">
                <User className="w-8 h-8 text-white" />
              </div>
              <div className="flex-1">
                <h4 className="font-bold text-gray-900 text-lg mb-2">AI Face Scan</h4>
                <p className="text-sm text-gray-700 mb-3 leading-relaxed">
                  Advanced facial analysis to detect health indicators from skin tone, eye patterns, and facial features.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="text-xs bg-purple-200 text-purple-900 px-3 py-1 rounded-full font-medium">
                    10 seconds
                  </span>
                  <span className="text-xs bg-purple-200 text-purple-900 px-3 py-1 rounded-full font-medium">
                    Non-invasive
                  </span>
                  <span className="text-xs bg-purple-200 text-purple-900 px-3 py-1 rounded-full font-medium">
                    Instant results
                  </span>
                </div>
              </div>
            </div>
          </button>

          {/* Body Vitals */}
          <button
            onClick={() => navigate('/v2/body-vitals-intro')}
            className="w-full bg-gradient-to-br from-blue-50 to-blue-100 hover:from-blue-100 hover:to-blue-200 p-5 rounded-2xl border-2 border-blue-300 transition-all shadow-sm hover:shadow-lg active:scale-98 text-left"
          >
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 bg-blue-600 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-md">
                <Activity className="w-8 h-8 text-white" />
              </div>
              <div className="flex-1">
                <h4 className="font-bold text-gray-900 text-lg mb-2">Body Vitals Check</h4>
                <p className="text-sm text-gray-700 mb-3 leading-relaxed">
                  Comprehensive body assessment measuring heart rate, respiratory patterns, and stress levels.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="text-xs bg-blue-200 text-blue-900 px-3 py-1 rounded-full font-medium">
                    15 seconds
                  </span>
                  <span className="text-xs bg-blue-200 text-blue-900 px-3 py-1 rounded-full font-medium">
                    Camera-based
                  </span>
                  <span className="text-xs bg-blue-200 text-blue-900 px-3 py-1 rounded-full font-medium">
                    Detailed metrics
                  </span>
                </div>
              </div>
            </div>
          </button>

          {/* Risk Assessment */}
          <button
            onClick={() => navigate('/v2/risk-assessment-intro')}
            className="w-full bg-gradient-to-br from-indigo-50 to-indigo-100 hover:from-indigo-100 hover:to-indigo-200 p-5 rounded-2xl border-2 border-indigo-300 transition-all shadow-sm hover:shadow-lg active:scale-98 text-left"
          >
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 bg-indigo-600 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-md">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <div className="flex-1">
                <h4 className="font-bold text-gray-900 text-lg mb-2">Health Risk Assessment</h4>
                <p className="text-sm text-gray-700 mb-3 leading-relaxed">
                  AI-powered predictive analysis combining facial and body data to assess health risk factors.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="text-xs bg-indigo-200 text-indigo-900 px-3 py-1 rounded-full font-medium">
                    20 seconds
                  </span>
                  <span className="text-xs bg-indigo-200 text-indigo-900 px-3 py-1 rounded-full font-medium">
                    Multi-factor
                  </span>
                  <span className="text-xs bg-indigo-200 text-indigo-900 px-3 py-1 rounded-full font-medium">
                    Risk score
                  </span>
                </div>
              </div>
            </div>
          </button>
        </div>

        {/* Disclaimer */}
        <div className="bg-amber-50 rounded-xl p-4 border border-amber-200">
          <p className="text-xs text-amber-900 leading-relaxed">
            <strong>Important:</strong> These scans are for wellness monitoring only and do not constitute medical diagnosis. Please consult a healthcare professional for medical advice.
          </p>
        </div>
      </div>
    </div>
  );
}
