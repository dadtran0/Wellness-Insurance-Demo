import { useNavigate } from 'react-router';
import { CheckCircle, Zap, FileText, Home } from 'lucide-react';

export function PaymentSuccess() {
  const navigate = useNavigate();

  return (
    <div className="min-h-full bg-gradient-to-b from-green-50 to-white font-sans">
      {/* Success Icon */}
      <div className="flex flex-col items-center justify-center pt-16 pb-8">
        <div className="w-24 h-24 bg-green-500 rounded-full flex items-center justify-center mb-5 shadow-lg">
          <CheckCircle className="w-16 h-16 text-white" />
        </div>
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Payment Successful!</h1>
        <p className="text-gray-600 text-center px-6">
          Your electricity bill has been paid
        </p>
      </div>

      {/* Payment Details */}
      <div className="px-5 pb-6">
        <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 mb-5">
          <h3 className="font-bold text-gray-900 mb-4">Payment Summary</h3>

          <div className="space-y-3 text-sm">
            <div className="flex justify-between">
              <span className="text-gray-600">Electricity Bill</span>
              <span className="font-semibold text-gray-900">500,000đ</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Health Protection</span>
              <span className="font-semibold text-gray-900">30,000đ</span>
            </div>
            <div className="h-px bg-gray-200 my-3"></div>
            <div className="flex justify-between">
              <span className="font-bold text-gray-900">Total Paid</span>
              <span className="font-bold text-gray-900 text-lg">530,000đ</span>
            </div>
          </div>

          <div className="mt-4 pt-4 border-t border-gray-100">
            <div className="flex justify-between text-xs">
              <span className="text-gray-500">Transaction ID</span>
              <span className="font-mono text-gray-700">ZP2026042115482</span>
            </div>
            <div className="flex justify-between text-xs mt-2">
              <span className="text-gray-500">Date & Time</span>
              <span className="text-gray-700">Apr 21, 2026 - 15:48</span>
            </div>
          </div>
        </div>

        {/* Health Protection Confirmation - NO CTA */}
        <div className="bg-blue-50 rounded-2xl p-5 border border-blue-100 mb-5">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
              <CheckCircle className="w-6 h-6 text-white" />
            </div>
            <div>
              <h4 className="font-bold text-gray-900">Health Protection Active</h4>
              <p className="text-xs text-gray-600">Chubb Digital Wellness Cover</p>
            </div>
          </div>
          <p className="text-sm text-gray-700 leading-relaxed">
            You'll receive details and access instructions via Zalo message within 24 hours.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="space-y-3">
          <button
            onClick={() => navigate('/v2/bill-payment')}
            className="w-full bg-white hover:bg-gray-50 text-gray-700 font-semibold py-4 rounded-xl border border-gray-200 transition-colors flex items-center justify-center gap-2"
          >
            <FileText className="w-5 h-5" />
            Download Receipt
          </button>
          <button
            onClick={() => navigate('/v2/bill-payment')}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 rounded-xl transition-colors flex items-center justify-center gap-2"
          >
            <Home className="w-5 h-5" />
            Back to Home
          </button>
        </div>

        <p className="text-xs text-gray-400 text-center mt-6">
          Thank you for using ZaloPay
        </p>
      </div>
    </div>
  );
}
