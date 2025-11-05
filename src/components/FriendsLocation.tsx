export function FriendsLocation() {
  const friends = [
    { name: 'Shelly A.', location: 'Goa', avatar: '👤', position: { top: '45%', right: '25%' } },
    { name: 'Edgar P.', location: 'Kerala', avatar: '👤', position: { top: '60%', right: '30%' } },
    { name: 'Moris A.', location: 'Rajasthan', avatar: '👤', position: { top: '35%', right: '35%' } }
  ];

  return (
    <section>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Friends Location</h2>
          <p className="text-gray-600 mt-1">Check on your friend live location</p>
        </div>
        <button className="text-orange-500 hover:text-orange-600 font-medium">
          Expand
        </button>
      </div>

      <div className="bg-white rounded-2xl shadow-sm p-6 h-[400px] relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-50 to-blue-50 opacity-30"></div>

        <div className="relative h-full">
          <svg className="absolute inset-0 w-full h-full opacity-10" viewBox="0 0 100 100">
            <path d="M20,30 Q30,20 40,30 T60,30 Q70,35 75,45 T80,70 Q75,80 65,75 T45,70 Q35,65 30,55 T20,30"
                  fill="none" stroke="currentColor" strokeWidth="0.5" className="text-gray-400"/>
          </svg>

          {friends.map((friend, i) => (
            <div
              key={i}
              className="absolute"
              style={friend.position}
            >
              <div className="relative">
                <div className="w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center text-2xl border-2 border-orange-500">
                  {friend.avatar}
                </div>
                <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap bg-white px-3 py-1 rounded-full shadow-sm text-sm">
                  <p className="font-semibold text-gray-900">{friend.name}</p>
                  <p className="text-xs text-gray-600">{friend.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
