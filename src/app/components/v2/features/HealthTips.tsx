import { useState } from 'react';
import { useNavigate } from 'react-router';
import { ArrowLeft, Heart, Utensils, Activity, Moon, Brain, Droplet, ChevronRight } from 'lucide-react';

export function HealthTips() {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const categories = [
    { id: 'nutrition', name: 'Nutrition', icon: Utensils, color: 'orange' },
    { id: 'exercise', name: 'Exercise', icon: Activity, color: 'blue' },
    { id: 'sleep', name: 'Sleep', icon: Moon, color: 'indigo' },
    { id: 'mental', name: 'Mental Health', icon: Brain, color: 'purple' },
    { id: 'hydration', name: 'Hydration', icon: Droplet, color: 'cyan' },
    { id: 'heart', name: 'Heart Health', icon: Heart, color: 'red' },
  ];

  const tips: Record<string, { title: string; content: string }[]> = {
    nutrition: [
      { title: 'Eat the Rainbow', content: 'Include a variety of colorful fruits and vegetables in your daily diet. Different colors provide different nutrients essential for your health.' },
      { title: 'Portion Control', content: 'Use smaller plates to help control portion sizes. This simple trick can help you eat less without feeling deprived.' },
      { title: 'Stay Away from Processed Foods', content: 'Limit processed and packaged foods. Focus on whole, natural foods for better nutrition and energy levels.' },
    ],
    exercise: [
      { title: '30 Minutes Daily Movement', content: 'Aim for at least 30 minutes of moderate physical activity every day. This can be walking, cycling, or any activity you enjoy.' },
      { title: 'Mix Cardio and Strength', content: 'Combine cardiovascular exercises with strength training for optimal fitness and health benefits.' },
      { title: 'Take Active Breaks', content: 'If you sit for long periods, take short active breaks every hour. Simple stretches or a quick walk can make a big difference.' },
    ],
    sleep: [
      { title: 'Consistent Sleep Schedule', content: 'Go to bed and wake up at the same time every day, even on weekends. This helps regulate your body clock.' },
      { title: 'Create a Bedtime Routine', content: 'Develop a relaxing pre-sleep routine. Avoid screens 1 hour before bed and create a calm environment.' },
      { title: '7-9 Hours is Ideal', content: 'Most adults need 7-9 hours of sleep per night for optimal health and cognitive function.' },
    ],
    mental: [
      { title: 'Practice Mindfulness', content: 'Take 10 minutes daily for meditation or mindfulness exercises. This can reduce stress and improve focus.' },
      { title: 'Stay Connected', content: 'Maintain social connections. Regular interaction with friends and family supports mental wellbeing.' },
      { title: 'Limit Screen Time', content: 'Set boundaries for social media and screen time. Too much can negatively impact mental health.' },
    ],
    hydration: [
      { title: 'Drink 8 Glasses Daily', content: 'Aim for 8 glasses (2 liters) of water per day. Adjust based on activity level and climate.' },
      { title: 'Start Your Day with Water', content: 'Drink a glass of water first thing in the morning to kickstart your metabolism and hydration.' },
      { title: 'Eat Water-Rich Foods', content: 'Include cucumbers, watermelon, and oranges in your diet. They help with hydration too.' },
    ],
    heart: [
      { title: 'Reduce Sodium Intake', content: 'Limit salt consumption to support healthy blood pressure. Use herbs and spices for flavor instead.' },
      { title: 'Include Healthy Fats', content: 'Eat omega-3 rich foods like fish, nuts, and seeds. These support cardiovascular health.' },
      { title: 'Manage Stress', content: 'Chronic stress affects heart health. Practice relaxation techniques and find healthy stress outlets.' },
    ],
  };

  const getCategoryColor = (color: string) => {
    const colors: Record<string, string> = {
      orange: 'from-orange-50 to-orange-100 border-orange-200 text-orange-700',
      blue: 'from-blue-50 to-blue-100 border-blue-200 text-blue-700',
      indigo: 'from-indigo-50 to-indigo-100 border-indigo-200 text-indigo-700',
      purple: 'from-purple-50 to-purple-100 border-purple-200 text-purple-700',
      cyan: 'from-cyan-50 to-cyan-100 border-cyan-200 text-cyan-700',
      red: 'from-red-50 to-red-100 border-red-200 text-red-700',
    };
    return colors[color] || colors.blue;
  };

  return (
    <div className="min-h-full bg-white font-sans">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 p-4 flex items-center gap-3 sticky top-0 z-10">
        <button
          onClick={() => {
            if (selectedCategory) {
              setSelectedCategory(null);
            } else {
              navigate('/v2/classic-services');
            }
          }}
          className="text-gray-600 hover:text-gray-900"
        >
          <ArrowLeft className="w-5 h-5" />
        </button>
        <div className="flex items-center gap-2">
          <Heart className="w-5 h-5 text-green-600" />
          <h1 className="font-bold text-gray-900">
            {selectedCategory
              ? categories.find(c => c.id === selectedCategory)?.name
              : 'Daily Health Tips'}
          </h1>
        </div>
      </div>

      <div className="p-5">
        {!selectedCategory ? (
          <>
            {/* Introduction */}
            <div className="mb-6">
              <h2 className="text-xl font-bold text-gray-900 mb-2">
                Personalized Wellness Advice
              </h2>
              <p className="text-sm text-gray-600 leading-relaxed">
                Choose a category to explore health tips and recommendations tailored to improve your wellbeing.
              </p>
            </div>

            {/* Categories */}
            <div className="grid gap-3">
              {categories.map(category => {
                const Icon = category.icon;
                return (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`bg-gradient-to-br ${getCategoryColor(category.color)} p-5 rounded-xl border-2 transition-all shadow-sm hover:shadow-md active:scale-98 text-left`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm">
                          <Icon className="w-6 h-6" />
                        </div>
                        <div>
                          <h3 className="font-bold text-gray-900">{category.name}</h3>
                          <p className="text-xs text-gray-600 mt-0.5">
                            {tips[category.id]?.length || 0} tips available
                          </p>
                        </div>
                      </div>
                      <ChevronRight className="w-5 h-5 text-gray-400" />
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Daily Tip */}
            <div className="mt-6 bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-5 border-2 border-green-200">
              <div className="flex items-center gap-2 mb-3">
                <Heart className="w-5 h-5 text-green-600" />
                <h3 className="font-bold text-green-900">Tip of the Day</h3>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Stay Hydrated Throughout the Day</h4>
              <p className="text-sm text-gray-700 leading-relaxed">
                Drinking water regularly helps maintain energy levels, supports digestion, and keeps your skin healthy. Keep a water bottle nearby as a reminder!
              </p>
            </div>
          </>
        ) : (
          <>
            {/* Tips List */}
            <div className="mb-6">
              <p className="text-sm text-gray-600 mb-4">
                Explore these evidence-based tips to improve your {categories.find(c => c.id === selectedCategory)?.name.toLowerCase()}.
              </p>
            </div>

            <div className="space-y-4">
              {tips[selectedCategory]?.map((tip, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-5 border border-gray-200 shadow-sm"
                >
                  <div className="flex items-start gap-3 mb-3">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-sm font-bold text-green-600">{index + 1}</span>
                    </div>
                    <h3 className="font-bold text-gray-900 flex-1">{tip.title}</h3>
                  </div>
                  <p className="text-sm text-gray-700 leading-relaxed pl-11">
                    {tip.content}
                  </p>
                </div>
              ))}
            </div>

            {/* Info Box */}
            <div className="mt-6 bg-blue-50 rounded-xl p-4 border border-blue-200">
              <p className="text-xs text-blue-800 leading-relaxed">
                <strong>Remember:</strong> Small, consistent changes lead to lasting improvements. Start with one tip at a time and build healthy habits gradually.
              </p>
            </div>

            {/* Back Button */}
            <button
              onClick={() => setSelectedCategory(null)}
              className="w-full mt-4 bg-white hover:bg-gray-50 text-gray-700 font-medium py-3 rounded-xl border border-gray-200 transition-colors"
            >
              Back to Categories
            </button>
          </>
        )}
      </div>
    </div>
  );
}
