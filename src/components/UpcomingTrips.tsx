export function UpcomingTrips() {
  const trips = [
    {
      id: 1,
      destination: 'Jaipur - Udaipur',
      country: 'India',
      image: 'https://images.pexels.com/photos/3581368/pexels-photo-3581368.jpeg?auto=compress&cs=tinysrgb&w=400',
      days: 12,
      daysLeft: 4,
      budget: 25000,
      travelers: ['👤', '👤']
    },
    {
      id: 2,
      destination: 'Leh - Ladakh',
      country: 'India',
      image: 'https://images.pexels.com/photos/1490915/pexels-photo-1490915.jpeg?auto=compress&cs=tinysrgb&w=400',
      days: 24,
      daysLeft: 12,
      budget: 45000,
      travelers: ['👤', '👤']
    }
  ];

  return (
    <section>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Upcoming Trip</h2>
          <p className="text-gray-600 mt-1">Remember your upcoming trips!</p>
        </div>
        <button className="text-orange-500 hover:text-orange-600 font-medium">
          Details
        </button>
      </div>

      <div className="space-y-4">
        {trips.map(trip => (
          <div
            key={trip.id}
            className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow overflow-hidden"
          >
            <div className="flex gap-4 p-4">
              <img
                src={trip.image}
                alt={trip.destination}
                className="w-24 h-24 rounded-xl object-cover"
              />

              <div className="flex-1">
                <h3 className="font-semibold text-gray-900 mb-1">{trip.destination}</h3>
                <p className="text-sm text-gray-600 mb-3">{trip.country}</p>

                <div className="flex items-center gap-4">
                  <div className="bg-orange-500 text-white px-4 py-2 rounded-lg text-center">
                    <div className="text-xl font-bold">{trip.days}</div>
                    <div className="text-xs">Nov</div>
                  </div>

                  <div className="bg-orange-100 text-orange-600 px-4 py-2 rounded-lg text-center">
                    <div className="text-xl font-bold">{trip.daysLeft}</div>
                    <div className="text-xs">Days</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 px-4 py-3 flex items-center justify-between">
              <div>
                <span className="text-sm text-gray-600">Budget: </span>
                <span className="font-semibold text-gray-900">₹{trip.budget.toLocaleString()}</span>
              </div>
              <div className="flex -space-x-2">
                {trip.travelers.map((traveler, i) => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-full bg-gray-200 border-2 border-white flex items-center justify-center"
                  >
                    {traveler}
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
