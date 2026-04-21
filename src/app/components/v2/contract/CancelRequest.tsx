import { useState } from 'react';
import { useNavigate } from 'react-router';
import { ArrowLeft, XCircle, CheckCircle, AlertTriangle, DollarSign } from 'lucide-react';

export function CancelRequest() {
  const navigate = useNavigate();
  const [step, setStep] = useState(1); // 1: Reason, 2: Confirm, 3: Review, 4: Confirmation
  const [selectedReason, setSelectedReason] = useState<string>('');
  const [additionalComments, setAdditionalComments] = useState('');

  const reasons = [
    { id: 'cost', name: 'Too expensive', description: 'Premium is higher than expected' },
    { id: 'not-using', name: 'Not using the service', description: 'Haven\'t been using the health features' },
    { id: 'found-alternative', name: 'Found alternative coverage', description: 'Switched to another insurance provider' },
    { id: 'technical-issues', name: 'Technical issues', description: 'Having problems with the app or service' },
    { id: 'other', name: 'Other reason', description: 'Different reason not listed above' },
  ];

  const handleSubmit = () => {
    setStep(4);
  };

  return (
    <div className="min-h-full bg-gray-50 font-sans">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 p-4 flex items-center gap-3">
        <button
          onClick={() => {
            if (step > 1) {
              setStep(step - 1);
            } else {
              navigate('/v2/my-account');
            }
          }}
          className="text-gray-600 hover:text-gray-900"
        >
          <ArrowLeft className="w-5 h-5" />
        </button>
        <div className="flex-1">
          <h1 className="font-bold text-gray-900">Cancel Policy</h1>
          <p className="text-xs text-gray-600">Step {step} of 4</p>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="bg-white p-4 border-b border-gray-200">
        <div className="flex items-center justify-between mb-2">
          {[1, 2, 3, 4].map((num) => (
            <div key={num} className="flex items-center flex-1">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center font-semibold text-sm ${
                num <= step ? 'bg-red-600 text-white' : 'bg-gray-200 text-gray-400'
              }`}>
                {num < step ? <CheckCircle className="w-5 h-5" /> : num}
              </div>
              {num < 4 && (
                <div className={`flex-1 h-1 mx-2 ${num < step ? 'bg-red-600' : 'bg-gray-200'}`} />
              )}
            </div>
          ))}
        </div>
        <div className="flex justify-between text-xs text-gray-600">
          <span>Reason</span>
          <span>Confirm</span>
          <span>Review</span>
          <span>Done</span>
        </div>
      </div>

      <div className="p-5">
        {step === 1 && (
          /* STEP 1: Select Reason */
          <>
            <h2 className="text-xl font-bold text-gray-900 mb-2">We're sorry to see you go</h2>
            <p className="text-sm text-gray-600 mb-6">Please help us understand why you're canceling</p>

            <div className="space-y-3 mb-6">
              {reasons.map((reason) => (
                <button
                  key={reason.id}
                  onClick={() => setSelectedReason(reason.id)}
                  className={`w-full p-4 rounded-xl border-2 transition-all text-left ${
                    selectedReason === reason.id
                      ? 'bg-red-50 border-red-300 shadow-md'
                      : 'bg-white border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center mt-0.5 ${
                      selectedReason === reason.id
                        ? 'border-red-600 bg-red-600'
                        : 'border-gray-300'
                    }`}>
                      {selectedReason === reason.id && (
                        <CheckCircle className="w-3 h-3 text-white" />
                      )}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900 mb-0.5">{reason.name}</h3>
                      <p className="text-xs text-gray-600">{reason.description}</p>
                    </div>
                  </div>
                </button>
              ))}
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Additional Comments (Optional)
              </label>
              <textarea
                value={additionalComments}
                onChange={(e) => setAdditionalComments(e.target.value)}
                placeholder="Tell us more about your reason..."
                rows={4}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-red-500 focus:outline-none resize-none"
              />
            </div>

            <button
              onClick={() => setStep(2)}
              disabled={!selectedReason}
              className="w-full mt-6 bg-red-600 hover:bg-red-700 disabled:bg-gray-300 disabled:cursor-not-allowed text-white font-bold py-4 rounded-xl transition-colors"
            >
              Continue
            </button>
          </>
        )}

        {step === 2 && (
          /* STEP 2: Understand Consequences */
          <>
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center">
                <AlertTriangle className="w-12 h-12 text-red-600" />
              </div>
            </div>

            <h2 className="text-xl font-bold text-gray-900 mb-2 text-center">
              Before You Cancel
            </h2>
            <p className="text-sm text-gray-600 mb-6 text-center">
              Please review what you'll lose by canceling
            </p>

            <div className="bg-white rounded-2xl p-5 border border-gray-200 shadow-sm mb-6">
              <h3 className="font-bold text-gray-900 mb-4">You will lose access to:</h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3 p-3 bg-red-50 rounded-lg">
                  <XCircle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium text-gray-900 text-sm mb-1">AI Health Scanning</h4>
                    <p className="text-xs text-gray-600">Face scan, body vitals, and risk assessment features</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-3 bg-red-50 rounded-lg">
                  <XCircle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium text-gray-900 text-sm mb-1">Health Cash Benefit</h4>
                    <p className="text-xs text-gray-600">100,000đ instant payout for abnormal detections</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-3 bg-red-50 rounded-lg">
                  <XCircle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium text-gray-900 text-sm mb-1">Accident Coverage</h4>
                    <p className="text-xs text-gray-600">50,000,000đ protection for death & disability from accidents</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-3 bg-red-50 rounded-lg">
                  <XCircle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium text-gray-900 text-sm mb-1">Free Health Tools</h4>
                    <p className="text-xs text-gray-600">Symptom checker, health tips, and wellness tracking</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 rounded-xl p-5 border border-blue-200 mb-6">
              <h3 className="font-bold text-blue-900 mb-3">💡 Have You Considered?</h3>
              <ul className="text-sm text-blue-800 space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0 text-blue-600" />
                  <span>You can pause your subscription instead of canceling</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0 text-blue-600" />
                  <span>Your scans reset monthly - you still have unused scans this period</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0 text-blue-600" />
                  <span>Contact support if you're experiencing technical issues</span>
                </li>
              </ul>
            </div>

            <div className="space-y-3">
              <button
                onClick={() => setStep(3)}
                className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-4 rounded-xl transition-colors"
              >
                I Understand, Continue Cancellation
              </button>
              <button
                onClick={() => navigate('/v2/my-account')}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-xl transition-colors"
              >
                Keep My Policy
              </button>
            </div>
          </>
        )}

        {step === 3 && (
          /* STEP 3: Final Review */
          <>
            <h2 className="text-xl font-bold text-gray-900 mb-2">Final Review</h2>
            <p className="text-sm text-gray-600 mb-6">Please confirm your cancellation request</p>

            <div className="bg-white rounded-2xl p-5 border border-gray-200 shadow-sm mb-6">
              <h3 className="font-bold text-gray-900 mb-4">Policy Details</h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Policy Number</span>
                  <span className="font-semibold text-gray-900">CHB2026042100123</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Product</span>
                  <span className="font-semibold text-gray-900">Digital Wellness Cover</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Monthly Premium</span>
                  <span className="font-semibold text-gray-900">30,000đ</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Start Date</span>
                  <span className="font-semibold text-gray-900">Apr 21, 2026</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-5 border border-gray-200 shadow-sm mb-6">
              <h3 className="font-bold text-gray-900 mb-4">Cancellation Details</h3>
              <div className="space-y-3 text-sm">
                <div>
                  <span className="text-gray-600 block mb-1">Reason</span>
                  <span className="font-semibold text-gray-900">
                    {reasons.find(r => r.id === selectedReason)?.name}
                  </span>
                </div>
                {additionalComments && (
                  <div>
                    <span className="text-gray-600 block mb-1">Additional Comments</span>
                    <p className="text-gray-900 text-sm">{additionalComments}</p>
                  </div>
                )}
                <div>
                  <span className="text-gray-600 block mb-1">Effective Date</span>
                  <span className="font-semibold text-gray-900">May 21, 2026</span>
                  <p className="text-xs text-gray-500 mt-1">Policy will remain active until the end of current billing period</p>
                </div>
              </div>
            </div>

            <div className="bg-amber-50 rounded-xl p-4 border border-amber-200 mb-6">
              <div className="flex items-start gap-2">
                <AlertTriangle className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-xs text-amber-900 leading-relaxed">
                    <strong>Important:</strong> Once confirmed, your policy will be canceled at the end of the current billing period (May 21, 2026). You will not be charged for the next month, but you'll retain access until the period ends.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <button
                onClick={handleSubmit}
                className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-4 rounded-xl transition-colors"
              >
                Confirm Cancellation
              </button>
              <button
                onClick={() => setStep(2)}
                className="w-full bg-white hover:bg-gray-50 text-gray-700 font-medium py-3 rounded-xl border border-gray-200 transition-colors"
              >
                Go Back
              </button>
            </div>
          </>
        )}

        {step === 4 && (
          /* STEP 4: Confirmation */
          <div className="flex flex-col items-center justify-center min-h-[60vh]">
            <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mb-6">
              <CheckCircle className="w-12 h-12 text-orange-500" />
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-3 text-center">
              Cancellation Confirmed
            </h2>

            <p className="text-gray-600 text-center mb-8 leading-relaxed max-w-sm">
              Your policy will be canceled on <strong>May 21, 2026</strong>. You'll continue to have access until then.
            </p>

            <div className="bg-white rounded-2xl p-5 border border-gray-200 shadow-sm w-full max-w-sm mb-6">
              <h3 className="font-semibold text-gray-900 mb-4">What Happens Next?</h3>
              <div className="space-y-3 text-sm">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-gray-900 mb-1">Access Until May 21, 2026</p>
                    <p className="text-xs text-gray-600">Continue using all features until your current period ends</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <DollarSign className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-gray-900 mb-1">No Future Charges</p>
                    <p className="text-xs text-gray-600">You won't be billed starting May 21, 2026</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-gray-900 mb-1">Service Ends</p>
                    <p className="text-xs text-gray-600">All features will be disabled after May 21, 2026</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 rounded-xl p-4 border border-blue-200 w-full max-w-sm mb-6">
              <p className="text-sm text-blue-800 text-center leading-relaxed">
                Changed your mind? You can reactivate anytime before May 21, 2026 by contacting support.
              </p>
            </div>

            <div className="space-y-3 w-full max-w-sm">
              <button
                onClick={() => navigate('/v2/classic-services')}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-xl transition-colors"
              >
                Continue to Health Services
              </button>
              <button
                onClick={() => navigate('/v2/my-account')}
                className="w-full bg-white hover:bg-gray-50 text-gray-700 font-medium py-3 rounded-xl border border-gray-200 transition-colors"
              >
                Back to My Account
              </button>
            </div>

            <p className="text-xs text-gray-500 text-center mt-6">
              Thank you for being part of our wellness community. We hope to see you again! 💙
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
