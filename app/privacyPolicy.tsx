import React, { useRef, useMemo, useState } from "react";
import { 
  View, 
  Text, 
  StyleSheet, 
  ScrollView, 
  TouchableOpacity, 
  LayoutChangeEvent 
} from "react-native";
import { termsSections, SectionType } from "./termsData";

interface SectionWithPosition extends SectionType {
  key: string;
}

export default function privacyPolicyScreen() {
  const scrollViewRef = useRef<ScrollView>(null);

  const sections: SectionWithPosition[] = useMemo(() => {
    return termsSections.map((section, index) => ({
      ...section,
      key: `section-${index}`,
    }));
  }, []);

  const [positions, setPositions] = useState<{ [key: string]: number }>({});

  const handleLayout = (key: string) => (event: LayoutChangeEvent) => {
    const { y } = event.nativeEvent.layout;
    setPositions((prev) => ({ ...prev, [key]: y }));
  };

  const scrollToSection = (key: string) => {
    const y = positions[key];
    if (y !== undefined) {
      scrollViewRef.current?.scrollTo({ y, animated: true });
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView ref={scrollViewRef} style={styles.scrollView}>
        <SectionLinks sections={sections} onPress={scrollToSection} />
        {sections.map(({ key, title, content }) => (
          <Section
            key={key}
            title={title}
            content={content}
            onLayout={handleLayout(key)}
          />
        ))}
      </ScrollView>
    </View>
  );
}

interface SectionLinksProps {
  sections: SectionWithPosition[];
  onPress: (key: string) => void;
}

const SectionLinks: React.FC<SectionLinksProps> = ({ sections, onPress }) => (
  <View style={styles.linksContainer}>
    {sections.map(({ title, key }) => (
      <TouchableOpacity key={key} onPress={() => onPress(key)}>
        <Text style={styles.link}>{title}</Text>
      </TouchableOpacity>
    ))}
  </View>
);

interface SectionProps {
  title: string;
  content: string;
  onLayout: (event: LayoutChangeEvent) => void;
}

const Section: React.FC<SectionProps> = ({ title, content, onLayout }) => (
  <View onLayout={onLayout} style={styles.section}>
    <Text style={styles.sectionTitle}>{title}</Text>
    <Text style={styles.sectionContent}>{content}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8F8F8",
    padding: 10,
  },
  scrollView: {
    marginTop: 10,
  },
  linksContainer: {
    marginBottom: 20,
  },
  link: {
    fontSize: 16,
    color: "#007AFF",
    marginBottom: 10,
  },
  section: {
    marginBottom: 40,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  sectionContent: {
    fontSize: 14,
    color: "gray",
  },
});
