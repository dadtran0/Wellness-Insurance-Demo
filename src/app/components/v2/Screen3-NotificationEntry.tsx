import { useNavigate } from 'react-router';
import { Shield, Bell, ArrowRight, Clock } from 'lucide-react';

export function NotificationEntry() {
  const navigate = useNavigate();

  return (
    <div className="min-h-full bg-gray-50 font-sans">
      {/* Simulated Notification Center */}
      <div className="bg-white border-b border-gray-200 p-4">
        <div className="flex items-center gap-2">
          <Bell className="w-5 h-5 text-gray-700" />
          <h1 className="font-bold text-lg text-gray-900">Notifications</h1>
        </div>
      </div>

      <div className="p-4 space-y-3">
        {/* Chubb Health Notification - MAIN ENTRY POINT */}
        <div
          onClick={() => navigate('/v2/welcome')}
          className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-5 border-2 border-blue-200 shadow-md cursor-pointer hover:shadow-lg transition-all active:scale-98"
        >
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-sm">
              <Shield className="w-7 h-7 text-white" />
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-2">
                <h3 className="font-bold text-gray-900">Chubb Health Companion</h3>
                <span className="text-xs bg-blue-600 text-white px-2 py-0.5 rounded-full">New</span>
              </div>
              <p className="text-sm text-gray-700 mb-3 leading-relaxed">
                Welcome! Your Digital Wellness Cover is now active. Start monitoring your health today.
              </p>
              <div className="flex items-center gap-2 text-blue-600 font-semibold text-sm">
                <span>Get Started</span>
                <ArrowRight className="w-4 h-4" />
              </div>
            </div>
          </div>
          <div className="flex items-center gap-1 text-xs text-gray-500 mt-3">
            <Clock className="w-3 h-3" />
            <span>2 hours ago</span>
          </div>
        </div>

        {/* Other notifications (for context) */}
        <div className="bg-white rounded-xl p-4 border border-gray-200">
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
              <span className="text-lg">⚡</span>
            </div>
            <div className="flex-1">
              <h4 className="font-semibold text-gray-900 text-sm mb-1">
                Bill Payment Confirmed
              </h4>
              <p className="text-xs text-gray-600">
                EVN HCMC - 500,000đ paid successfully
              </p>
              <p className="text-xs text-gray-400 mt-2">Apr 21, 15:48</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl p-4 border border-gray-200">
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
              <span className="text-lg">🎁</span>
            </div>
            <div className="flex-1">
              <h4 className="font-semibold text-gray-900 text-sm mb-1">
                ZaloPay Cashback
              </h4>
              <p className="text-xs text-gray-600">
                You earned 5,000đ cashback this month
              </p>
              <p className="text-xs text-gray-400 mt-2">Apr 20, 09:15</p>
            </div>
          </div>
        </div>
      </div>

      {/* Helper text */}
      <div className="p-6">
        <div className="bg-blue-50 rounded-xl p-4 border border-blue-100">
          <p className="text-xs text-blue-800 text-center leading-relaxed">
            <strong>Demo Note:</strong> This represents the offline notification the customer receives via Zalo message, email, or push notification - separate from the bill payment flow.
          </p>
        </div>
      </div>
    </div>
  );
}
