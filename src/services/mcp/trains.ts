export interface TrainOption {
  id: string;
  trainName: string;
  trainNumber: string;
  departure: string;
  arrival: string;
  duration: string;
  classes: TrainClass[];
  seats: number;
}

export interface TrainClass {
  class: string;
  price: number;
  available: number;
}

const trainNames = [
  'Rajdhani Express',
  'Shatabdi Express',
  'Garib Rath',
  'Local Express',
  'Premium Express',
  'Swift Express'
];

export async function searchTrains(
  from: string,
  to: string,
  departDate: string,
  travelers: number,
  budget: number
): Promise<TrainOption[]> {
  await new Promise(resolve => setTimeout(resolve, 500));

  const costPerPerson = budget / travelers;
  const trains: TrainOption[] = [];

  const trainClasses = [
    { class: '1AC', basePriceRange: [3000, 8000] },
    { class: '2AC', basePriceRange: [1500, 4000] },
    { class: '3AC', basePriceRange: [800, 2500] },
    { class: 'SL', basePriceRange: [400, 1500] }
  ];

  for (let i = 0; i < 3; i++) {
    const classes: TrainClass[] = trainClasses.map(tc => {
      const [min, max] = tc.basePriceRange;
      const basePrice = min + Math.random() * (max - min);
      const price = Math.min(basePrice, costPerPerson);

      return {
        class: tc.class,
        price: Math.round(price),
        available: Math.floor(5 + Math.random() * 30)
      };
    });

    trains.push({
      id: `train-${i}`,
      trainName: trainNames[Math.floor(Math.random() * trainNames.length)],
      trainNumber: `${10000 + Math.floor(Math.random() * 90000)}`,
      departure: `${Math.floor(6 + Math.random() * 14)}:${Math.floor(Math.random() * 60).toString().padStart(2, '0')}`,
      arrival: `${Math.floor(8 + Math.random() * 14)}:${Math.floor(Math.random() * 60).toString().padStart(2, '0')}`,
      duration: `${Math.floor(4 + Math.random() * 24)}h ${Math.floor(Math.random() * 60)}m`,
      classes,
      seats: Math.floor(50 + Math.random() * 200)
    });
  }

  return trains;
}
