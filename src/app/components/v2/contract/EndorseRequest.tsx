import { useState } from 'react';
import { useNavigate } from 'react-router';
import { ArrowLeft, Edit, CheckCircle, AlertCircle, User, Phone, MapPin, Calendar, TrendingUp, Shield, Users } from 'lucide-react';

export function EndorseRequest() {
  const navigate = useNavigate();
  const [step, setStep] = useState(1); // 1: Select Type, 2: Fill Details, 3: Review, 4: Confirmation
  const [endorseType, setEndorseType] = useState<string>('');
  const [formData, setFormData] = useState({
    name: 'Nguyen Van A',
    phone: '0901234567',
    address: '123 Le Loi St, District 1, HCMC',
    email: 'nguyenvana@email.com',
  });
  const [selectedCoverage, setSelectedCoverage] = useState<string>('');

  const coverageOptions = [
    {
      id: 'increase-scans',
      name: 'Increase Scan Limit',
      icon: TrendingUp,
      current: '2 scans/month',
      upgrade: '5 scans/month',
      price: '+15,000đ/month',
      total: '45,000đ/month',
      description: 'Get 3 extra AI health scans every month',
      benefit: 'Perfect for active health monitoring'
    },
    {
      id: 'increase-benefit',
      name: 'Increase Cash Benefit',
      icon: Shield,
      current: '100,000đ payout',
      upgrade: '250,000đ payout',
      price: '+20,000đ/month',
      total: '50,000đ/month',
      description: 'Higher cash support when abnormality detected',
      benefit: '2.5x more financial protection'
    },
    {
      id: 'add-family',
      name: 'Add Family Member',
      icon: Users,
      current: 'Individual only',
      upgrade: '+1 family member',
      price: '+12,000đ/month',
      total: '42,000đ/month',
      description: 'Extend protection to spouse or children',
      benefit: 'Share scans and benefits with loved ones'
    },
  ];

  const endorseTypes = [
    { id: 'personal-info', name: 'Update Personal Information', icon: User, description: 'Change name, contact details, or address' },
    { id: 'beneficiary', name: 'Change Beneficiary', icon: User, description: 'Update your policy beneficiary' },
    { id: 'coverage', name: 'Adjust Coverage', icon: Calendar, description: 'Modify coverage terms or limits' },
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
          <h1 className="font-bold text-gray-900">Policy Endorsement</h1>
          <p className="text-xs text-gray-600">Step {step} of 4</p>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="bg-white p-4 border-b border-gray-200">
        <div className="flex items-center justify-between mb-2">
          {[1, 2, 3, 4].map((num) => (
            <div key={num} className="flex items-center flex-1">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center font-semibold text-sm ${
                num <= step ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-400'
              }`}>
                {num < step ? <CheckCircle className="w-5 h-5" /> : num}
              </div>
              {num < 4 && (
                <div className={`flex-1 h-1 mx-2 ${num < step ? 'bg-blue-600' : 'bg-gray-200'}`} />
              )}
            </div>
          ))}
        </div>
        <div className="flex justify-between text-xs text-gray-600">
          <span>Select</span>
          <span>Details</span>
          <span>Review</span>
          <span>Done</span>
        </div>
      </div>

      <div className="p-5">
        {step === 1 && (
          /* STEP 1: Select Endorsement Type */
          <>
            <h2 className="text-xl font-bold text-gray-900 mb-2">What would you like to change?</h2>
            <p className="text-sm text-gray-600 mb-6">Select the type of policy change you need</p>

            <div className="space-y-3">
              {endorseTypes.map((type) => {
                const Icon = type.icon;
                return (
                  <button
                    key={type.id}
                    onClick={() => {
                      setEndorseType(type.id);
                      setStep(2);
                    }}
                    className="w-full bg-white hover:bg-blue-50 p-5 rounded-xl border-2 border-gray-200 hover:border-blue-300 transition-all text-left"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Icon className="w-6 h-6 text-blue-600" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-gray-900 mb-1">{type.name}</h3>
                        <p className="text-sm text-gray-600">{type.description}</p>
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>

            <div className="mt-6 bg-blue-50 rounded-xl p-4 border border-blue-200">
              <p className="text-xs text-blue-800">
                <strong>Note:</strong> Policy changes may require approval and could affect your premium or coverage terms.
              </p>
            </div>
          </>
        )}

        {step === 2 && endorseType === 'coverage' && (
          /* STEP 2: Coverage Options */
          <>
            <h2 className="text-xl font-bold text-gray-900 mb-2">Choose Your Upgrade</h2>
            <p className="text-sm text-gray-600 mb-6">Select how you'd like to enhance your coverage</p>

            <div className="space-y-4">
              {coverageOptions.map((option) => {
                const Icon = option.icon;
                return (
                  <button
                    key={option.id}
                    onClick={() => setSelectedCoverage(option.id)}
                    className={`w-full p-5 rounded-2xl border-2 transition-all text-left ${
                      selectedCoverage === option.id
                        ? 'bg-gradient-to-br from-blue-50 to-indigo-50 border-blue-400 shadow-lg scale-105'
                        : 'bg-white border-gray-200 hover:border-blue-300 hover:shadow-md'
                    }`}
                  >
                    <div className="flex items-start gap-4">
                      <div className={`w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0 ${
                        selectedCoverage === option.id ? 'bg-blue-600' : 'bg-blue-100'
                      }`}>
                        <Icon className={`w-7 h-7 ${selectedCoverage === option.id ? 'text-white' : 'text-blue-600'}`} />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-gray-900 mb-1 text-lg">{option.name}</h3>
                        <p className="text-sm text-gray-600 mb-3">{option.description}</p>

                        <div className="flex items-center gap-3 mb-2">
                          <div className="flex-1">
                            <span className="text-xs text-gray-500 block">Current</span>
                            <span className="text-sm font-semibold text-gray-700">{option.current}</span>
                          </div>
                          <div className="text-blue-600 font-bold">→</div>
                          <div className="flex-1">
                            <span className="text-xs text-gray-500 block">Upgraded</span>
                            <span className="text-sm font-bold text-blue-600">{option.upgrade}</span>
                          </div>
                        </div>

                        <div className="flex items-center justify-between pt-3 border-t border-gray-200 mt-3">
                          <div>
                            <span className="text-xs text-green-600 font-medium block">{option.benefit}</span>
                          </div>
                          <div className="text-right">
                            <span className="text-sm text-gray-500 block">{option.price}</span>
                            <span className="text-lg font-bold text-gray-900">{option.total}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>

            <button
              onClick={() => setStep(3)}
              disabled={!selectedCoverage}
              className="w-full mt-6 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed text-white font-bold py-4 rounded-xl transition-colors shadow-lg"
            >
              Continue to Review
            </button>
          </>
        )}

        {step === 2 && endorseType !== 'coverage' && (
          /* STEP 2: Personal Info / Beneficiary Form */
          <>
            <h2 className="text-xl font-bold text-gray-900 mb-2">Update Information</h2>
            <p className="text-sm text-gray-600 mb-6">
              {endorseTypes.find(t => t.id === endorseType)?.name}
            </p>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  <User className="w-4 h-4 inline mr-1" />
                  Full Name
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  <Phone className="w-4 h-4 inline mr-1" />
                  Phone Number
                </label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  <MapPin className="w-4 h-4 inline mr-1" />
                  Address
                </label>
                <textarea
                  value={formData.address}
                  onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                  rows={3}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none resize-none"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none"
                />
              </div>
            </div>

            <button
              onClick={() => setStep(3)}
              className="w-full mt-6 bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-xl transition-colors"
            >
              Continue to Review
            </button>
          </>
        )}

        {step === 3 && (
          /* STEP 3: Review */
          <>
            <h2 className="text-xl font-bold text-gray-900 mb-2">Review Your Request</h2>
            <p className="text-sm text-gray-600 mb-6">Please confirm the details before submitting</p>

            <div className="bg-white rounded-2xl p-5 border border-gray-200 shadow-sm mb-6">
              <h3 className="font-bold text-gray-900 mb-4">Endorsement Type</h3>
              <p className="text-sm text-gray-700">
                {endorseTypes.find(t => t.id === endorseType)?.name}
              </p>
            </div>

            {endorseType === 'coverage' ? (
              <div className="bg-white rounded-2xl p-5 border border-gray-200 shadow-sm mb-6">
                <h3 className="font-bold text-gray-900 mb-4">Coverage Upgrade</h3>
                {coverageOptions.filter(opt => opt.id === selectedCoverage).map(option => (
                  <div key={option.id} className="space-y-3">
                    <div>
                      <span className="text-sm text-gray-600 block mb-1">Selected Upgrade</span>
                      <span className="font-bold text-gray-900 text-lg">{option.name}</span>
                    </div>
                    <div className="flex justify-between items-center py-3 border-t border-b border-gray-200">
                      <div>
                        <span className="text-xs text-gray-500 block">Current Coverage</span>
                        <span className="text-sm font-medium text-gray-700">{option.current}</span>
                      </div>
                      <div className="text-blue-600 font-bold">→</div>
                      <div className="text-right">
                        <span className="text-xs text-gray-500 block">New Coverage</span>
                        <span className="text-sm font-bold text-blue-600">{option.upgrade}</span>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">New Monthly Premium</span>
                      <span className="font-bold text-gray-900 text-xl">{option.total}</span>
                    </div>
                    <div className="bg-green-50 rounded-lg p-3 border border-green-200">
                      <p className="text-sm text-green-800">
                        <strong>Benefit:</strong> {option.benefit}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="bg-white rounded-2xl p-5 border border-gray-200 shadow-sm mb-6">
                <h3 className="font-bold text-gray-900 mb-4">Updated Information</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Name</span>
                    <span className="font-semibold text-gray-900">{formData.name}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Phone</span>
                    <span className="font-semibold text-gray-900">{formData.phone}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Email</span>
                    <span className="font-semibold text-gray-900">{formData.email}</span>
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="text-gray-600">Address</span>
                    <span className="font-semibold text-gray-900">{formData.address}</span>
                  </div>
                </div>
              </div>
            )}

            <div className="bg-amber-50 rounded-xl p-4 border border-amber-200 mb-6">
              <p className="text-xs text-amber-900 leading-relaxed">
                <strong>Important:</strong> Your endorsement request will be reviewed within 2-3 business days. You will receive confirmation via Zalo message and email.
              </p>
            </div>

            <div className="space-y-3">
              <button
                onClick={handleSubmit}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-xl transition-colors"
              >
                Submit Endorsement Request
              </button>
              <button
                onClick={() => setStep(2)}
                className="w-full bg-white hover:bg-gray-50 text-gray-700 font-medium py-3 rounded-xl border border-gray-200 transition-colors"
              >
                Back to Edit
              </button>
            </div>
          </>
        )}

        {step === 4 && (
          /* STEP 4: Confirmation */
          <div className="flex flex-col items-center justify-center min-h-[60vh]">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6">
              <CheckCircle className="w-12 h-12 text-green-500" />
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-3 text-center">
              Request Submitted Successfully!
            </h2>

            <p className="text-gray-600 text-center mb-8 leading-relaxed max-w-sm">
              Your endorsement request has been received. We'll review it and get back to you within 2-3 business days.
            </p>

            <div className="bg-blue-50 rounded-2xl p-5 border border-blue-200 w-full max-w-sm mb-8">
              <h3 className="font-semibold text-blue-900 mb-3">What's Next?</h3>
              <ul className="text-sm text-blue-800 space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span>You'll receive a confirmation email shortly</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span>Our team will review your request</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span>Updates will be sent via Zalo message</span>
                </li>
              </ul>
            </div>

            <div className="space-y-3 w-full max-w-sm">
              <button
                onClick={() => navigate('/v2/my-account')}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-xl transition-colors"
              >
                Back to My Account
              </button>
              <button
                onClick={() => navigate('/v2/classic-services')}
                className="w-full bg-white hover:bg-gray-50 text-gray-700 font-medium py-3 rounded-xl border border-gray-200 transition-colors"
              >
                Go to Health Services
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
