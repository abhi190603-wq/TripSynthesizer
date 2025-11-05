import { Heart, Star } from 'lucide-react';

export function DiscoverSection() {
  const destinations = [
    {
      id: 1,
      name: 'India Gate - New Delhi',
      image: 'https://images.pexels.com/photos/1098460/pexels-photo-1098460.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'A war memorial and iconic landmark in the heart of New Delhi',
      rating: 4.7,
      reviews: 2543,
      guide: 'Ravi',
      tags: ['Historical', 'Monuments', 'Culture']
    },
    {
      id: 2,
      name: 'Gateway of India - Mumbai',
      image: 'https://images.pexels.com/photos/1007426/pexels-photo-1007426.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'An iconic arch monument built during the British Raj in Mumbai',
      rating: 4.8,
      reviews: 3892,
      guide: 'Priya',
      tags: ['Architecture', 'Waterfront', 'History']
    }
  ];

  return (
    <section>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">
            For your <span className="text-orange-500">India</span> 🇮🇳 Trip
          </h2>
          <p className="text-gray-600 mt-1">These can't be missed places</p>
        </div>
        <button className="text-orange-500 hover:text-orange-600 font-medium">
          Details
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {destinations.map(dest => (
          <div
            key={dest.id}
            className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow overflow-hidden"
          >
            <div className="flex gap-4 p-4">
              <div className="relative">
                <img
                  src={dest.image}
                  alt={dest.name}
                  className="w-32 h-32 rounded-xl object-cover"
                />
                <button className="absolute top-2 right-2 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md hover:bg-orange-50 transition-colors">
                  <Heart size={16} className="text-orange-500" />
                </button>
              </div>

              <div className="flex-1">
                <h3 className="font-semibold text-gray-900 mb-2">{dest.name}</h3>
                <p className="text-sm text-gray-600 mb-3 line-clamp-2">{dest.description}</p>

                <div className="flex items-center gap-2 mb-3">
                  <Star size={16} className="text-orange-500 fill-orange-500" />
                  <span className="font-semibold text-gray-900">{dest.rating}</span>
                  <span className="text-sm text-gray-600">({dest.reviews})</span>
                </div>

                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <span>Guide by:</span>
                  <span className="font-medium text-gray-900">👤 {dest.guide}</span>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 px-4 py-3 flex gap-2">
              {dest.tags.map(tag => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-white rounded-full text-xs font-medium text-gray-600"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
