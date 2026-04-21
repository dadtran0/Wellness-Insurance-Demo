import { useNavigate } from 'react-router';
import { ArrowLeft, TrendingUp, CheckCircle, Camera } from 'lucide-react';

export function RiskAssessmentIntro() {
  const navigate = useNavigate();

  return (
    <div className="min-h-full bg-gradient-to-b from-indigo-50 to-white font-sans">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 p-4 flex items-center gap-3">
        <button
          onClick={() => navigate('/v2/advanced-selection')}
          className="text-gray-600 hover:text-gray-900"
        >
          <ArrowLeft className="w-5 h-5" />
        </button>
        <div>
          <h1 className="font-bold text-gray-900">Health Risk Assessment</h1>
          <p className="text-xs text-gray-600">Prepare for your scan</p>
        </div>
      </div>

      <div className="p-5">
        {/* Icon */}
        <div className="flex justify-center mb-6">
          <div className="w-24 h-24 bg-gradient-to-br from-indigo-500 to-indigo-700 rounded-3xl flex items-center justify-center shadow-xl">
            <TrendingUp className="w-14 h-14 text-white" />
          </div>
        </div>

        {/* Title */}
        <h2 className="text-2xl font-bold text-gray-900 text-center mb-3">
          AI-Powered Risk Analysis
        </h2>
        <p className="text-gray-600 text-center mb-8 leading-relaxed px-4">
          Our comprehensive AI combines facial and body data to predict potential health risks in 20 seconds.
        </p>

        {/* What We Analyze */}
        <div className="bg-white rounded-2xl p-5 border border-gray-200 shadow-sm mb-6">
          <h3 className="font-bold text-gray-900 mb-4">Multi-Factor Analysis:</h3>
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-gray-900 text-sm">Facial Health Markers</h4>
                <p className="text-xs text-gray-600">Skin patterns, eye clarity, facial symmetry</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-gray-900 text-sm">Vital Sign Patterns</h4>
                <p className="text-xs text-gray-600">Heart rate variability and trends</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-gray-900 text-sm">Stress Indicators</h4>
                <p className="text-xs text-gray-600">Physical and physiological stress markers</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-gray-900 text-sm">Risk Score Calculation</h4>
                <p className="text-xs text-gray-600">AI-predicted health risk rating (Low/Medium/High)</p>
              </div>
            </div>
          </div>
        </div>

        {/* Instructions */}
        <div className="bg-indigo-50 rounded-xl p-4 border border-indigo-200 mb-6">
          <h3 className="font-semibold text-indigo-900 mb-2 flex items-center gap-2">
            <Camera className="w-4 h-4" />
            Before You Start:
          </h3>
          <ul className="text-sm text-indigo-800 space-y-1.5">
            <li>• Find a quiet, well-lit space</li>
            <li>• Position face and upper body in frame</li>
            <li>• Relax and breathe naturally</li>
            <li>• Stay still for the full 20 seconds</li>
          </ul>
        </div>

        {/* Demo Selection */}
        <div className="bg-gray-50 rounded-xl p-4 border border-gray-300 mb-6">
          <p className="text-xs text-gray-700 font-semibold mb-3">
            🎬 Demo Selection (for presentation):
          </p>
          <div className="grid grid-cols-2 gap-3">
            <button
              onClick={() => navigate('/v2/risk-assessment-scan?result=normal')}
              className="bg-green-100 hover:bg-green-200 text-green-900 font-semibold py-3 px-4 rounded-lg border-2 border-green-300 transition-all text-sm"
            >
              ✓ Low Risk
            </button>
            <button
              onClick={() => navigate('/v2/risk-assessment-scan?result=abnormal')}
              className="bg-orange-100 hover:bg-orange-200 text-orange-900 font-semibold py-3 px-4 rounded-lg border-2 border-orange-300 transition-all text-sm"
            >
              ⚠ Elevated Risk
            </button>
          </div>
        </div>

        {/* Start Button */}
        <button
          onClick={() => navigate('/v2/risk-assessment-scan?result=normal')}
          className="w-full bg-gradient-to-r from-indigo-600 to-indigo-700 hover:from-indigo-700 hover:to-indigo-800 text-white font-bold py-4 rounded-xl shadow-lg transition-all active:scale-98"
        >
          Continue to Scan
        </button>

        <p className="text-xs text-gray-500 text-center mt-4">
          Your data is encrypted and protected by Chubb
        </p>
      </div>
    </div>
  );
}
