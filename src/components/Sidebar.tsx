import { Home, Calendar, Compass, Users } from 'lucide-react';

interface SidebarProps {
  onNewTrip: () => void;
}

export function Sidebar({ onNewTrip }: SidebarProps) {
  return (
    <aside className="w-64 bg-white border-r border-gray-200 flex flex-col">
      <div className="p-6 border-b border-gray-200">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-orange-400 to-orange-500 flex items-center justify-center text-white font-semibold">
            CP
          </div>
          <div>
            <h3 className="font-semibold text-gray-900">Cecilia Puni</h3>
            <p className="text-sm text-gray-500">Part-time Traveller</p>
          </div>
        </div>

        <button
          onClick={onNewTrip}
          className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white rounded-full py-3 px-4 font-medium transition-all shadow-md hover:shadow-lg"
        >
          + New Trip
        </button>
      </div>

      <div className="flex-1 p-4">
        <div className="mb-6">
          <h4 className="text-xs font-semibold text-gray-400 uppercase mb-3 px-3">Trips</h4>
          <div className="space-y-1">
            <TripItem flag="🇮🇳" name="Jaipur" duration="5 Days, 24 Dec 2024" />
            <TripItem flag="🇮🇳" name="Goa" duration="7 Days, 1 Jan 2025" />
            <TripItem flag="🇮🇳" name="Kerala" duration="8 Days, 4 Mar 2025" />
            <TripItem flag="🇮🇳" name="Manali" duration="6 Days, 19 Jul 2025" />
          </div>
        </div>

        <div>
          <h4 className="text-xs font-semibold text-gray-400 uppercase mb-3 px-3">General</h4>
          <nav className="space-y-1">
            <NavItem icon={<Home size={20} />} label="Dashboard" active />
            <NavItem icon={<Calendar size={20} />} label="Itinerary" badge="NEW!" />
            <NavItem icon={<Compass size={20} />} label="Explore" />
            <NavItem icon={<Users size={20} />} label="Friends" />
          </nav>
        </div>
      </div>
    </aside>
  );
}

function TripItem({ flag, name, duration }: { flag: string; name: string; duration: string }) {
  return (
    <div className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors">
      <span className="text-2xl">{flag}</span>
      <div>
        <p className="text-sm font-medium text-gray-900">{name}</p>
        <p className="text-xs text-gray-500">{duration}</p>
      </div>
    </div>
  );
}

function NavItem({ icon, label, active = false, badge }: { icon: React.ReactNode; label: string; active?: boolean; badge?: string }) {
  return (
    <a
      href="#"
      className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-colors ${
        active ? 'bg-gray-100 text-gray-900' : 'text-gray-600 hover:bg-gray-50'
      }`}
    >
      {icon}
      <span className="font-medium flex-1">{label}</span>
      {badge && (
        <span className="bg-orange-500 text-white text-xs px-2 py-0.5 rounded-full font-semibold">
          {badge}
        </span>
      )}
    </a>
  );
}
