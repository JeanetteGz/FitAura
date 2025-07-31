import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Provider as PaperProvider } from 'react-native-paper';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

// Screens
import DashboardScreen from './src/screens/DashboardScreen';
import NutritionScreen from './src/screens/NutritionScreen';
import WorkoutScreen from './src/screens/WorkoutScreen';
import ProgressScreen from './src/screens/ProgressScreen';
import SettingsScreen from './src/screens/SettingsScreen';

// Theme
import { theme } from './src/constants/Colors';

// Initialize Query Client
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000, // 5 minutes
      gcTime: 10 * 60 * 1000, // 10 minutes
    },
  },
});

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <PaperProvider theme={theme}>
        <NavigationContainer>
          <StatusBar style="light" backgroundColor="#1a1a1a" />
          <Tab.Navigator
            screenOptions={({ route }) => ({
              tabBarIcon: ({ focused, color, size }) => {
                let iconName: string;

                switch (route.name) {
                  case 'Dashboard':
                    iconName = focused ? 'view-dashboard' : 'view-dashboard-outline';
                    break;
                  case 'Nutrition':
                    iconName = focused ? 'food-apple' : 'food-apple-outline';
                    break;
                  case 'Workout':
                    iconName = focused ? 'dumbbell' : 'dumbbell';
                    break;
                  case 'Progress':
                    iconName = focused ? 'chart-line' : 'chart-line';
                    break;
                  case 'Settings':
                    iconName = focused ? 'cog' : 'cog-outline';
                    break;
                  default:
                    iconName = 'circle';
                }

                return <Icon name={iconName} size={size} color={color} />;
              },
              tabBarActiveTintColor: '#6366f1',
              tabBarInactiveTintColor: '#9ca3af',
              tabBarStyle: {
                backgroundColor: '#1f1f1f',
                borderTopColor: '#374151',
                borderTopWidth: 1,
                paddingBottom: 8,
                paddingTop: 8,
                height: 70,
              },
              tabBarLabelStyle: {
                fontSize: 12,
                fontWeight: '600',
                marginTop: 4,
              },
              headerStyle: {
                backgroundColor: '#1a1a1a',
                borderBottomColor: '#374151',
                borderBottomWidth: 1,
              },
              headerTintColor: '#ffffff',
              headerTitleStyle: {
                fontWeight: 'bold',
                fontSize: 18,
              },
            })}
          >
            <Tab.Screen 
              name="Dashboard" 
              component={DashboardScreen}
              options={{
                title: 'AI Coach',
                headerTitle: 'FitAura AI Coach',
              }}
            />
            <Tab.Screen 
              name="Nutrition" 
              component={NutritionScreen}
              options={{
                title: 'Nutrition',
                headerTitle: 'Nutrition Tracking',
              }}
            />
            <Tab.Screen 
              name="Workout" 
              component={WorkoutScreen}
              options={{
                title: 'Workout',
                headerTitle: 'Workout Logging',
              }}
            />
            <Tab.Screen 
              name="Progress" 
              component={ProgressScreen}
              options={{
                title: 'Progress',
                headerTitle: 'Progress Monitoring',
              }}
            />
            <Tab.Screen 
              name="Settings" 
              component={SettingsScreen}
              options={{
                title: 'Settings',
                headerTitle: 'Settings',
              }}
            />
          </Tab.Navigator>
        </NavigationContainer>
      </PaperProvider>
    </QueryClientProvider>
  );
}
