import { ArrowRight, Zap, Shield, Cpu, DollarSign, ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router';

export function FlowDiagram() {
  const navigate = useNavigate();

  return (
    <div className="min-h-full bg-white font-sans overflow-y-auto">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-6 sticky top-0 z-10 shadow-lg">
        <button
          onClick={() => navigate('/v2/bill-payment')}
          className="text-white/80 hover:text-white mb-4 flex items-center gap-2"
        >
          <ArrowLeft className="w-4 h-4" />
          <span className="text-sm">Back to Demo</span>
        </button>
        <h1 className="text-2xl font-bold mb-2">
          System Integration Architecture
        </h1>
        <p className="text-blue-100 text-sm">
          ZaloPay × Chubb × Elfie Platform Flow
        </p>
      </div>

      <div className="max-w-3xl mx-auto p-6">
        {/* Executive Summary */}
        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6 border-2 border-blue-200 mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-3">Executive Summary</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            This document outlines the technical integration between ZaloPay (distribution), Chubb (insurance), and Elfie (AI technology) for the Digital Wellness Cover product.
          </p>
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-white rounded-xl p-3 border border-blue-100 shadow-sm">
              <div className="text-xs text-gray-500 uppercase tracking-wide mb-1 font-semibold">Monthly Premium</div>
              <div className="text-sm font-bold text-blue-600">30,000đ</div>
            </div>
            <div className="bg-white rounded-xl p-3 border border-green-100 shadow-sm">
              <div className="text-xs text-gray-500 uppercase tracking-wide mb-1 font-semibold">Cash Benefit</div>
              <div className="text-sm font-bold text-green-600">100,000đ</div>
            </div>
            <div className="bg-white rounded-xl p-3 border border-purple-100 shadow-sm">
              <div className="text-xs text-gray-500 uppercase tracking-wide mb-1 font-semibold">Scan Limit</div>
              <div className="text-sm font-bold text-purple-600">2/month</div>
            </div>
          </div>
        </div>

        {/* Flow Diagram */}
        <h2 className="text-xl font-bold text-gray-900 mb-4">Integration Flow</h2>
        <div className="space-y-6 mb-8">
          {/* Step 1: ZaloPay Entry */}
          <div className="bg-white rounded-2xl p-6 border-2 border-blue-200 shadow-lg">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                <Zap className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h3 className="font-bold text-gray-900">1. ZaloPay Entry</h3>
                <p className="text-xs text-gray-600">Distribution & Payment</p>
              </div>
            </div>
            <div className="ml-15 space-y-2 text-sm">
              <div className="bg-blue-50 rounded-lg p-3 border border-blue-100">
                <p className="font-mono text-xs text-blue-900 mb-1">POST /chubb/subscribe</p>
                <p className="text-xs text-gray-600">User subscribes via bill payment → Creates Chubb policy</p>
              </div>
              <p className="text-xs text-gray-700">
                <strong>Premium:</strong> 30,000đ/month • <strong>Benefits:</strong> 100,000đ health + 50M accident coverage
              </p>
            </div>
          </div>

          <div className="flex justify-center">
            <ArrowRight className="w-6 h-6 text-gray-400" />
          </div>

          {/* Step 2: Chubb Policy */}
          <div className="bg-white rounded-2xl p-6 border-2 border-indigo-200 shadow-lg">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center flex-shrink-0">
                <Shield className="w-6 h-6 text-indigo-600" />
              </div>
              <div>
                <h3 className="font-bold text-gray-900">2. Chubb Dashboard</h3>
                <p className="text-xs text-gray-600">Insurance Orchestration</p>
              </div>
            </div>
            <div className="ml-15 space-y-2 text-sm">
              <div className="bg-indigo-50 rounded-lg p-3 border border-indigo-100">
                <p className="font-mono text-xs text-indigo-900 mb-1">GET /dashboard</p>
                <p className="text-xs text-gray-600">User accesses white-label Chubb app via deep link</p>
              </div>
              <p className="text-xs text-gray-700">
                <strong>Layer 1:</strong> Free features (Symptom checker, Health tips)<br />
                <strong>Layer 2:</strong> Premium AI scans (locked until user unlocks)
              </p>
            </div>
          </div>

          <div className="flex justify-center">
            <ArrowRight className="w-6 h-6 text-gray-400" />
          </div>

          {/* Step 3: Elfie Scan */}
          <div className="bg-white rounded-2xl p-6 border-2 border-purple-200 shadow-lg">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                <Cpu className="w-6 h-6 text-purple-600" />
              </div>
              <div>
                <h3 className="font-bold text-gray-900">3. Elfie AI Scan</h3>
                <p className="text-xs text-gray-600">Technology Layer (Hidden)</p>
              </div>
            </div>
            <div className="ml-15 space-y-2 text-sm">
              <div className="bg-purple-50 rounded-lg p-3 border border-purple-100 mb-2">
                <p className="font-mono text-xs text-purple-900 mb-1">POST /elfie/unlock-session</p>
                <p className="text-xs text-gray-600">Chubb requests scan session from Elfie</p>
              </div>
              <div className="bg-purple-50 rounded-lg p-3 border border-purple-100 mb-2">
                <p className="font-mono text-xs text-purple-900 mb-1">Callback: POST /chubb/scan-result</p>
                <p className="text-xs text-gray-600">Elfie returns: NORMAL | ATTENTION + risk_score</p>
              </div>
              <div className="bg-amber-50 rounded-lg p-3 border border-amber-200">
                <p className="text-xs text-gray-800 leading-relaxed">
                  <strong>Parametric Standard:</strong> AI compares biometric data against baseline health parameters. Deviations of <strong className="text-red-600">±10%</strong> or more trigger ATTENTION status for payout eligibility.
                </p>
              </div>
              <p className="text-xs text-gray-700 mt-2">
                User sees: Chubb branding • Elfie runs: embedded SDK (invisible to user)
              </p>
            </div>
          </div>

          <div className="flex justify-center">
            <ArrowRight className="w-6 h-6 text-gray-400" />
          </div>

          {/* Step 4: Claim & Payout */}
          <div className="bg-white rounded-2xl p-6 border-2 border-green-200 shadow-lg">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                <DollarSign className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <h3 className="font-bold text-gray-900">4. Payout (If Abnormal)</h3>
                <p className="text-xs text-gray-600">Parametric Claim Trigger</p>
              </div>
            </div>
            <div className="ml-15 space-y-2 text-sm">
              <div className="bg-green-50 rounded-lg p-3 border border-green-100 mb-2">
                <p className="font-mono text-xs text-green-900 mb-1">POST /zalopay/wallet-credit</p>
                <p className="text-xs text-gray-600">Chubb triggers instant 100,000đ transfer to user's wallet</p>
              </div>
              <div className="bg-blue-50 rounded-lg p-3 border border-blue-200 mb-2">
                <p className="text-xs text-gray-800 leading-relaxed">
                  <strong>Parametric Insurance Model:</strong> No medical review required. Payout is automatically triggered when scan results show <strong className="text-blue-700">±10% deviation</strong> from standard health parameters.
                </p>
              </div>
              <p className="text-xs text-gray-700">
                <strong>Trigger Condition:</strong> Result = ATTENTION (±10% deviation detected)<br />
                <strong>Payment Method:</strong> Instant to ZaloPay wallet (no claims process)<br />
                <strong>Monthly Limit:</strong> 2 scans per month (cost control)<br />
                <strong>Benefit Amount:</strong> 100,000đ per abnormal detection
              </p>
            </div>
          </div>
        </div>

        {/* Key Technical Points */}
        <div className="bg-gray-900 text-white rounded-2xl p-6 mb-8">
          <h3 className="font-bold text-lg mb-4">Technical Integration Points</h3>
          <div className="space-y-3 text-sm">
            <div>
              <p className="text-blue-300 font-semibold mb-1">Platform Roles:</p>
              <ul className="list-disc list-inside space-y-1 text-gray-300 ml-2">
                <li><strong>ZaloPay:</strong> Distribution channel + payment processor</li>
                <li><strong>Chubb:</strong> Insurance provider + orchestration layer</li>
                <li><strong>Elfie:</strong> AI/ML scanning engine (white-labeled)</li>
              </ul>
            </div>
            <div>
              <p className="text-green-300 font-semibold mb-1">User Experience:</p>
              <ul className="list-disc list-inside space-y-1 text-gray-300 ml-2">
                <li>User sees: ZaloPay → Chubb (seamless transition)</li>
                <li>User doesn't know: Elfie exists (embedded technology)</li>
                <li>User receives: Instant payout in familiar ZaloPay wallet</li>
              </ul>
            </div>
            <div>
              <p className="text-purple-300 font-semibold mb-1">Cost Control Mechanisms:</p>
              <ul className="list-disc list-inside space-y-1 text-gray-300 ml-2">
                <li>Layer 2 lock → Controls activation rate (f)</li>
                <li>Monthly cap (2 scans) → Limits exposure</li>
                <li>Visible usage counter → Prevents abuse</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Legal & Compliance */}
        <div className="bg-amber-50 rounded-2xl p-6 border-2 border-amber-200">
          <h3 className="font-bold text-amber-900 mb-3">Legal & Compliance</h3>
          <div className="space-y-2 text-sm text-amber-800">
            <div className="flex items-start gap-2">
              <span className="font-bold">✓</span>
              <p><strong>Not medical diagnosis</strong> - Wellness monitoring only</p>
            </div>
            <div className="flex items-start gap-2">
              <span className="font-bold">✓</span>
              <p><strong>Consent screens</strong> - User acknowledges data usage</p>
            </div>
            <div className="flex items-start gap-2">
              <span className="font-bold">✓</span>
              <p><strong>Tone of voice</strong> - "Indicators", "monitoring", not "disease"</p>
            </div>
            <div className="flex items-start gap-2">
              <span className="font-bold">✓</span>
              <p><strong>Data protection</strong> - Encrypted by Chubb, processed by Elfie</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
