import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Colors, Spacing } from '../constants/Colors';

export default function NutritionScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Nutrition Tracking</Text>
      <Text style={styles.subtitle}>Log your meals and track macros</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.dark.background,
    padding: Spacing.md,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: Colors.text.primary,
    marginBottom: Spacing.sm,
  },
  subtitle: {
    fontSize: 16,
    color: Colors.text.secondary,
  },
});
