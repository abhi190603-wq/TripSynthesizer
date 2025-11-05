import { useState } from 'react';
import { Sidebar } from './components/Sidebar';
import { Header } from './components/Header';
import { UpcomingTrips } from './components/UpcomingTrips';
import { FriendsLocation } from './components/FriendsLocation';
import { DiscoverSection } from './components/DiscoverSection';
import { TripModal } from './components/TripModal';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50 flex">
      <Sidebar onNewTrip={() => setIsModalOpen(true)} />

      <div className="flex-1 overflow-auto">
        <Header />

        <main className="max-w-7xl mx-auto px-6 py-8 space-y-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <UpcomingTrips />
            <FriendsLocation />
          </div>

          <DiscoverSection />
        </main>
      </div>

      <TripModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}

export default App;
