import { StyleSheet, ScrollView, Text, View } from 'react-native';
import { ThemedView } from '@/components/themed-view';

const TechBadge = ({ label }: { label: string }) => (
  <View style={styles.badge}>
    <Text style={styles.badgeText}>{label}</Text>
  </View>
);

export default function HomeScreen() {
  const technologies = [
    'React', 'React Native', 'Expo', 'TypeScript', 'JavaScript',
    'Node.js', 'Firebase', 'Git', 'REST APIs', 'Redux'
  ];

  return (
    <ScrollView style={styles.container}>
      {/* Hero Section */}
      <View style={styles.hero}>
        <View style={styles.heroContent}>
          <Text style={styles.title}>Brian Leung</Text>
          <Text style={styles.role}>Full-Stack Mobile Developer</Text>
          <Text style={styles.subtitle}>
            Crafting high-performance, scalable applications with modern web & mobile technologies
          </Text>
        </View>
        <View style={styles.accentLine} />
      </View>

      {/* About Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>About</Text>
        <Text style={styles.text}>
          I'm a passionate developer specializing in React Native and Expo. I build robust, maintainable solutions that solve real-world problems. My focus is on clean code, performance optimization, and creating seamless user experiences across platforms.
        </Text>
      </View>

      {/* Tech Stack Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Tech Stack</Text>
        <View style={styles.badgeContainer}>
          {technologies.map((tech, idx) => (
            <TechBadge key={idx} label={tech} />
          ))}
        </View>
      </View>

      {/* Featured Projects */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Featured Projects</Text>
        
        <View style={styles.projectCard}>
          <Text style={styles.projectTitle}>SnookerBill</Text>
          <Text style={styles.projectStatus}>React Native • Expo • In Progress</Text>
          <Text style={styles.projectDescription}>
            Real-time snooker scoring and game tracking application. Features include live statistics, player rankings, and match history with intuitive UI/UX.
          </Text>
          <View style={styles.projectTechStack}>
            <Text style={styles.projectTech}>React Native</Text>
            <Text style={styles.projectTech}>Expo</Text>
            <Text style={styles.projectTech}>Firebase</Text>
          </View>
        </View>

        <View style={styles.projectCard}>
          <Text style={styles.projectTitle}>Brianleung_Profile</Text>
          <Text style={styles.projectStatus}>Expo • TypeScript • Open Source</Text>
          <Text style={styles.projectDescription}>
            Professional portfolio app showcasing projects and technical expertise. Built with file-based routing and modern React Native patterns.
          </Text>
          <View style={styles.projectTechStack}>
            <Text style={styles.projectTech}>Expo Router</Text>
            <Text style={styles.projectTech}>TypeScript</Text>
            <Text style={styles.projectTech}>React Native</Text>
          </View>
        </View>
      </View>

      {/* Experience Highlights */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Expertise</Text>
        <View style={styles.expertiseItem}>
          <Text style={styles.expertiseLabel}>📱 Mobile Development</Text>
          <Text style={styles.expertiseText}>Building cross-platform apps with React Native and Expo</Text>
        </View>
        <View style={styles.expertiseItem}>
          <Text style={styles.expertiseLabel}>⚡ Performance</Text>
          <Text style={styles.expertiseText}>Optimizing app speed, bundle size, and runtime efficiency</Text>
        </View>
        <View style={styles.expertiseItem}>
          <Text style={styles.expertiseLabel}>🏗️ Architecture</Text>
          <Text style={styles.expertiseText}>Designing scalable, maintainable application structures</Text>
        </View>
      </View>

      <Text style={styles.footer}>© {new Date().getFullYear()} Brian Leung • All rights reserved</Text>
    </ScrollView>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0a0e27',
    paddingHorizontal: 16,
  },
  hero: {
    marginTop: 24,
    marginBottom: 32,
    paddingHorizontal: 0,
  },
  heroContent: {
    marginBottom: 16,
  },
  title: {
    fontSize: 36,
    fontWeight: '700',
    color: '#ffffff',
    marginBottom: 4,
    letterSpacing: -0.5,
  },
  role: {
    fontSize: 18,
    fontWeight: '600',
    color: '#00d4ff',
    marginBottom: 12,
    letterSpacing: 0.5,
  },
  subtitle: {
    fontSize: 15,
    lineHeight: 24,
    color: '#b0b8c1',
    fontWeight: '400',
  },
  accentLine: {
    height: 3,
    width: 60,
    backgroundColor: '#00d4ff',
    borderRadius: 1.5,
    marginTop: 12,
  },
  section: {
    backgroundColor: '#151d3b',
    padding: 20,
    borderRadius: 12,
    marginBottom: 20,
    borderLeftWidth: 3,
    borderLeftColor: '#00d4ff',
    shadowColor: '#00d4ff',
    shadowOpacity: 0.08,
    shadowRadius: 12,
    elevation: 3,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 16,
    color: '#ffffff',
    letterSpacing: 0.3,
  },
  text: {
    fontSize: 15,
    lineHeight: 26,
    color: '#d0d8e0',
    fontWeight: '400',
  },
  badgeContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
  },
  badge: {
    backgroundColor: '#1f2d4d',
    paddingVertical: 8,
    paddingHorizontal: 14,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#00d4ff',
    marginBottom: 8,
  },
  badgeText: {
    fontSize: 13,
    fontWeight: '600',
    color: '#00d4ff',
    letterSpacing: 0.3,
  },
  projectCard: {
    backgroundColor: '#0f1828',
    padding: 16,
    borderRadius: 10,
    marginBottom: 14,
    borderWidth: 1,
    borderColor: '#1f2d4d',
  },
  projectTitle: {
    fontSize: 17,
    fontWeight: '700',
    color: '#ffffff',
    marginBottom: 4,
  },
  projectStatus: {
    fontSize: 12,
    color: '#00d4ff',
    fontWeight: '600',
    marginBottom: 8,
    letterSpacing: 0.2,
  },
  projectDescription: {
    fontSize: 14,
    lineHeight: 22,
    color: '#b0b8c1',
    marginBottom: 12,
    fontWeight: '400',
  },
  projectTechStack: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  projectTech: {
    fontSize: 12,
    color: '#d0d8e0',
    backgroundColor: '#1f2d4d',
    paddingVertical: 4,
    paddingHorizontal: 10,
    borderRadius: 12,
    fontWeight: '500',
  },
  expertiseItem: {
    marginBottom: 16,
    paddingBottom: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#1f2d4d',
  },
  expertiseLabel: {
    fontSize: 15,
    fontWeight: '700',
    color: '#00d4ff',
    marginBottom: 6,
  },
  expertiseText: {
    fontSize: 14,
    lineHeight: 22,
    color: '#b0b8c1',
    fontWeight: '400',
  },
  footer: {
    textAlign: 'center',
    color: '#6b7280',
    fontSize: 12,
    paddingVertical: 24,
    fontWeight: '500',
    letterSpacing: 0.2,
  },
});
