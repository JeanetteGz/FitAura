import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { Colors, Spacing } from '../constants/Colors';

export default function DashboardScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Good morning! 👋</Text>
        <Text style={styles.subtitle}>Ready to crush your goals today?</Text>
        
        {/* AI Insights Section - We'll build this next */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>AI Coach Insights</Text>
          <View style={styles.placeholder}>
            <Text style={styles.placeholderText}>AI insights will appear here</Text>
          </View>
        </View>

        {/* Quick Stats - We'll build this next */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Today's Progress</Text>
          <View style={styles.placeholder}>
            <Text style={styles.placeholderText}>Quick stats will appear here</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.dark.background,
  },
  content: {
    padding: Spacing.md,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: Colors.text.primary,
    marginBottom: Spacing.xs,
  },
  subtitle: {
    fontSize: 16,
    color: Colors.text.secondary,
    marginBottom: Spacing.xl,
  },
  section: {
    marginBottom: Spacing.lg,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: Colors.text.primary,
    marginBottom: Spacing.md,
  },
  placeholder: {
    backgroundColor: Colors.dark.surface,
    borderRadius: 16,
    padding: Spacing.lg,
    borderWidth: 1,
    borderColor: Colors.dark.border,
  },
  placeholderText: {
    color: Colors.text.muted,
    textAlign: 'center',
    fontSize: 14,
  },
});
