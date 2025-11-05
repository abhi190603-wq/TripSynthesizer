import { useState } from 'react';
import { X, Calendar, Users, IndianRupee, MapPin, Check } from 'lucide-react';

interface TripModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function TripModal({ isOpen, onClose }: TripModalProps) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    destination: '',
    startDate: '',
    endDate: '',
    budget: '',
    travelers: 1,
    accommodation: 'hotel',
    transport: 'flight',
    activities: [] as string[]
  });

  if (!isOpen) return null;

  const handleNext = () => {
    if (step < 3) setStep(step + 1);
  };

  const handleBack = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleSave = () => {
    onClose();
    setStep(1);
    setFormData({
      destination: '',
      startDate: '',
      endDate: '',
      budget: '',
      travelers: 1,
      accommodation: 'hotel',
      transport: 'flight',
      activities: []
    });
  };

  const activityOptions = ['Sightseeing', 'Adventure', 'Food Tour', 'Shopping', 'Beach', 'Mountains', 'Culture', 'Photography'];

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-hidden flex flex-col">
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Trip Synthesizer</h2>
            <p className="text-sm text-gray-600 mt-1">Step {step} of 3</p>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X size={24} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-6">
          {step === 1 && (
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-gray-900">Budget & Basics</h3>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <MapPin size={16} className="inline mr-1" />
                  Destination
                </label>
                <input
                  type="text"
                  value={formData.destination}
                  onChange={(e) => setFormData({ ...formData, destination: e.target.value })}
                  placeholder="e.g., Goa, Kerala, Jaipur"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <Calendar size={16} className="inline mr-1" />
                    Start Date
                  </label>
                  <input
                    type="date"
                    value={formData.startDate}
                    onChange={(e) => setFormData({ ...formData, startDate: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    End Date
                  </label>
                  <input
                    type="date"
                    value={formData.endDate}
                    onChange={(e) => setFormData({ ...formData, endDate: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <IndianRupee size={16} className="inline mr-1" />
                  Budget (INR)
                </label>
                <input
                  type="number"
                  value={formData.budget}
                  onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                  placeholder="e.g., 50000"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <Users size={16} className="inline mr-1" />
                  Number of Travelers
                </label>
                <select
                  value={formData.travelers}
                  onChange={(e) => setFormData({ ...formData, travelers: parseInt(e.target.value) })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                >
                  {[1, 2, 3, 4, 5, 6].map(num => (
                    <option key={num} value={num}>{num} {num === 1 ? 'Person' : 'People'}</option>
                  ))}
                </select>
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-gray-900">Options</h3>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Accommodation Type
                </label>
                <div className="grid grid-cols-2 gap-3">
                  {['Hotel', 'Resort', 'Homestay', 'Hostel'].map(type => (
                    <button
                      key={type}
                      onClick={() => setFormData({ ...formData, accommodation: type.toLowerCase() })}
                      className={`px-4 py-3 rounded-lg border-2 transition-all ${
                        formData.accommodation === type.toLowerCase()
                          ? 'border-orange-500 bg-orange-50 text-orange-700'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Transportation
                </label>
                <div className="grid grid-cols-2 gap-3">
                  {['Flight', 'Train', 'Car', 'Bus'].map(type => (
                    <button
                      key={type}
                      onClick={() => setFormData({ ...formData, transport: type.toLowerCase() })}
                      className={`px-4 py-3 rounded-lg border-2 transition-all ${
                        formData.transport === type.toLowerCase()
                          ? 'border-orange-500 bg-orange-50 text-orange-700'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Activities (Select all that apply)
                </label>
                <div className="grid grid-cols-2 gap-3">
                  {activityOptions.map(activity => (
                    <button
                      key={activity}
                      onClick={() => {
                        const activities = formData.activities.includes(activity)
                          ? formData.activities.filter(a => a !== activity)
                          : [...formData.activities, activity];
                        setFormData({ ...formData, activities });
                      }}
                      className={`px-4 py-3 rounded-lg border-2 transition-all flex items-center justify-between ${
                        formData.activities.includes(activity)
                          ? 'border-orange-500 bg-orange-50 text-orange-700'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      <span>{activity}</span>
                      {formData.activities.includes(activity) && (
                        <Check size={16} />
                      )}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-gray-900">Review & Save</h3>

              <div className="bg-gray-50 rounded-xl p-6 space-y-4">
                <div className="flex justify-between">
                  <span className="text-gray-600">Destination:</span>
                  <span className="font-semibold text-gray-900">{formData.destination || 'Not specified'}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Duration:</span>
                  <span className="font-semibold text-gray-900">
                    {formData.startDate && formData.endDate
                      ? `${new Date(formData.startDate).toLocaleDateString()} - ${new Date(formData.endDate).toLocaleDateString()}`
                      : 'Not specified'}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Budget:</span>
                  <span className="font-semibold text-gray-900">
                    {formData.budget ? `₹${parseInt(formData.budget).toLocaleString()}` : 'Not specified'}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Travelers:</span>
                  <span className="font-semibold text-gray-900">{formData.travelers} {formData.travelers === 1 ? 'Person' : 'People'}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Accommodation:</span>
                  <span className="font-semibold text-gray-900 capitalize">{formData.accommodation}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Transport:</span>
                  <span className="font-semibold text-gray-900 capitalize">{formData.transport}</span>
                </div>
                <div>
                  <span className="text-gray-600">Activities:</span>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {formData.activities.length > 0 ? (
                      formData.activities.map(activity => (
                        <span
                          key={activity}
                          className="px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-sm"
                        >
                          {activity}
                        </span>
                      ))
                    ) : (
                      <span className="text-gray-500 text-sm">None selected</span>
                    )}
                  </div>
                </div>
              </div>

              <div className="bg-orange-50 border border-orange-200 rounded-xl p-4">
                <p className="text-sm text-orange-800">
                  🎉 Your trip plan looks amazing! Click "Save Trip" to add it to your itinerary.
                </p>
              </div>
            </div>
          )}
        </div>

        <div className="p-6 border-t border-gray-200 flex gap-3">
          {step > 1 && (
            <button
              onClick={handleBack}
              className="flex-1 px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-medium"
            >
              Back
            </button>
          )}
          {step < 3 ? (
            <button
              onClick={handleNext}
              className="flex-1 px-6 py-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-lg hover:from-orange-600 hover:to-orange-700 transition-all font-medium"
            >
              Next
            </button>
          ) : (
            <button
              onClick={handleSave}
              className="flex-1 px-6 py-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-lg hover:from-orange-600 hover:to-orange-700 transition-all font-medium"
            >
              Save Trip
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
