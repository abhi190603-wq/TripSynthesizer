export interface FlightOption {
  id: string;
  airline: string;
  departure: string;
  arrival: string;
  duration: string;
  price: number;
  seats: number;
  stops: number;
}

const airlines = ['IndiGo', 'Air India', 'Vistara', 'SpiceJet', 'GoAir'];

const indianCities = {
  'Jaipur': 'JAI',
  'Goa': 'GOI',
  'Kerala': 'COK',
  'Manali': 'KUL',
  'Agra': 'AGR',
  'Delhi': 'DEL',
  'Mumbai': 'BOM',
  'Bangalore': 'BLR'
};

export async function searchFlights(
  from: string,
  to: string,
  departDate: string,
  travelers: number,
  budget: number
): Promise<FlightOption[]> {
  await new Promise(resolve => setTimeout(resolve, 500));

  const costPerPerson = budget / (travelers * 2);
  const flights: FlightOption[] = [];

  for (let i = 0; i < 3; i++) {
    const basePrice = 3000 + Math.random() * 8000;
    const price = Math.min(basePrice, costPerPerson);

    flights.push({
      id: `flight-${i}`,
      airline: airlines[Math.floor(Math.random() * airlines.length)],
      departure: `${Math.floor(6 + Math.random() * 14)}:${Math.floor(Math.random() * 60).toString().padStart(2, '0')}`,
      arrival: `${Math.floor(8 + Math.random() * 14)}:${Math.floor(Math.random() * 60).toString().padStart(2, '0')}`,
      duration: `${Math.floor(1 + Math.random() * 4)}h ${Math.floor(Math.random() * 60)}m`,
      price: Math.round(price),
      seats: Math.floor(5 + Math.random() * 20),
      stops: Math.floor(Math.random() * 2)
    });
  }

  return flights.sort((a, b) => a.price - b.price);
}
