import { useState } from 'react';
import { useNavigate } from 'react-router';
import { ArrowLeft, FileText, Search, AlertCircle, CheckCircle } from 'lucide-react';

export function SymptomChecker() {
  const navigate = useNavigate();
  const [selectedSymptoms, setSelectedSymptoms] = useState<string[]>([]);
  const [showResults, setShowResults] = useState(false);

  const symptoms = [
    { id: 'fever', name: 'Fever', icon: '🌡️' },
    { id: 'cough', name: 'Cough', icon: '🤧' },
    { id: 'headache', name: 'Headache', icon: '🤕' },
    { id: 'fatigue', name: 'Fatigue', icon: '😴' },
    { id: 'sore-throat', name: 'Sore Throat', icon: '🗣️' },
    { id: 'body-ache', name: 'Body Ache', icon: '💪' },
    { id: 'nausea', name: 'Nausea', icon: '🤢' },
    { id: 'dizziness', name: 'Dizziness', icon: '😵' },
  ];

  const toggleSymptom = (id: string) => {
    setSelectedSymptoms(prev =>
      prev.includes(id) ? prev.filter(s => s !== id) : [...prev, id]
    );
  };

  const handleCheck = () => {
    if (selectedSymptoms.length > 0) {
      setShowResults(true);
    }
  };

  return (
    <div className="min-h-full bg-white font-sans">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 p-4 flex items-center gap-3 sticky top-0 z-10">
        <button
          onClick={() => navigate('/v2/classic-services')}
          className="text-gray-600 hover:text-gray-900"
        >
          <ArrowLeft className="w-5 h-5" />
        </button>
        <div className="flex items-center gap-2">
          <FileText className="w-5 h-5 text-blue-600" />
          <h1 className="font-bold text-gray-900">Symptom Checker</h1>
        </div>
      </div>

      <div className="p-5">
        {!showResults ? (
          <>
            {/* Introduction */}
            <div className="mb-6">
              <h2 className="text-xl font-bold text-gray-900 mb-2">How are you feeling?</h2>
              <p className="text-sm text-gray-600 leading-relaxed">
                Select the symptoms you're experiencing and we'll provide guidance on what to do next.
              </p>
            </div>

            {/* Symptom Selection */}
            <div className="grid grid-cols-2 gap-3 mb-6">
              {symptoms.map(symptom => (
                <button
                  key={symptom.id}
                  onClick={() => toggleSymptom(symptom.id)}
                  className={`p-4 rounded-xl border-2 transition-all text-left ${
                    selectedSymptoms.includes(symptom.id)
                      ? 'bg-blue-50 border-blue-500 shadow-md'
                      : 'bg-white border-gray-200 hover:border-blue-300'
                  }`}
                >
                  <div className="text-2xl mb-2">{symptom.icon}</div>
                  <h3 className="font-semibold text-gray-900 text-sm">{symptom.name}</h3>
                  {selectedSymptoms.includes(symptom.id) && (
                    <CheckCircle className="w-4 h-4 text-blue-600 mt-1" />
                  )}
                </button>
              ))}
            </div>

            {/* Check Button */}
            {selectedSymptoms.length > 0 && (
              <button
                onClick={handleCheck}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-xl shadow-lg transition-all"
              >
                <Search className="w-5 h-5 inline mr-2" />
                Check Symptoms ({selectedSymptoms.length} selected)
              </button>
            )}

            {/* Info */}
            <div className="mt-6 bg-blue-50 rounded-xl p-4 border border-blue-200">
              <p className="text-xs text-blue-800 leading-relaxed">
                <strong>Note:</strong> This tool is for informational purposes only and does not replace professional medical advice. If symptoms are severe, seek immediate medical attention.
              </p>
            </div>
          </>
        ) : (
          <>
            {/* Results */}
            <div className="mb-6">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <AlertCircle className="w-10 h-10 text-yellow-600" />
              </div>
              <h2 className="text-xl font-bold text-gray-900 mb-2 text-center">
                Assessment Results
              </h2>
              <p className="text-sm text-gray-600 text-center mb-6">
                Based on your symptoms: {selectedSymptoms.map(id => symptoms.find(s => s.id === id)?.name).join(', ')}
              </p>
            </div>

            {/* Recommendations */}
            <div className="bg-white rounded-2xl p-5 border border-gray-200 shadow-sm mb-6">
              <h3 className="font-bold text-gray-900 mb-4">Recommendations</h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3 p-3 bg-green-50 rounded-lg border border-green-200">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium text-gray-900 text-sm mb-1">Rest & Hydration</h4>
                    <p className="text-xs text-gray-600">Get plenty of rest and drink fluids regularly</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-3 bg-blue-50 rounded-lg border border-blue-200">
                  <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium text-gray-900 text-sm mb-1">Monitor Symptoms</h4>
                    <p className="text-xs text-gray-600">Track your symptoms over the next 24-48 hours</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-3 bg-purple-50 rounded-lg border border-purple-200">
                  <CheckCircle className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium text-gray-900 text-sm mb-1">Consult if Worsens</h4>
                    <p className="text-xs text-gray-600">If symptoms worsen, contact a healthcare provider</p>
                  </div>
                </div>
              </div>
            </div>

            {/* When to Seek Help */}
            <div className="bg-red-50 rounded-xl p-4 border border-red-200 mb-6">
              <h4 className="font-semibold text-red-900 mb-2 flex items-center gap-2">
                <AlertCircle className="w-4 h-4" />
                Seek Immediate Medical Attention If:
              </h4>
              <ul className="text-xs text-red-800 space-y-1">
                <li>• Difficulty breathing or chest pain</li>
                <li>• High fever above 39°C (102°F)</li>
                <li>• Severe persistent pain</li>
                <li>• Confusion or loss of consciousness</li>
              </ul>
            </div>

            {/* Actions */}
            <div className="space-y-3">
              <button
                onClick={() => {
                  setShowResults(false);
                  setSelectedSymptoms([]);
                }}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-xl transition-colors"
              >
                Check Again
              </button>
              <button
                onClick={() => navigate('/v2/classic-services')}
                className="w-full bg-white hover:bg-gray-50 text-gray-700 font-medium py-3 rounded-xl border border-gray-200 transition-colors"
              >
                Back to Health Services
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
