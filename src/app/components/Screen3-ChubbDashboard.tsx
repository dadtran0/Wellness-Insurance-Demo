import { useNavigate } from 'react-router';
import { Shield, Activity, FileText, Lock, Unlock, User } from 'lucide-react';

export function ChubbDashboard() {
  const navigate = useNavigate();

  return (
    <div className="min-h-full bg-white">
      {/* Chubb Header */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-6 pb-8">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
            <Shield className="w-6 h-6" />
            <span className="font-bold text-lg">Chubb Health Companion</span>
          </div>
          <User className="w-6 h-6" />
        </div>
        <p className="text-blue-100 text-sm">We care about your health</p>
      </div>

      {/* Content */}
      <div className="p-6 -mt-4">
        {/* Greeting Card */}
        <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 mb-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">
            👋 Hi! How are you feeling today?
          </h2>

          <div className="grid grid-cols-2 gap-3">
            <button className="bg-green-50 hover:bg-green-100 text-green-700 font-medium py-3 px-4 rounded-xl border border-green-200 transition-colors text-sm">
              Normal
            </button>
            <button className="bg-yellow-50 hover:bg-yellow-100 text-yellow-700 font-medium py-3 px-4 rounded-xl border border-yellow-200 transition-colors text-sm">
              Tired
            </button>
            <button className="bg-orange-50 hover:bg-orange-100 text-orange-700 font-medium py-3 px-4 rounded-xl border border-orange-200 transition-colors text-sm">
              Symptoms
            </button>
            <button className="bg-gray-50 hover:bg-gray-100 text-gray-700 font-medium py-3 px-4 rounded-xl border border-gray-200 transition-colors text-sm">
              Unsure
            </button>
          </div>
        </div>

        {/* Layer 1 - Basic Checks (FREE) */}
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-3">
            <Activity className="w-5 h-5 text-blue-600" />
            <h3 className="font-semibold text-gray-900">Basic Checks</h3>
            <span className="text-xs text-green-600 bg-green-50 px-2 py-1 rounded-full font-medium">FREE</span>
          </div>

          <div className="grid gap-3">
            <button className="bg-white hover:bg-gray-50 p-4 rounded-xl border border-gray-200 transition-colors flex items-center gap-3 text-left">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                <FileText className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h4 className="font-medium text-gray-900">Symptom Checker</h4>
                <p className="text-xs text-gray-500">Quick health assessment</p>
              </div>
            </button>

            <button className="bg-white hover:bg-gray-50 p-4 rounded-xl border border-gray-200 transition-colors flex items-center gap-3 text-left">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                <Activity className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <h4 className="font-medium text-gray-900">Health Tips</h4>
                <p className="text-xs text-gray-500">Daily wellness advice</p>
              </div>
            </button>
          </div>
        </div>

        {/* Layer 2 - Advanced Scans (LOCKED) */}
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-3">
            <Lock className="w-5 h-5 text-purple-600" />
            <h3 className="font-semibold text-gray-900">Advanced Scans</h3>
            <span className="text-xs text-purple-600 bg-purple-50 px-2 py-1 rounded-full font-medium">Chubb Exclusive</span>
          </div>

          <div className="relative">
            {/* Blur overlay effect */}
            <div className="grid gap-3 opacity-60 blur-sm pointer-events-none">
              <div className="bg-gradient-to-br from-purple-50 to-blue-50 p-4 rounded-xl border border-purple-200">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <User className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">Face Scan</h4>
                    <p className="text-xs text-gray-500">AI vitals analysis</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-4 rounded-xl border border-blue-200">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Activity className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">Body Scan</h4>
                    <p className="text-xs text-gray-500">Health risk assessment</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Unlock button overlay */}
            <div className="absolute inset-0 flex items-center justify-center">
              <button
                onClick={() => navigate('/unlock')}
                className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold py-4 px-8 rounded-xl shadow-2xl transition-all transform hover:scale-105 flex items-center gap-2"
              >
                <Unlock className="w-5 h-5" />
                Unlock Now
              </button>
            </div>
          </div>
        </div>

        {/* Usage Stats */}
        <div className="bg-gray-50 rounded-xl p-4 border border-gray-200">
          <div className="flex items-center justify-between text-sm">
            <span className="text-gray-600">Monthly Usage</span>
            <span className="font-semibold text-gray-900">0/2 scans used</span>
          </div>
          <div className="mt-2 h-2 bg-gray-200 rounded-full overflow-hidden">
            <div className="h-full bg-blue-600 w-0 transition-all" />
          </div>
        </div>
      </div>
    </div>
  );
}
