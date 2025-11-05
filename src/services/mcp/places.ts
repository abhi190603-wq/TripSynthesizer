export interface NearbyPlace {
  id: string;
  name: string;
  type: string;
  distance: number;
  description: string;
  image: string;
  estimatedCost: number;
  duration: string;
  rating: number;
}

const placesByDestination: Record<string, NearbyPlace[]> = {
  'Jaipur': [
    {
      id: 'place-1',
      name: 'City Palace',
      type: 'Historical Site',
      distance: 1.2,
      description: 'A stunning blend of Rajasthani and Mughal architecture',
      image: 'https://images.pexels.com/photos/3737377/pexels-photo-3737377.jpeg?auto=compress&cs=tinysrgb&w=400',
      estimatedCost: 300,
      duration: '2-3 hours',
      rating: 4.7
    },
    {
      id: 'place-2',
      name: 'Hawa Mahal (Palace of Winds)',
      type: 'Monument',
      distance: 0.8,
      description: 'The iconic five-story pink structure with 953 tiny windows',
      image: 'https://images.pexels.com/photos/3737375/pexels-photo-3737375.jpeg?auto=compress&cs=tinysrgb&w=400',
      estimatedCost: 200,
      duration: '1-2 hours',
      rating: 4.8
    },
    {
      id: 'place-3',
      name: 'Jantar Mantar',
      type: 'Historical Site',
      distance: 2.1,
      description: 'UNESCO World Heritage Site - ancient astronomical observation instrument',
      image: 'https://images.pexels.com/photos/3737376/pexels-photo-3737376.jpeg?auto=compress&cs=tinysrgb&w=400',
      estimatedCost: 250,
      duration: '1.5-2 hours',
      rating: 4.6
    },
    {
      id: 'place-4',
      name: 'Albert Hall Museum',
      type: 'Museum',
      distance: 3.5,
      description: 'Central Museum with artifacts, sculptures, and paintings',
      image: 'https://images.pexels.com/photos/2147491/pexels-photo-2147491.jpeg?auto=compress&cs=tinysrgb&w=400',
      estimatedCost: 350,
      duration: '2-3 hours',
      rating: 4.4
    },
    {
      id: 'place-5',
      name: 'Nahargarh Fort',
      type: 'Fort',
      distance: 8.2,
      description: 'Historic fort offering panoramic views of the city',
      image: 'https://images.pexels.com/photos/3737374/pexels-photo-3737374.jpeg?auto=compress&cs=tinysrgb&w=400',
      estimatedCost: 200,
      duration: '2-3 hours',
      rating: 4.5
    }
  ],
  'Goa': [
    {
      id: 'place-1',
      name: 'Baga Beach',
      type: 'Beach',
      distance: 0.5,
      description: 'Popular beach known for water sports and vibrant nightlife',
      image: 'https://images.pexels.com/photos/2398220/pexels-photo-2398220.jpeg?auto=compress&cs=tinysrgb&w=400',
      estimatedCost: 0,
      duration: '4-5 hours',
      rating: 4.6
    },
    {
      id: 'place-2',
      name: 'Fort Aguada',
      type: 'Historical Fort',
      distance: 5.3,
      description: '17th century Portuguese fort with lighthouse and beautiful views',
      image: 'https://images.pexels.com/photos/1619250/pexels-photo-1619250.jpeg?auto=compress&cs=tinysrgb&w=400',
      estimatedCost: 150,
      duration: '2-3 hours',
      rating: 4.5
    },
    {
      id: 'place-3',
      name: 'Basilica of Bom Jesus',
      type: 'Church',
      distance: 10.2,
      description: 'UNESCO World Heritage Site - ancient church with baroque architecture',
      image: 'https://images.pexels.com/photos/2398221/pexels-photo-2398221.jpeg?auto=compress&cs=tinysrgb&w=400',
      estimatedCost: 100,
      duration: '1-2 hours',
      rating: 4.7
    },
    {
      id: 'place-4',
      name: 'Spice Plantation Tour',
      type: 'Agro-tourism',
      distance: 25,
      description: 'Learn about spice cultivation and enjoy traditional Goan food',
      image: 'https://images.pexels.com/photos/1633578/pexels-photo-1633578.jpeg?auto=compress&cs=tinysrgb&w=400',
      estimatedCost: 800,
      duration: '3-4 hours',
      rating: 4.4
    }
  ],
  'Kerala': [
    {
      id: 'place-1',
      name: 'Backwaters Houseboat Cruise',
      type: 'Water Activity',
      distance: 2,
      description: 'Experience the serene beauty of Kerala backwaters on a traditional houseboat',
      image: 'https://images.pexels.com/photos/2398222/pexels-photo-2398222.jpeg?auto=compress&cs=tinysrgb&w=400',
      estimatedCost: 2000,
      duration: '6-8 hours',
      rating: 4.8
    },
    {
      id: 'place-2',
      name: 'Munnar Tea Gardens',
      type: 'Nature',
      distance: 120,
      description: 'Scenic hill station with rolling tea plantations and cool climate',
      image: 'https://images.pexels.com/photos/1761279/pexels-photo-1761279.jpeg?auto=compress&cs=tinysrgb&w=400',
      estimatedCost: 1500,
      duration: 'Full day',
      rating: 4.7
    },
    {
      id: 'place-3',
      name: 'Fort Kochi',
      type: 'Historical Area',
      distance: 15,
      description: 'Colonial architecture, Chinese fishing nets, and spice markets',
      image: 'https://images.pexels.com/photos/2398223/pexels-photo-2398223.jpeg?auto=compress&cs=tinysrgb&w=400',
      estimatedCost: 500,
      duration: '3-4 hours',
      rating: 4.6
    }
  ],
  'Manali': [
    {
      id: 'place-1',
      name: 'Rohtang Pass',
      type: 'Mountain Pass',
      distance: 51,
      description: 'Scenic mountain pass offering panoramic views of Himalayan peaks',
      image: 'https://images.pexels.com/photos/1500496/pexels-photo-1500496.jpeg?auto=compress&cs=tinysrgb&w=400',
      estimatedCost: 800,
      duration: '4-5 hours',
      rating: 4.6
    },
    {
      id: 'place-2',
      name: 'Solang Valley',
      type: 'Adventure',
      distance: 14,
      description: 'Adventure sports hub offering paragliding, skiing, and horseback riding',
      image: 'https://images.pexels.com/photos/1619251/pexels-photo-1619251.jpeg?auto=compress&cs=tinysrgb&w=400',
      estimatedCost: 2000,
      duration: '4-5 hours',
      rating: 4.5
    },
    {
      id: 'place-3',
      name: 'Hadimba Temple',
      type: 'Religious Site',
      distance: 2.5,
      description: 'Ancient temple dedicated to goddess Hadimba, built in traditional Himalayan architecture',
      image: 'https://images.pexels.com/photos/2398224/pexels-photo-2398224.jpeg?auto=compress&cs=tinysrgb&w=400',
      estimatedCost: 0,
      duration: '1-2 hours',
      rating: 4.4
    }
  ]
};

export async function getNearbyPlaces(
  destination: string,
  budget: number,
  days: number
): Promise<NearbyPlace[]> {
  await new Promise(resolve => setTimeout(resolve, 500));

  const places = placesByDestination[destination] || [];
  const budgetPerDay = budget / days;

  return places.filter(place => place.estimatedCost <= budgetPerDay * 0.3)
    .sort((a, b) => b.rating - a.rating);
}
