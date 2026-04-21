import { useNavigate } from 'react-router';
import { Shield, User, ArrowLeft } from 'lucide-react';

export function Welcome() {
  const navigate = useNavigate();

  const handleAnyAnswer = () => {
    navigate('/v2/classic-services');
  };

  return (
    <div className="min-h-full bg-gradient-to-b from-blue-50 to-white font-sans">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 p-4 flex items-center gap-3">
        <button
          onClick={() => navigate('/v2/notification')}
          className="text-gray-600 hover:text-gray-900"
        >
          <ArrowLeft className="w-5 h-5" />
        </button>
        <div className="flex items-center gap-2">
          <Shield className="w-5 h-5 text-blue-600" />
          <span className="font-bold text-gray-900">Chubb Health Companion</span>
        </div>
      </div>

      {/* Welcome Content */}
      <div className="flex flex-col items-center justify-center px-6 py-12">
        <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-3xl flex items-center justify-center mb-6 shadow-lg">
          <User className="w-10 h-10 text-white" />
        </div>

        <h1 className="text-2xl font-bold text-gray-900 mb-3 text-center">
          Welcome to Your Health Journey
        </h1>
        <p className="text-gray-600 text-center mb-8 leading-relaxed max-w-sm">
          We're here to help you monitor and protect your wellness. Let's start with a simple question.
        </p>

        {/* Question Card */}
        <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 w-full max-w-sm mb-6">
          <h2 className="text-lg font-bold text-gray-900 mb-4 text-center">
            How are you feeling today?
          </h2>

          <div className="grid grid-cols-2 gap-3">
            <button
              onClick={handleAnyAnswer}
              className="bg-green-50 hover:bg-green-100 border-2 border-green-200 text-green-800 font-semibold py-4 px-4 rounded-xl transition-all hover:shadow-md active:scale-95"
            >
              <div className="text-2xl mb-1">😊</div>
              <div className="text-sm">Great</div>
            </button>

            <button
              onClick={handleAnyAnswer}
              className="bg-blue-50 hover:bg-blue-100 border-2 border-blue-200 text-blue-800 font-semibold py-4 px-4 rounded-xl transition-all hover:shadow-md active:scale-95"
            >
              <div className="text-2xl mb-1">😌</div>
              <div className="text-sm">Normal</div>
            </button>

            <button
              onClick={handleAnyAnswer}
              className="bg-yellow-50 hover:bg-yellow-100 border-2 border-yellow-200 text-yellow-800 font-semibold py-4 px-4 rounded-xl transition-all hover:shadow-md active:scale-95"
            >
              <div className="text-2xl mb-1">😓</div>
              <div className="text-sm">Tired</div>
            </button>

            <button
              onClick={handleAnyAnswer}
              className="bg-orange-50 hover:bg-orange-100 border-2 border-orange-200 text-orange-800 font-semibold py-4 px-4 rounded-xl transition-all hover:shadow-md active:scale-95"
            >
              <div className="text-2xl mb-1">🤒</div>
              <div className="text-sm">Unwell</div>
            </button>
          </div>
        </div>

        <p className="text-xs text-gray-500 text-center max-w-xs">
          Your response helps us provide personalized health monitoring recommendations
        </p>
      </div>

      {/* Info Footer */}
      <div className="px-6 pb-6">
        <div className="bg-blue-50 rounded-xl p-4 border border-blue-100">
          <p className="text-xs text-blue-800 text-center leading-relaxed">
            <strong>Privacy Protected:</strong> All your health data is encrypted and secured by Chubb
          </p>
        </div>
      </div>
    </div>
  );
}
