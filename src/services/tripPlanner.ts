import { searchFlights, FlightOption } from './mcp/flights';
import { searchHotels, HotelOption } from './mcp/hotels';
import { searchTrains, TrainOption } from './mcp/trains';
import { getNearbyPlaces, NearbyPlace } from './mcp/places';

export interface TripPlanRequest {
  destination: string;
  startDate: string;
  endDate: string;
  budget: number;
  travelers: number;
  accommodation: string;
  transport: string;
}

export interface TripPlan {
  id: string;
  title: string;
  totalCost: number;
  flights: FlightOption[];
  hotels: HotelOption[];
  trains: TrainOption[];
  places: NearbyPlace[];
  breakdown: {
    transport: number;
    accommodation: number;
    activities: number;
    remaining: number;
  };
}

function calculateDays(startDate: string, endDate: string): number {
  const start = new Date(startDate);
  const end = new Date(endDate);
  return Math.ceil((end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24));
}

export async function generateTripPlans(
  request: TripPlanRequest
): Promise<TripPlan[]> {
  const days = calculateDays(request.startDate, request.endDate);

  const budgetBreakdown = {
    transport: request.budget * 0.25,
    accommodation: request.budget * 0.40,
    activities: request.budget * 0.25,
    remaining: request.budget * 0.10
  };

  const plans: TripPlan[] = [];

  try {
    let flights: FlightOption[] = [];
    let trains: TrainOption[] = [];
    let hotels: HotelOption[] = [];
    let places: NearbyPlace[] = [];

    if (request.transport === 'flight') {
      flights = await searchFlights(
        'Delhi',
        request.destination,
        request.startDate,
        request.travelers,
        budgetBreakdown.transport
      );
    } else if (request.transport === 'train') {
      trains = await searchTrains(
        'Delhi',
        request.destination,
        request.startDate,
        request.travelers,
        budgetBreakdown.transport
      );
    }

    hotels = await searchHotels(
      request.destination,
      request.startDate,
      request.endDate,
      request.travelers,
      days,
      budgetBreakdown.accommodation
    );

    places = await getNearbyPlaces(
      request.destination,
      budgetBreakdown.activities,
      days
    );

    plans.push({
      id: 'plan-budget',
      title: 'Budget Plan',
      totalCost: request.budget,
      flights: flights.slice(2),
      hotels: hotels.slice(2),
      trains: trains.slice(0, 1),
      places: places.slice(0, 3),
      breakdown: {
        ...budgetBreakdown,
        remaining: budgetBreakdown.remaining
      }
    });

    plans.push({
      id: 'plan-comfort',
      title: 'Comfort Plan',
      totalCost: request.budget,
      flights: flights.slice(1),
      hotels: hotels.slice(1),
      trains: trains.slice(0, 2),
      places: places.slice(0, 4),
      breakdown: {
        ...budgetBreakdown,
        remaining: budgetBreakdown.remaining
      }
    });

    plans.push({
      id: 'plan-premium',
      title: 'Premium Plan',
      totalCost: request.budget,
      flights: flights.slice(0),
      hotels: hotels.slice(0),
      trains: trains.slice(0),
      places: places.slice(0),
      breakdown: {
        ...budgetBreakdown,
        remaining: budgetBreakdown.remaining
      }
    });

    return plans;
  } catch (error) {
    console.error('Error generating trip plans:', error);
    return [];
  }
}
