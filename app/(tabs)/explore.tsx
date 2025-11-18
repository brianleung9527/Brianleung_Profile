import { StyleSheet, ScrollView, Text, View, Linking } from 'react-native';

const ContactLink = ({ label, href }: { label: string; href: string }) => (
  <Text style={styles.contactLink} onPress={() => Linking.openURL(href)}>
    {label} →
  </Text>
);

export default function ExploreScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Connect With Me</Text>
        <Text style={styles.subtitle}>Let's collaborate on innovative projects</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Professional Links</Text>
        <View style={styles.linkItem}>
          <Text style={styles.linkIcon}>💼</Text>
          <View style={styles.linkContent}>
            <Text style={styles.linkLabel}>LinkedIn</Text>
            <ContactLink label="View Profile" href="https://linkedin.com/in/brianleung" />
          </View>
        </View>
        <View style={styles.linkItem}>
          <Text style={styles.linkIcon}>💻</Text>
          <View style={styles.linkContent}>
            <Text style={styles.linkLabel}>GitHub</Text>
            <ContactLink label="View Repositories" href="https://github.com/brianleung9527" />
          </View>
        </View>
        <View style={styles.linkItem}>
          <Text style={styles.linkIcon}>✉️</Text>
          <View style={styles.linkContent}>
            <Text style={styles.linkLabel}>Email</Text>
            <ContactLink label="Send Message" href="mailto:brian@example.com" />
          </View>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Experience Highlights</Text>
        <View style={styles.timeline}>
          <View style={styles.timelineItem}>
            <View style={styles.timelineDot} />
            <View style={styles.timelineContent}>
              <Text style={styles.timelineYear}>2024 - Present</Text>
              <Text style={styles.timelineTitle}>React Native Developer</Text>
              <Text style={styles.timelineDesc}>
                Building scalable mobile applications with Expo and React Native
              </Text>
            </View>
          </View>
          <View style={styles.timelineItem}>
            <View style={styles.timelineDot} />
            <View style={styles.timelineContent}>
              <Text style={styles.timelineYear}>2023 - 2024</Text>
              <Text style={styles.timelineTitle}>Full-Stack Developer</Text>
              <Text style={styles.timelineDesc}>
                Developed web and mobile applications with React, TypeScript, and Node.js
              </Text>
            </View>
          </View>
          <View style={styles.timelineItem}>
            <View style={styles.timelineDot} />
            <View style={styles.timelineContent}>
              <Text style={styles.timelineYear}>2022 - 2023</Text>
              <Text style={styles.timelineTitle}>Junior Developer</Text>
              <Text style={styles.timelineDesc}>
                Started web development journey, built foundations in JavaScript and React
              </Text>
            </View>
          </View>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Education & Certifications</Text>
        <View style={styles.certItem}>
          <Text style={styles.certTitle}>React & React Native Specialization</Text>
          <Text style={styles.certDesc}>Advanced concepts in state management and performance</Text>
        </View>
        <View style={styles.certItem}>
          <Text style={styles.certTitle}>TypeScript Mastery</Text>
          <Text style={styles.certDesc}>Type-safe development and advanced TypeScript patterns</Text>
        </View>
      </View>

      <Text style={styles.footer}>
        Always open to exciting opportunities and collaborations. Let's build something amazing together! 🚀
      </Text>
    </ScrollView>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0a0e27',
    paddingHorizontal: 16,
  },
  header: {
    marginTop: 24,
    marginBottom: 28,
    paddingHorizontal: 0,
  },
  title: {
    fontSize: 32,
    fontWeight: '700',
    color: '#ffffff',
    marginBottom: 8,
    letterSpacing: -0.5,
  },
  subtitle: {
    fontSize: 15,
    color: '#b0b8c1',
    fontWeight: '400',
    lineHeight: 22,
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
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 16,
    color: '#ffffff',
    letterSpacing: 0.3,
  },
  linkItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 18,
    paddingBottom: 14,
    borderBottomWidth: 1,
    borderBottomColor: '#1f2d4d',
  },
  linkIcon: {
    fontSize: 28,
    marginRight: 16,
  },
  linkContent: {
    flex: 1,
  },
  linkLabel: {
    fontSize: 15,
    fontWeight: '700',
    color: '#ffffff',
    marginBottom: 4,
  },
  contactLink: {
    fontSize: 13,
    color: '#00d4ff',
    fontWeight: '600',
    letterSpacing: 0.2,
  },
  timeline: {
    marginLeft: 8,
  },
  timelineItem: {
    flexDirection: 'row',
    marginBottom: 24,
    paddingBottom: 12,
  },
  timelineDot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: '#00d4ff',
    marginTop: 6,
    marginRight: 18,
    flexShrink: 0,
  },
  timelineContent: {
    flex: 1,
  },
  timelineYear: {
    fontSize: 12,
    color: '#00d4ff',
    fontWeight: '700',
    letterSpacing: 0.3,
    marginBottom: 4,
  },
  timelineTitle: {
    fontSize: 15,
    fontWeight: '700',
    color: '#ffffff',
    marginBottom: 4,
  },
  timelineDesc: {
    fontSize: 14,
    color: '#b0b8c1',
    lineHeight: 20,
    fontWeight: '400',
  },
  certItem: {
    paddingBottom: 14,
    marginBottom: 14,
    borderBottomWidth: 1,
    borderBottomColor: '#1f2d4d',
  },
  certTitle: {
    fontSize: 15,
    fontWeight: '700',
    color: '#ffffff',
    marginBottom: 4,
  },
  certDesc: {
    fontSize: 13,
    color: '#b0b8c1',
    lineHeight: 20,
    fontWeight: '400',
  },
  footer: {
    textAlign: 'center',
    color: '#6b7280',
    fontSize: 14,
    paddingVertical: 24,
    fontWeight: '500',
    lineHeight: 22,
    marginBottom: 20,
  },
});
