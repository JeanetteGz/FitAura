export interface Food {
  id: string;
  name: string;
  brand?: string;
  barcode?: string;
  calories_per_100g: number;
  protein_per_100g: number;
  carbs_per_100g: number;
  fat_per_100g: number;
  fiber_per_100g?: number;
  sugar_per_100g?: number;
}

export interface MealEntry {
  id: string;
  user_id: string;
  food_id: string;
  food: Food;
  date: string;
  meal_type: 'breakfast' | 'lunch' | 'dinner' | 'snack' | 'pre_workout' | 'post_workout';
  quantity: number; // grams
  calories: number;
  protein: number;
  carbs: number;
  fat: number;
  created_at: string;
}