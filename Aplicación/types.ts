
export enum MembershipTier {
  BASIC = 'BASIC',
  PRO = 'PRO',
  ELITE = 'ELITE'
}

export interface UserProfile {
  name: string;
  email: string;
  age: number;
  goal: string;
  address: string;
  postalCode: string;
  medicalInfo?: string;
  paymentMethod: string;
  tier: MembershipTier;
}

export interface GymClass {
  id: string;
  name: string;
  instructor: string;
  time: string;
  category: 'HIIT' | 'Yoga' | 'Weights' | 'Boxing';
}
