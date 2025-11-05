import { Search, Bell } from 'lucide-react';

export function Header() {
  return (
    <header className="bg-white border-b border-gray-200 px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 flex items-center gap-2">
            Good Morning, Cecil 👋
          </h1>
          <p className="text-gray-600 mt-1">Plan your itinerary with us</p>
        </div>

        <div className="flex items-center gap-4">
          <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
            <Search size={20} className="text-gray-600" />
          </button>
          <button className="p-2 hover:bg-gray-100 rounded-full transition-colors relative">
            <Bell size={20} className="text-gray-600" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-orange-500 rounded-full"></span>
          </button>
        </div>
      </div>
    </header>
  );
}
