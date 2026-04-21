import { useNavigate } from 'react-router';
import { ArrowLeft, User, CheckCircle, Camera } from 'lucide-react';

export function FaceScanIntro() {
  const navigate = useNavigate();

  return (
    <div className="min-h-full bg-gradient-to-b from-purple-50 to-white font-sans">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 p-4 flex items-center gap-3">
        <button
          onClick={() => navigate('/v2/advanced-selection')}
          className="text-gray-600 hover:text-gray-900"
        >
          <ArrowLeft className="w-5 h-5" />
        </button>
        <div>
          <h1 className="font-bold text-gray-900">AI Face Scan</h1>
          <p className="text-xs text-gray-600">Prepare for your scan</p>
        </div>
      </div>

      <div className="p-5">
        {/* Icon */}
        <div className="flex justify-center mb-6">
          <div className="w-24 h-24 bg-gradient-to-br from-purple-500 to-purple-700 rounded-3xl flex items-center justify-center shadow-xl">
            <User className="w-14 h-14 text-white" />
          </div>
        </div>

        {/* Title */}
        <h2 className="text-2xl font-bold text-gray-900 text-center mb-3">
          AI-Powered Face Analysis
        </h2>
        <p className="text-gray-600 text-center mb-8 leading-relaxed px-4">
          Our advanced AI will analyze your facial features to detect potential health indicators in just 10 seconds.
        </p>

        {/* What We Check */}
        <div className="bg-white rounded-2xl p-5 border border-gray-200 shadow-sm mb-6">
          <h3 className="font-bold text-gray-900 mb-4">What We Analyze:</h3>
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-gray-900 text-sm">Skin Health</h4>
                <p className="text-xs text-gray-600">Color patterns and texture analysis</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-gray-900 text-sm">Eye Indicators</h4>
                <p className="text-xs text-gray-600">Pupil response and eye clarity</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-gray-900 text-sm">Facial Symmetry</h4>
                <p className="text-xs text-gray-600">Balance and structural analysis</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-gray-900 text-sm">Vital Signs</h4>
                <p className="text-xs text-gray-600">Heart rate detection from facial blood flow</p>
              </div>
            </div>
          </div>
        </div>

        {/* Instructions */}
        <div className="bg-blue-50 rounded-xl p-4 border border-blue-200 mb-6">
          <h3 className="font-semibold text-blue-900 mb-2 flex items-center gap-2">
            <Camera className="w-4 h-4" />
            Before You Start:
          </h3>
          <ul className="text-sm text-blue-800 space-y-1.5">
            <li>• Find a well-lit area</li>
            <li>• Remove glasses if wearing any</li>
            <li>• Look directly at the camera</li>
            <li>• Stay still for 10 seconds</li>
          </ul>
        </div>

        {/* Demo Selection - For Presentation */}
        <div className="bg-gray-50 rounded-xl p-4 border border-gray-300 mb-6">
          <p className="text-xs text-gray-700 font-semibold mb-3">
            🎬 Demo Selection (for presentation):
          </p>
          <div className="grid grid-cols-2 gap-3">
            <button
              onClick={() => navigate('/v2/face-scan?result=normal')}
              className="bg-green-100 hover:bg-green-200 text-green-900 font-semibold py-3 px-4 rounded-lg border-2 border-green-300 transition-all text-sm"
            >
              ✓ Normal Result
            </button>
            <button
              onClick={() => navigate('/v2/face-scan?result=abnormal')}
              className="bg-orange-100 hover:bg-orange-200 text-orange-900 font-semibold py-3 px-4 rounded-lg border-2 border-orange-300 transition-all text-sm"
            >
              ⚠ Abnormal Result
            </button>
          </div>
        </div>

        {/* Start Button */}
        <button
          onClick={() => navigate('/v2/face-scan?result=normal')}
          className="w-full bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white font-bold py-4 rounded-xl shadow-lg transition-all active:scale-98"
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
