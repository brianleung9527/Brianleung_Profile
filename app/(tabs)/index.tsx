import { StyleSheet, ScrollView, Text, View } from 'react-native';
import { ThemedView } from '@/components/themed-view';

export default function HomeScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Brian Leung</Text>
        <Text style={styles.tagline}>Software developer • React enthusiast • Problem solver</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>About Me</Text>
        <Text style={styles.text}>
          Hi — I'm Brian. I build delightful mobile and web applications with React, React Native, and Expo. I enjoy learning new technologies and solving complex problems.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Projects</Text>
        <Text style={styles.projectItem}>
          <Text style={styles.projectTitle}>SnookerBill</Text>
          {'\n'}A React Native app for tracking snooker games and scores.
        </Text>
        <Text style={styles.projectItem}>
          <Text style={styles.projectTitle}>Test App</Text>
          {'\n'}Expo testing ground for new features and components.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Skills</Text>
        <Text style={styles.text}>
          React • React Native • Expo • TypeScript • JavaScript • Node.js • Firebase • Git
        </Text>
      </View>

      <Text style={styles.footer}>© {new Date().getFullYear()} Brian Leung</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7f7fb',
    paddingHorizontal: 16,
  },
  header: {
    backgroundColor: '#0f62fe',
    paddingVertical: 24,
    paddingHorizontal: 16,
    borderRadius: 12,
    marginTop: 16,
    marginBottom: 16,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 4,
  },
  tagline: {
    fontSize: 14,
    color: 'rgba(255, 255, 255, 0.95)',
  },
  section: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 12,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOpacity: 0.06,
    shadowRadius: 6,
    elevation: 2,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 12,
    color: '#0b1a2b',
  },
  text: {
    fontSize: 15,
    lineHeight: 24,
    color: '#0b1a2b',
  },
  projectItem: {
    fontSize: 15,
    lineHeight: 22,
    color: '#0b1a2b',
    marginBottom: 12,
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  projectTitle: {
    fontWeight: '600',
    fontSize: 16,
  },
  footer: {
    textAlign: 'center',
    opacity: 0.7,
    paddingVertical: 16,
    color: '#0b1a2b',
    fontSize: 12,
    marginBottom: 20,
  },
});
