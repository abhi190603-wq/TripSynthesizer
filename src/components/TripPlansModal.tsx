import { X, ChevronDown, MapPin, Users, Wallet, Plane, Hotel, Train } from 'lucide-react';
import { useState } from 'react';
import { TripPlan } from '../services/tripPlanner';

interface TripPlansModalProps {
  isOpen: boolean;
  onClose: () => void;
  plans: TripPlan[];
  loading: boolean;
}

export function TripPlansModal({ isOpen, onClose, plans, loading }: TripPlansModalProps) {
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({});

  if (!isOpen) return null;

  const toggleSection = (section: string) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const getPlanColor = (planId: string) => {
    if (planId === 'plan-budget') return 'from-green-500 to-green-600';
    if (planId === 'plan-comfort') return 'from-blue-500 to-blue-600';
    return 'from-orange-500 to-orange-600';
  };

  const getPlanBadge = (planId: string) => {
    if (planId === 'plan-budget') return '💚 Best Value';
    if (planId === 'plan-comfort') return '💙 Popular';
    return '✨ Premium';
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden flex flex-col">
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Your Trip Plans</h2>
            <p className="text-sm text-gray-600 mt-1">Choose the perfect plan for your journey</p>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X size={24} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-6">
          {loading ? (
            <div className="flex items-center justify-center h-96">
              <div className="text-center">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-500 mx-auto mb-4"></div>
                <p className="text-gray-600">Generating your personalized trip plans...</p>
              </div>
            </div>
          ) : plans.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-600">No plans available. Please try again.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {plans.map(plan => (
                <div
                  key={plan.id}
                  onClick={() => setSelectedPlan(plan.id)}
                  className={`cursor-pointer relative rounded-2xl overflow-hidden transition-all transform hover:scale-105 ${
                    selectedPlan === plan.id ? 'ring-2 ring-orange-500 shadow-xl' : 'shadow-lg'
                  }`}
                >
                  <div className={`bg-gradient-to-br ${getPlanColor(plan.id)} p-6 text-white`}>
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-2xl font-bold">{plan.title}</h3>
                      <span className="text-sm bg-white bg-opacity-20 px-3 py-1 rounded-full">
                        {getPlanBadge(plan.id)}
                      </span>
                    </div>
                    <div className="text-3xl font-bold mb-6">₹{plan.totalCost.toLocaleString()}</div>

                    <div className="space-y-3 text-sm">
                      <div className="flex items-center gap-2">
                        <Plane size={16} />
                        <span>{plan.flights.length} Flight option{plan.flights.length > 1 ? 's' : ''}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Hotel size={16} />
                        <span>{plan.hotels.length} Hotel option{plan.hotels.length > 1 ? 's' : ''}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin size={16} />
                        <span>{plan.places.length} Place{plan.places.length > 1 ? 's' : ''} to visit</span>
                      </div>
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="space-y-3 mb-4">
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-600">Transport</span>
                        <span className="font-semibold text-gray-900">₹{Math.round(plan.breakdown.transport).toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-600">Accommodation</span>
                        <span className="font-semibold text-gray-900">₹{Math.round(plan.breakdown.accommodation).toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-600">Activities</span>
                        <span className="font-semibold text-gray-900">₹{Math.round(plan.breakdown.activities).toLocaleString()}</span>
                      </div>
                      <div className="border-t pt-3 flex justify-between items-center">
                        <span className="text-sm font-medium text-gray-700">Remaining</span>
                        <span className="font-bold text-orange-600">₹{Math.round(plan.breakdown.remaining).toLocaleString()}</span>
                      </div>
                    </div>

                    {selectedPlan === plan.id && (
                      <div className="bg-orange-50 rounded-lg p-4 space-y-2">
                        <PlanSection
                          title="Flights"
                          icon={<Plane size={18} />}
                          items={plan.flights}
                          isExpanded={expandedSections[`${plan.id}-flights`]}
                          onToggle={() => toggleSection(`${plan.id}-flights`)}
                          renderItem={(flight, idx) => (
                            <div key={idx} className="text-sm">
                              <p className="font-medium">{flight.airline} ({flight.stops} stop{flight.stops > 1 ? 's' : ''})</p>
                              <p className="text-xs text-gray-600">{flight.departure} - {flight.arrival}</p>
                              <p className="text-xs text-gray-600">{flight.duration} | {flight.seats} seats available</p>
                              <p className="font-semibold text-orange-600">₹{flight.price}</p>
                            </div>
                          )}
                        />

                        <PlanSection
                          title="Hotels"
                          icon={<Hotel size={18} />}
                          items={plan.hotels}
                          isExpanded={expandedSections[`${plan.id}-hotels`]}
                          onToggle={() => toggleSection(`${plan.id}-hotels`)}
                          renderItem={(hotel, idx) => (
                            <div key={idx} className="text-sm">
                              <p className="font-medium">{hotel.name}</p>
                              <p className="text-xs text-gray-600">⭐ {hotel.rating} ({hotel.reviews} reviews)</p>
                              <p className="text-xs text-gray-600">{hotel.distance}</p>
                              <div className="flex flex-wrap gap-1 mt-1">
                                {hotel.amenities.slice(0, 3).map((am, i) => (
                                  <span key={i} className="text-xs bg-white px-2 py-0.5 rounded">
                                    {am}
                                  </span>
                                ))}
                              </div>
                              <p className="font-semibold text-orange-600 mt-1">₹{hotel.pricePerNight}/night</p>
                            </div>
                          )}
                        />

                        <PlanSection
                          title="Places to Visit"
                          icon={<MapPin size={18} />}
                          items={plan.places}
                          isExpanded={expandedSections[`${plan.id}-places`]}
                          onToggle={() => toggleSection(`${plan.id}-places`)}
                          renderItem={(place, idx) => (
                            <div key={idx} className="text-sm">
                              <p className="font-medium">{place.name}</p>
                              <p className="text-xs text-gray-600">{place.type} • {place.distance}km away</p>
                              <p className="text-xs text-gray-600">{place.duration}</p>
                              <p className="text-xs text-gray-600">⭐ {place.rating} • ₹{place.estimatedCost}</p>
                            </div>
                          )}
                        />
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {selectedPlan && (
          <div className="p-6 border-t border-gray-200 flex gap-3">
            <button
              onClick={onClose}
              className="flex-1 px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-medium"
            >
              Cancel
            </button>
            <button
              onClick={() => {
                onClose();
                alert(`${plans.find(p => p.id === selectedPlan)?.title} selected and saved!`);
              }}
              className="flex-1 px-6 py-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-lg hover:from-orange-600 hover:to-orange-700 transition-all font-medium"
            >
              Book This Plan
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

function PlanSection({
  title,
  icon,
  items,
  isExpanded,
  onToggle,
  renderItem
}: {
  title: string;
  icon: React.ReactNode;
  items: any[];
  isExpanded: boolean;
  onToggle: () => void;
  renderItem: (item: any, idx: number) => React.ReactNode;
}) {
  return (
    <div className="border border-orange-200 rounded-lg overflow-hidden">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between p-3 bg-orange-100 hover:bg-orange-200 transition-colors"
      >
        <div className="flex items-center gap-2 text-orange-700 font-medium">
          {icon}
          {title} ({items.length})
        </div>
        <ChevronDown size={18} className={`transition-transform ${isExpanded ? 'rotate-180' : ''}`} />
      </button>
      {isExpanded && (
        <div className="p-3 space-y-3 bg-white">
          {items.map((item, idx) => (
            <div key={idx} className="pb-3 border-b last:border-b-0 last:pb-0">
              {renderItem(item, idx)}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
