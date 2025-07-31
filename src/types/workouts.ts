export interface Exercise {
  id: string;
  name: string;
  category: 'strength' | 'cardio' | 'flexibility' | 'sports';
  muscle_groups: string[];
  equipment?: string[];
  instructions?: string;
}

export interface WorkoutSet {
  id: string;
  workout_exercise_id: string;
  set_number: number;
  reps?: number;
  weight?: number; // kg
  duration?: number; // seconds
  distance?: number; // meters
  rest_time?: number; // seconds
}

export interface WorkoutExercise {
  id: string;
  workout_id: string;
  exercise_id: string;
  exercise: Exercise;
  sets: WorkoutSet[];
  notes?: string;
  order: number;
}

export interface Workout {
  id: string;
  user_id: string;
  name: string;
  date: string;
  duration: number; // minutes
  exercises: WorkoutExercise[];
  notes?: string;
  created_at: string;
}
