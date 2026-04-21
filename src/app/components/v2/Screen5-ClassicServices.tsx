import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import { Shield, Activity, FileText, Heart, Brain, Utensils, Moon, ArrowLeft, Lock, Clock, User as UserIcon, TrendingUp, ChevronDown, ChevronUp } from 'lucide-react';

const UNLOCK_TIME = 30; // 30 seconds to unlock (for demo)

export function ClassicServices() {
  const navigate = useNavigate();
  const [timeSpent, setTimeSpent] = useState(0);
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [showAllFree, setShowAllFree] = useState(false);
  const [showAllPremium, setShowAllPremium] = useState(false);

  // Scan limit scenario: true = has scans remaining, false = limit exhausted
  const [hasScansRemaining, setHasScansRemaining] = useState(true);
  const scansUsed = hasScansRemaining ? 0 : 2;
  const scansRemaining = 2 - scansUsed;
  const nextResetDate = 'May 1, 2026'; // Next month start date

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeSpent(prev => {
        const newTime = prev + 1;
        if (newTime >= UNLOCK_TIME && !isUnlocked) {
          setIsUnlocked(true);
        }
        return newTime;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [isUnlocked]);

  const progress = Math.min((timeSpent / UNLOCK_TIME) * 100, 100);
  const remainingTime = Math.max(UNLOCK_TIME - timeSpent, 0);

  return (
    <div className="min-h-full bg-gray-50 font-sans">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 p-4 flex items-center justify-between sticky top-0 z-10">
        <div className="flex items-center gap-3">
          <button
            onClick={() => navigate('/v2/welcome')}
            className="text-gray-600 hover:text-gray-900"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <div className="flex items-center gap-2">
            <Shield className="w-5 h-5 text-blue-600" />
            <span className="font-bold text-gray-900">Health Services</span>
          </div>
        </div>
        <button
          onClick={() => navigate('/v2/my-account')}
          className="text-gray-600 hover:text-gray-900"
        >
          <UserIcon className="w-5 h-5" />
        </button>
      </div>

      <div className="p-5">
        {/* Welcome Message */}
        <div className="mb-6">
          <h2 className="text-xl font-bold text-gray-900 mb-2">Your Wellness Tools</h2>
          <p className="text-sm text-gray-600">
            Explore our free health monitoring features below
          </p>
        </div>

        {/* Classic/Free Services */}
        <div className="mb-6">
          <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
            <Activity className="w-5 h-5 text-green-600" />
            Free Health Tools
          </h3>

          <div className="grid gap-3">
            {/* Symptom Checker - CLICKABLE */}
            <button
              onClick={() => navigate('/v2/symptom-checker')}
              className="bg-white hover:bg-blue-50 p-4 rounded-xl border-2 border-blue-200 transition-all shadow-sm hover:shadow-md active:scale-98 text-left"
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center flex-shrink-0 shadow-sm">
                  <FileText className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-gray-900 mb-1">Symptom Checker</h4>
                  <p className="text-xs text-gray-600">Quick health assessment based on your symptoms</p>
                </div>
              </div>
            </button>

            {/* Health Tips - CLICKABLE */}
            <button
              onClick={() => navigate('/v2/health-tips')}
              className="bg-white hover:bg-green-50 p-4 rounded-xl border-2 border-green-200 transition-all shadow-sm hover:shadow-md active:scale-98 text-left"
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center flex-shrink-0 shadow-sm">
                  <Heart className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-gray-900 mb-1">Daily Health Tips</h4>
                  <p className="text-xs text-gray-600">Personalized wellness advice and recommendations</p>
                </div>
              </div>
            </button>

            {/* Collapsed Free Tools */}
            {showAllFree && (
              <>
                {/* Mental Wellness */}
                <button className="bg-white hover:bg-gray-50 p-4 rounded-xl border border-gray-200 transition-all shadow-sm hover:shadow-md active:scale-98 text-left">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Brain className="w-6 h-6 text-purple-600" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900 mb-1">Mental Wellness</h4>
                      <p className="text-xs text-gray-600">Stress tracking and mindfulness exercises</p>
                    </div>
                  </div>
                </button>

                {/* Nutrition Guide */}
                <button className="bg-white hover:bg-gray-50 p-4 rounded-xl border border-gray-200 transition-all shadow-sm hover:shadow-md active:scale-98 text-left">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Utensils className="w-6 h-6 text-orange-600" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900 mb-1">Nutrition Guide</h4>
                      <p className="text-xs text-gray-600">Meal planning and dietary recommendations</p>
                    </div>
                  </div>
                </button>

                {/* Sleep Tracker */}
                <button className="bg-white hover:bg-gray-50 p-4 rounded-xl border border-gray-200 transition-all shadow-sm hover:shadow-md active:scale-98 text-left">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Moon className="w-6 h-6 text-indigo-600" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900 mb-1">Sleep Quality</h4>
                      <p className="text-xs text-gray-600">Track and improve your sleep patterns</p>
                    </div>
                  </div>
                </button>
              </>
            )}

            {/* Show More/Less Button */}
            <button
              onClick={() => setShowAllFree(!showAllFree)}
              className="bg-gray-50 hover:bg-gray-100 p-3 rounded-xl border border-gray-200 transition-all text-center flex items-center justify-center gap-2 text-sm font-medium text-gray-700"
            >
              {showAllFree ? (
                <>
                  <ChevronUp className="w-4 h-4" />
                  Show Less
                </>
              ) : (
                <>
                  <ChevronDown className="w-4 h-4" />
                  Show 3 More Tools
                </>
              )}
            </button>
          </div>
        </div>

        {/* Advanced Scans - Time-Locked Section */}
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-3">
            <Lock className={`w-5 h-5 ${isUnlocked ? 'text-green-600' : 'text-gray-400'}`} />
            <h3 className="font-bold text-gray-900">Advanced AI Scans</h3>
            {!isUnlocked && (
              <span className="text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full font-semibold">
                Premium Feature
              </span>
            )}
            {isUnlocked && (
              <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full font-semibold">
                ✓ Unlocked
              </span>
            )}
          </div>

          {/* Unlock Progress Timer */}
          {!isUnlocked && (
            <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-xl p-4 border-2 border-yellow-200 mb-4">
              <div className="flex items-center gap-3 mb-3">
                <Clock className="w-5 h-5 text-orange-600" />
                <div className="flex-1">
                  <p className="text-sm font-semibold text-gray-900">
                    Keep exploring to unlock premium features!
                  </p>
                  <p className="text-xs text-gray-600 mt-1">
                    {remainingTime > 0
                      ? `Unlocks in ${remainingTime} seconds - continue browsing free tools`
                      : 'Unlocking now...'}
                  </p>
                </div>
              </div>
              <div className="w-full bg-yellow-200 rounded-full h-2.5 overflow-hidden">
                <div
                  className="bg-gradient-to-r from-yellow-500 to-orange-500 h-full transition-all duration-1000 ease-linear"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>
          )}

          {/* Advanced Scans - Visible but Locked/Unlocked */}
          <div className="relative">
            <div className={`grid gap-3 transition-all duration-500 ${!isUnlocked ? 'opacity-40' : 'opacity-100'}`}>
              {/* Face Scan */}
              <div className="bg-gradient-to-br from-purple-50 to-blue-50 p-4 rounded-xl border-2 border-purple-200">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-purple-500 rounded-xl flex items-center justify-center flex-shrink-0 shadow-sm">
                    <UserIcon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-900 mb-1">AI Face Scan</h4>
                    <p className="text-xs text-gray-600">Advanced facial vitals analysis using AI technology</p>
                  </div>
                </div>
              </div>

              {/* Body Vitals */}
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-4 rounded-xl border-2 border-blue-200">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center flex-shrink-0 shadow-sm">
                    <Activity className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-900 mb-1">Body Vitals Check</h4>
                    <p className="text-xs text-gray-600">Comprehensive body health assessment and tracking</p>
                  </div>
                </div>
              </div>

              {/* Collapsed Premium Tools */}
              {showAllPremium && (
                <div className="bg-gradient-to-br from-indigo-50 to-purple-50 p-4 rounded-xl border-2 border-indigo-200">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-indigo-500 rounded-xl flex items-center justify-center flex-shrink-0 shadow-sm">
                      <TrendingUp className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900 mb-1">Health Risk Assessment</h4>
                      <p className="text-xs text-gray-600">AI-powered predictive health risk analysis</p>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Show More/Less for Premium (only when unlocked) */}
            {isUnlocked && (
              <button
                onClick={() => setShowAllPremium(!showAllPremium)}
                className="w-full mt-3 bg-purple-50 hover:bg-purple-100 p-3 rounded-xl border border-purple-200 transition-all text-center flex items-center justify-center gap-2 text-sm font-medium text-purple-700"
              >
                {showAllPremium ? (
                  <>
                    <ChevronUp className="w-4 h-4" />
                    Show Less
                  </>
                ) : (
                  <>
                    <ChevronDown className="w-4 h-4" />
                    Show 1 More Scan
                  </>
                )}
              </button>
            )}

            {/* Unlock Button Overlay */}
            {!isUnlocked && (
              <div className="absolute inset-0 flex items-center justify-center bg-white/60 backdrop-blur-[2px] rounded-xl">
                <div className="bg-white rounded-2xl p-6 shadow-2xl border-2 border-gray-200 text-center max-w-xs">
                  <Lock className="w-12 h-12 text-gray-400 mx-auto mb-3" />
                  <h4 className="font-bold text-gray-900 mb-2">Premium Features</h4>
                  <p className="text-sm text-gray-600 mb-1">
                    Explore our free tools above
                  </p>
                  <p className="text-xs text-gray-500">
                    These features unlock after {UNLOCK_TIME} seconds
                  </p>
                </div>
              </div>
            )}

            {/* Access Button when Unlocked */}
            {isUnlocked && (
              <>
                {hasScansRemaining ? (
                  // Scenario A: Has Scans Remaining
                  <button
                    onClick={() => navigate('/v2/advanced-selection')}
                    className="w-full mt-4 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white font-bold py-4 rounded-xl shadow-lg transition-all hover:shadow-xl active:scale-98"
                  >
                    Access Advanced Scans →
                  </button>
                ) : (
                  // Scenario B: Limit Exhausted
                  <div className="mt-4 bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl p-5 border-2 border-amber-200">
                    <div className="flex items-start gap-3 mb-3">
                      <div className="w-10 h-10 bg-amber-500 rounded-full flex items-center justify-center flex-shrink-0">
                        <Lock className="w-5 h-5 text-white" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold text-gray-900 mb-2">Monthly Limit Reached</h4>
                        <p className="text-sm text-gray-700 leading-relaxed mb-3">
                          You've used all 2 scans for this month. Your scans will be refreshed on your next billing cycle.
                        </p>
                        <div className="bg-white rounded-lg p-3 border border-amber-200">
                          <p className="text-xs text-gray-600 mb-1">Next available date:</p>
                          <p className="text-sm font-bold text-gray-900">{nextResetDate}</p>
                        </div>
                      </div>
                    </div>
                    <p className="text-xs text-amber-800 text-center">
                      Thank you for taking care of your health with us! 🌟
                    </p>
                  </div>
                )}
              </>
            )}
          </div>
        </div>

        {/* Usage Stats */}
        <div className={`rounded-xl p-4 border-2 mb-4 ${
          scansRemaining > 0
            ? 'bg-blue-50 border-blue-200'
            : 'bg-red-50 border-red-200'
        }`}>
          <div className="flex items-center justify-between text-sm mb-2">
            <span className="text-gray-600">Monthly Usage (Advanced Scans)</span>
            <span className={`font-bold ${scansRemaining > 0 ? 'text-blue-900' : 'text-red-900'}`}>
              {scansUsed}/2 scans used
            </span>
          </div>
          <div className="h-2.5 bg-gray-200 rounded-full overflow-hidden mb-2">
            <div
              className={`h-full transition-all ${
                scansRemaining > 0 ? 'bg-blue-600' : 'bg-red-600'
              }`}
              style={{ width: `${(scansUsed / 2) * 100}%` }}
            />
          </div>
          <div className="flex items-center justify-between text-xs">
            <span className={scansRemaining > 0 ? 'text-blue-700' : 'text-red-700'}>
              {scansRemaining > 0
                ? `${scansRemaining} scan${scansRemaining > 1 ? 's' : ''} remaining`
                : 'No scans remaining'}
            </span>
            {scansRemaining === 0 && (
              <span className="text-gray-600">Resets: {nextResetDate}</span>
            )}
          </div>
        </div>

        {/* Demo Toggle Button */}
        <div className="bg-gray-100 rounded-xl p-4 border border-gray-300">
          <p className="text-xs text-gray-700 font-semibold mb-2">🎬 Demo Control:</p>
          <button
            onClick={() => setHasScansRemaining(!hasScansRemaining)}
            className="w-full bg-white hover:bg-gray-50 text-gray-700 font-semibold py-2 px-4 rounded-lg border-2 border-gray-300 transition-all text-sm"
          >
            Toggle Scenario: {hasScansRemaining ? 'Has Scans (0/2)' : 'Limit Reached (2/2)'}
          </button>
        </div>
      </div>
    </div>
  );
}
