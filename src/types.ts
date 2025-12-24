export interface PigBreed {
  id: string;
  name: string;
  nameVn: string;
  image: string;
  heatTolerance: number; // 1-3 scale
  diseaseResistance: number; // 1-3 scale
  growthRate: number; // 1-3 scale
  cost: number; // 1-3 scale (1 = low, 3 = high)
  suitableFor: 'family' | 'medium' | 'farm' | 'breeder';
  fertility: number; // Khả năng sinh sản
  description: string;
  heatToleranceText: string;
  diseaseResistanceText: string;
  growthRateText: string;
  costText: string;
  suitableForText: string;
  fertilityText: string;
}

export interface UserConditions {
  climate: 'hot' | 'cold' | 'temperate';
  facility: 'family' | 'medium' | 'farm';
  budget: 'low' | 'medium' | 'high';
  priority: 'easy' | 'fast' | 'longterm';
}
