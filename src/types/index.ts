export interface User {
  id: string;
  email: string;
  name: string;
  age: number;
  height: number; // cm
  weight: number; // kg
  goal: 'lose_fat' | 'build_muscle' | 'recomposition' | 'maintain';
  activity_level: 'sedentary' | 'light' | 'moderate' | 'active' | 'very_active';
  created_at: string;
  updated_at: string;
}

export interface DailyStats {
  id: string;
  user_id: string;
  date: string;
  weight?: number;
  body_fat_percentage?: number;
  muscle_mass?: number;
  calories_consumed: number;
  protein: number;
  carbs: number;
  fat: number;
  water_intake: number; // ml
  sleep_hours?: number;
  created_at: string;
}

export interface AIInsight {
  id: string;
  user_id: string;
  title: string;
  message: string;
  priority: 'high' | 'medium' | 'low';
  category: 'nutrition' | 'workout' | 'recovery' | 'general';
  is_read: boolean;
  created_at: string;
}