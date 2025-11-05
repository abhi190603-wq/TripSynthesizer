export interface HotelOption {
  id: string;
  name: string;
  rating: number;
  reviews: number;
  pricePerNight: number;
  amenities: string[];
  image: string;
  location: string;
  distance: string;
}

const hotelNames = [
  'The Luxury Palace',
  'Heritage Plaza Resort',
  'Hillside Retreat',
  'Royal Garden Hotel',
  'Sunset View Inn',
  'Modern City Hotel',
  'Riverside Resort',
  'Valley Lodge'
];

const amenities = [
  'WiFi',
  'Pool',
  'Gym',
  'Restaurant',
  'Spa',
  'Parking',
  'AC',
  'Hot Water',
  'Room Service'
];

export async function searchHotels(
  destination: string,
  checkIn: string,
  checkOut: string,
  guests: number,
  nights: number,
  budget: number
): Promise<HotelOption[]> {
  await new Promise(resolve => setTimeout(resolve, 500));

  const budgetPerNight = budget / nights;
  const hotels: HotelOption[] = [];

  for (let i = 0; i < 4; i++) {
    const basePrice = 2000 + Math.random() * 12000;
    const price = Math.min(basePrice, budgetPerNight);
    const randomAmenities = amenities
      .sort(() => Math.random() - 0.5)
      .slice(0, Math.floor(3 + Math.random() * 4));

    hotels.push({
      id: `hotel-${i}`,
      name: hotelNames[Math.floor(Math.random() * hotelNames.length)],
      rating: 3.5 + Math.random() * 1.5,
      reviews: Math.floor(100 + Math.random() * 900),
      pricePerNight: Math.round(price),
      amenities: randomAmenities,
      image: `https://images.pexels.com/photos/${1000000 + Math.floor(Math.random() * 100000)}/pexels-photo-${1000000 + Math.floor(Math.random() * 100000)}.jpeg?auto=compress&cs=tinysrgb&w=400`,
      location: destination,
      distance: `${Math.floor(0.5 + Math.random() * 8)}km from center`
    });
  }

  return hotels.sort((a, b) => a.pricePerNight - b.pricePerNight);
}
