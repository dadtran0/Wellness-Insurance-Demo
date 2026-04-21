import { useState } from 'react';
import { useNavigate } from 'react-router';
import { Zap, Shield, Info, CheckCircle } from 'lucide-react';

export function BillPaymentOptOut() {
  const navigate = useNavigate();
  const [insuranceOptIn, setInsuranceOptIn] = useState(true); // Default checked (opt-out model)

  return (
    <div className="min-h-full bg-white font-sans">
      {/* ZaloPay Header */}
      <div className="bg-[#0068FF] text-white p-4">
        <div className="flex items-center gap-2">
          <Zap className="w-5 h-5 fill-current" />
          <span className="font-bold text-lg">ZaloPay</span>
        </div>
      </div>

      {/* Bill Payment Form */}
      <div className="p-5">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Bill Payment</h2>

        {/* Electricity Bill Details */}
        <div className="bg-gray-50 rounded-xl p-4 mb-4 border border-gray-200">
          <div className="flex justify-between items-center mb-3">
            <span className="text-sm text-gray-600">Electricity Company</span>
            <span className="font-semibold text-gray-900">EVN HCMC</span>
          </div>
          <div className="flex justify-between items-center mb-3">
            <span className="text-sm text-gray-600">Customer ID</span>
            <span className="font-semibold text-gray-900">PD12345678</span>
          </div>
          <div className="flex justify-between items-center mb-3 pb-3 border-b border-gray-200">
            <span className="text-sm text-gray-600">Period</span>
            <span className="font-semibold text-gray-900">March 2026</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="font-semibold text-gray-900">Amount Due</span>
            <span className="text-2xl font-bold text-gray-900">500,000đ</span>
          </div>
        </div>

        {/* Insurance Opt-out Section - EMBEDDED IN PAYMENT FLOW */}
        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-4 mb-5 border-2 border-blue-200">
          <label htmlFor="insurance-opt" className="cursor-pointer flex items-center gap-3">
            <input
              type="checkbox"
              id="insurance-opt"
              checked={insuranceOptIn}
              onChange={(e) => setInsuranceOptIn(e.target.checked)}
              className="w-5 h-5 text-blue-600 rounded border-gray-300 focus:ring-blue-500 flex-shrink-0"
            />
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-1">
                <Shield className="w-5 h-5 text-blue-600 flex-shrink-0" />
                <span className="font-bold text-gray-900">Chubb Digital Wellness Cover</span>
              </div>
              <p className="text-sm text-gray-700">
                AI monitoring + <span className="font-bold text-green-600">100,000đ health</span> + <span className="font-bold text-red-600">50M accident</span> + <span className="font-bold text-purple-600">2 scans/month</span> • <span className="font-bold">30,000đ/month</span>
              </p>
            </div>
          </label>
          <div className="flex items-start gap-1.5 text-xs text-gray-500 mt-2 ml-8">
            <Info className="w-3.5 h-3.5 flex-shrink-0 mt-0.5" />
            <p>Powered by Chubb. Uncheck to remove.</p>
          </div>
        </div>

        {/* Simple reminder - Shown when opted out */}
        {!insuranceOptIn && (
          <div className="bg-blue-50 rounded-lg px-4 py-3 mb-5 border border-blue-200 animate-fadeIn">
            <p className="text-sm text-gray-700">
              💡 <button onClick={() => setInsuranceOptIn(true)} className="text-blue-600 hover:text-blue-700 font-semibold underline">Add protection</button> for 30,000đ/month — 100,000đ health + 50M accident coverage
            </p>
          </div>
        )}

        {/* Total Payment */}
        <div className="bg-gray-900 rounded-xl p-5 mb-5">
          <div className="flex justify-between items-center mb-2">
            <span className="text-gray-400 text-sm">Electricity Bill</span>
            <span className="text-white font-semibold">500,000đ</span>
          </div>
          {insuranceOptIn && (
            <div className="flex justify-between items-center mb-2 pb-3 border-b border-gray-700">
              <span className="text-gray-400 text-sm">Health Protection</span>
              <span className="text-white font-semibold">30,000đ</span>
            </div>
          )}
          {!insuranceOptIn && (
            <div className="pb-3 border-b border-gray-700 mb-3" />
          )}
          <div className="flex justify-between items-center">
            <span className="text-white font-bold text-lg">Total Payment</span>
            <span className="text-white font-bold text-2xl">
              {insuranceOptIn ? '530,000đ' : '500,000đ'}
            </span>
          </div>
        </div>

        {/* Payment Method */}
        <div className="mb-5">
          <label className="text-sm text-gray-600 block mb-2">Payment Method</label>
          <div className="bg-gray-50 rounded-xl p-4 border border-gray-200 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                <Zap className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <p className="font-semibold text-gray-900">ZaloPay Balance</p>
                <p className="text-xs text-gray-500">Available: 2,500,000đ</p>
              </div>
            </div>
          </div>
        </div>

        {/* Confirm Button */}
        <button
          onClick={() => navigate('/v2/payment-success')}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-xl transition-colors shadow-lg"
        >
          Confirm Payment
        </button>

        <p className="text-xs text-gray-500 text-center mt-4">
          By proceeding, you agree to ZaloPay's Terms of Service
        </p>
      </div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
      `}</style>
    </div>
  );
}
