import { useNavigate } from 'react-router';
import { Shield, Zap, CheckCircle } from 'lucide-react';

export function ZaloPayEntry() {
  const navigate = useNavigate();

  return (
    <div className="min-h-full bg-white">
      {/* ZaloPay Header */}
      <div className="bg-[#0068FF] text-white p-4">
        <div className="flex items-center gap-2 mb-1">
          <Zap className="w-5 h-5 fill-current" />
          <span className="font-bold text-lg">ZaloPay</span>
        </div>
        <p className="text-sm opacity-90">Bill Payment</p>
      </div>

      {/* Bill Payment Success */}
      <div className="p-6">
        <div className="flex items-center justify-center mb-4">
          <CheckCircle className="w-16 h-16 text-green-500" />
        </div>
        <h2 className="text-xl font-bold text-center mb-2">Payment Successful</h2>
        <p className="text-center text-gray-600 mb-6">Electricity Bill - 500,000đ</p>

        {/* Chubb Insurance Offer Card */}
        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6 border-2 border-blue-200 shadow-lg">
          {/* Badge */}
          <div className="flex items-center gap-2 mb-4">
            <Shield className="w-5 h-5 text-blue-600" />
            <span className="text-xs font-semibold text-blue-700 bg-blue-100 px-3 py-1 rounded-full">
              Underwritten by Chubb
            </span>
          </div>

          {/* Title */}
          <h3 className="text-xl font-bold text-gray-900 mb-2">
            Protect Your Health Every Time You Pay
          </h3>

          {/* Description */}
          <p className="text-sm text-gray-700 mb-4 leading-relaxed">
            Quick health checks + Get <span className="font-bold text-green-600">100,000đ</span> cash support if abnormality is detected
          </p>

          {/* Benefits */}
          <div className="space-y-2 mb-5">
            <div className="flex items-start gap-2 text-sm text-gray-700">
              <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
              <span>AI-powered health scans (face & body)</span>
            </div>
            <div className="flex items-start gap-2 text-sm text-gray-700">
              <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
              <span>Instant cash benefit for abnormal results</span>
            </div>
            <div className="flex items-start gap-2 text-sm text-gray-700">
              <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
              <span>Up to 2 scans per month included</span>
            </div>
          </div>

          {/* Pricing */}
          <div className="bg-white rounded-xl p-4 mb-4">
            <div className="flex items-baseline justify-center gap-2">
              <span className="text-3xl font-bold text-gray-900">10,000đ</span>
              <span className="text-gray-600">/month</span>
            </div>
            <p className="text-xs text-gray-500 text-center mt-1">Billed monthly via ZaloPay</p>
          </div>

          {/* CTAs */}
          <div className="space-y-3">
            <button
              onClick={() => navigate('/subscription-success')}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 rounded-xl transition-colors"
            >
              Join Now
            </button>
            <button
              onClick={() => navigate('/subscription-success')}
              className="w-full bg-white hover:bg-gray-50 text-blue-600 font-semibold py-3 rounded-xl border-2 border-blue-200 transition-colors"
            >
              Learn More
            </button>
          </div>
        </div>

        {/* Footer */}
        <p className="text-xs text-gray-500 text-center mt-6">
          Digital Wellness Cover • Privacy Protected
        </p>
      </div>
    </div>
  );
}
