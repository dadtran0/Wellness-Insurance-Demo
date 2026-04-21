import { useNavigate } from 'react-router';
import { ArrowLeft, Shield, User, FileText, Calendar, Activity, Edit, XCircle } from 'lucide-react';

export function MyAccount() {
  const navigate = useNavigate();

  return (
    <div className="min-h-full bg-gray-50 font-sans">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 p-4 flex items-center gap-3">
        <button
          onClick={() => navigate('/v2/classic-services')}
          className="text-gray-600 hover:text-gray-900"
        >
          <ArrowLeft className="w-5 h-5" />
        </button>
        <div className="flex-1">
          <h1 className="font-bold text-gray-900">My Account</h1>
          <p className="text-xs text-gray-600">Manage your coverage</p>
        </div>
      </div>

      <div className="p-5">
        {/* User Info */}
        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-5 border border-blue-200 mb-5">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center">
              <User className="w-8 h-8 text-white" />
            </div>
            <div>
              <h2 className="font-bold text-gray-900 text-lg">Nguyen Van A</h2>
              <p className="text-sm text-gray-600">Member since Apr 2026</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Shield className="w-5 h-5 text-blue-600" />
            <span className="text-sm font-semibold text-blue-900">Chubb Digital Wellness Cover</span>
          </div>
        </div>

        {/* Contract Status */}
        <div className="bg-white rounded-2xl p-5 border border-gray-200 shadow-sm mb-5">
          <div className="flex items-center gap-2 mb-4">
            <FileText className="w-5 h-5 text-gray-700" />
            <h3 className="font-bold text-gray-900">Contract Status</h3>
          </div>

          <div className="space-y-3 text-sm">
            <div className="flex justify-between">
              <span className="text-gray-600">Policy Number</span>
              <span className="font-semibold text-gray-900">CHB2026042100123</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Status</span>
              <span className="inline-flex items-center gap-1 font-semibold text-green-600">
                <div className="w-2 h-2 bg-green-500 rounded-full" />
                Active
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Start Date</span>
              <span className="font-semibold text-gray-900">Apr 21, 2026</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Next Renewal</span>
              <span className="font-semibold text-gray-900">May 21, 2026</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Monthly Premium</span>
              <span className="font-semibold text-gray-900">30,000đ</span>
            </div>
          </div>
        </div>

        {/* Scan Usage */}
        <div className="bg-white rounded-2xl p-5 border border-gray-200 shadow-sm mb-5">
          <div className="flex items-center gap-2 mb-4">
            <Activity className="w-5 h-5 text-gray-700" />
            <h3 className="font-bold text-gray-900">Scan Usage</h3>
          </div>

          {/* Current Month */}
          <div className="mb-4">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-gray-600">This Month (Apr 2026)</span>
              <span className="text-sm font-bold text-gray-900">1 / 2 scans used</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5 overflow-hidden">
              <div className="bg-blue-600 h-full w-1/2 transition-all" />
            </div>
            <p className="text-xs text-gray-500 mt-2">1 scan remaining</p>
          </div>

          {/* Insurance Period Summary */}
          <div className="bg-blue-50 rounded-xl p-4 border border-blue-100">
            <div className="flex items-center gap-2 mb-3">
              <Calendar className="w-4 h-4 text-blue-600" />
              <span className="text-sm font-semibold text-blue-900">Insurance Period Total</span>
            </div>
            <div className="grid grid-cols-2 gap-3 text-sm">
              <div>
                <p className="text-gray-600 text-xs mb-1">Total Scans</p>
                <p className="font-bold text-gray-900">1</p>
              </div>
              <div>
                <p className="text-gray-600 text-xs mb-1">Benefits Paid</p>
                <p className="font-bold text-green-600">100,000đ</p>
              </div>
            </div>
          </div>
        </div>

        {/* Scan History */}
        <div className="bg-white rounded-2xl p-5 border border-gray-200 shadow-sm mb-5">
          <h3 className="font-bold text-gray-900 mb-4">Recent Scans</h3>
          <div className="space-y-3">
            <div className="flex items-start gap-3 p-3 bg-orange-50 rounded-xl border border-orange-100">
              <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center flex-shrink-0">
                <User className="w-5 h-5 text-white" />
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between mb-1">
                  <h4 className="font-semibold text-gray-900 text-sm">AI Face Scan</h4>
                  <span className="text-xs bg-orange-200 text-orange-900 px-2 py-1 rounded-full font-medium">
                    Abnormal
                  </span>
                </div>
                <p className="text-xs text-gray-600 mb-2">Apr 21, 2026 • 15:52</p>
                <div className="flex items-center gap-1 text-xs text-green-700">
                  <span className="font-semibold">Benefit paid: 100,000đ</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="space-y-3 mb-6">
          <button
            onClick={() => navigate('/v2/endorse-request')}
            className="w-full bg-white hover:bg-gray-50 text-gray-700 font-semibold py-4 rounded-xl border border-gray-200 transition-colors flex items-center justify-center gap-2"
          >
            <Edit className="w-5 h-5" />
            Request Policy Changes (Endorsement)
          </button>
          <button
            onClick={() => navigate('/v2/cancel-request')}
            className="w-full bg-white hover:bg-red-50 text-red-600 font-semibold py-4 rounded-xl border border-red-200 transition-colors flex items-center justify-center gap-2"
          >
            <XCircle className="w-5 h-5" />
            Cancel Policy
          </button>
        </div>
      </div>
    </div>
  );
}
