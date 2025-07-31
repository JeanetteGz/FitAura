import { MD3DarkTheme, MD3LightTheme } from 'react-native-paper';

// Custom color palette for FitAura
export const Colors = {
  // Primary brand colors
  primary: '#6366f1',
  primaryLight: '#818cf8',
  primaryDark: '#4f46e5',
  
  // Secondary colors
  secondary: '#ec4899',
  secondaryLight: '#f472b6',
  secondaryDark: '#db2777',
  
  // Accent colors for macros
  protein: '#10b981', // Green for protein
  carbs: '#f59e0b',   // Orange for carbs
  fat: '#8b5cf6',     // Purple for fat
  
  // Background colors
  dark: {
    background: '#0f0f0f',
    surface: '#1a1a1a',
    surfaceVariant: '#2d2d2d',
    card: '#1f1f1f',
    border: '#374151',
  },
  
  light: {
    background: '#f8fafc',
    surface: '#ffffff',
    surfaceVariant: '#f1f5f9',
    card: '#ffffff',
    border: '#e2e8f0',
  },
  
  // Text colors
  text: {
    primary: '#ffffff',
    secondary: '#d1d5db',
    muted: '#9ca3af',
    light: '#1f2937',
    lightSecondary: '#6b7280',
    lightMuted: '#9ca3af',
  },
  
  // Status colors
  success: '#10b981',
  warning: '#f59e0b',
  error: '#ef4444',
  info: '#3b82f6',
  
  // Gradient colors
  gradients: {
    primary: ['#6366f1', '#8b5cf6'],
    secondary: ['#ec4899', '#f59e0b'],
    success: ['#10b981', '#06b6d4'],
    card: ['rgba(255,255,255,0.05)', 'rgba(255,255,255,0.02)'],
  },
};

// Dark theme configuration
export const theme = {
  ...MD3DarkTheme,
  colors: {
    ...MD3DarkTheme.colors,
    primary: Colors.primary,
    primaryContainer: Colors.primaryDark,
    secondary: Colors.secondary,
    secondaryContainer: Colors.secondaryDark,
    background: Colors.dark.background,
    surface: Colors.dark.surface,
    surfaceVariant: Colors.dark.surfaceVariant,
    onSurface: Colors.text.primary,
    onSurfaceVariant: Colors.text.secondary,
    outline: Colors.dark.border,
    error: Colors.error,
    onError: '#ffffff',
  },
  roundness: 16,
};

// Light theme configuration (for future toggle)
export const lightTheme = {
  ...MD3LightTheme,
  colors: {
    ...MD3LightTheme.colors,
    primary: Colors.primary,
    primaryContainer: Colors.primaryLight,
    secondary: Colors.secondary,
    secondaryContainer: Colors.secondaryLight,
    background: Colors.light.background,
    surface: Colors.light.surface,
    surfaceVariant: Colors.light.surfaceVariant,
    onSurface: Colors.text.light,
    onSurfaceVariant: Colors.text.lightSecondary,
    outline: Colors.light.border,
    error: Colors.error,
    onError: '#ffffff',
  },
  roundness: 16,
};

// Glassmorphism styles
export const glassStyle = {
  backgroundColor: 'rgba(255, 255, 255, 0.08)',
  borderRadius: 16,
  borderWidth: 1,
  borderColor: 'rgba(255, 255, 255, 0.12)',
  shadowColor: '#000',
  shadowOffset: {
    width: 0,
    height: 8,
  },
  shadowOpacity: 0.3,
  shadowRadius: 20,
  elevation: 8,
};

// Common spacing values
export const Spacing = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
  xxl: 48,
};

// Common font sizes
export const FontSizes = {
  xs: 12,
  sm: 14,
  md: 16,
  lg: 18,
  xl: 20,
  xxl: 24,
  title: 28,
  heading: 32,
};