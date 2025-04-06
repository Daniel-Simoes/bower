import React, { useRef } from "react";
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";

export default function TermsOfUseScreen() {
  const router = useRouter();
  const scrollViewRef = useRef(null);

  const sections = [
    { 
      title: "1. Introduction", 
      ref: useRef(null), 
      content:"eside in a country where the Service is available. You also promise that any registration information that you submit to Spotify is true, accurate, and complete, and you agree to keep it that way at all times. If you are a minor in your home country, your parent or guardian will need to enter into these Terms on your behalf. You can find additional information regarding minimum age requirements in the registration process. If you do not meet the minimum age requirements then you should eside in a country where the Service is available. You also promise that any registration information that you submit to Spotify is true, accurate, and complete, and you agree to keep it that way at all times. If you are a minor in your home country, your parent or guardian will need to enter into these Terms on your behalf. You can find additional information regarding minimum age requirements in the registration process. If you do not meet the minimum age requirements then you should eside in a country where the Service is available. You also promise that any registration information that you submit to Spotify is true, accurate, and complete, and you agree to keep it that way at all times. If you are a minor in your home country, your parent or guardian will need to enter into these Terms on your behalf. You can find additional information regarding minimum age requirements in the registration process. If you do not meet the minimum age requirements then you should " 
    },
    { title: "2. The Spotify Service Provided by Us", 
      ref: useRef(null), 
      content:"eside in a country where the Service is available. You also promise that any registration information that you submit to Spotify is true, accurate, and complete, and you agree to keep it that way at all times. If you are a minor in your home country, your parent or guardian will need to enter into these Terms on your behalf. You can find additional information regarding minimum age requirements in the registration process. If you do not meet the minimum age requirements then you should eside in a country where the Service is available. You also promise that any registration information that you submit to Spotify is true, accurate, and complete, and you agree to keep it that way at all times. If you are a minor in your home country, your parent or guardian will need to enter into these Terms on your behalf. You can find additional information regarding minimum age requirements in the registration process. If you do not meet the minimum age requirements then you should eside in a country where the Service is available. You also promise that any registration information that you submit to Spotify is true, accurate, and complete, and you agree to keep it that way at all times. If you are a minor in your home country, your parent or guardian will need to enter into these Terms on your behalf. You can find additional information regarding minimum age requirements in the registration process. If you do not meet the minimum age requirements then you should "  
    },
    { 
      title: "3. Your Use of the Spotify Service", 
      ref: useRef(null), 
      content:"eside in a country where the Service is available. You also promise that any registration information that you submit to Spotify is true, accurate, and complete, and you agree to keep it that way at all times. If you are a minor in your home country, your parent or guardian will need to enter into these Terms on your behalf. You can find additional information regarding minimum age requirements in the registration process. If you do not meet the minimum age requirements then you should eside in a country where the Service is available. You also promise that any registration information that you submit to Spotify is true, accurate, and complete, and you agree to keep it that way at all times. If you are a minor in your home country, your parent or guardian will need to enter into these Terms on your behalf. You can find additional information regarding minimum age requirements in the registration process. If you do not meet the minimum age requirements then you should eside in a country where the Service is available. You also promise that any registration information that you submit to Spotify is true, accurate, and complete, and you agree to keep it that way at all times. If you are a minor in your home country, your parent or guardian will need to enter into these Terms on your behalf. You can find additional information regarding minimum age requirements in the registration process. If you do not meet the minimum age requirements then you should "  
    },
    { 
      title: "4. Content and Intellectual Property Rights", 
      ref: useRef(null), 
      content:"eside in a country where the Service is available. You also promise that any registration information that you submit to Spotify is true, accurate, and complete, and you agree to keep it that way at all times. If you are a minor in your home country, your parent or guardian will need to enter into these Terms on your behalf. You can find additional information regarding minimum age requirements in the registration process. If you do not meet the minimum age requirements then you should eside in a country where the Service is available. You also promise that any registration information that you submit to Spotify is true, accurate, and complete, and you agree to keep it that way at all times. If you are a minor in your home country, your parent or guardian will need to enter into these Terms on your behalf. You can find additional information regarding minimum age requirements in the registration process. If you do not meet the minimum age requirements then you should eside in a country where the Service is available. You also promise that any registration information that you submit to Spotify is true, accurate, and complete, and you agree to keep it that way at all times. If you are a minor in your home country, your parent or guardian will need to enter into these Terms on your behalf. You can find additional information regarding minimum age requirements in the registration process. If you do not meet the minimum age requirements then you should "  
    },
    { 
      title: "5. Customer Support, Information, Questions and Complaints", 
      ref: useRef(null), 
      content:"eside in a country where the Service is available. You also promise that any registration information that you submit to Spotify is true, accurate, and complete, and you agree to keep it that way at all times. If you are a minor in your home country, your parent or guardian will need to enter into these Terms on your behalf. You can find additional information regarding minimum age requirements in the registration process. If you do not meet the minimum age requirements then you should eside in a country where the Service is available. You also promise that any registration information that you submit to Spotify is true, accurate, and complete, and you agree to keep it that way at all times. If you are a minor in your home country, your parent or guardian will need to enter into these Terms on your behalf. You can find additional information regarding minimum age requirements in the registration process. If you do not meet the minimum age requirements then you should eside in a country where the Service is available. You also promise that any registration information that you submit to Spotify is true, accurate, and complete, and you agree to keep it that way at all times. If you are a minor in your home country, your parent or guardian will need to enter into these Terms on your behalf. You can find additional information regarding minimum age requirements in the registration process. If you do not meet the minimum age requirements then you should "  },
    { title: "6. Problems and Disputes", ref: useRef(null), content:"eside in a country where the Service is available. You also promise that any registration information that you submit to Spotify is true, accurate, and complete, and you agree to keep it that way at all times. If you are a minor in your home country, your parent or guardian will need to enter into these Terms on your behalf. You can find additional information regarding minimum age requirements in the registration process. If you do not meet the minimum age requirements then you should eside in a country where the Service is available. You also promise that any registration information that you submit to Spotify is true, accurate, and complete, and you agree to keep it that way at all times. If you are a minor in your home country, your parent or guardian will need to enter into these Terms on your behalf. You can find additional information regarding minimum age requirements in the registration process. If you do not meet the minimum age requirements then you should eside in a country where the Service is available. You also promise that any registration information that you submit to Spotify is true, accurate, and complete, and you agree to keep it that way at all times. If you are a minor in your home country, your parent or guardian will need to enter into these Terms on your behalf. You can find additional information regarding minimum age requirements in the registration process. If you do not meet the minimum age requirements then you should "  },
    { title: "7. About these Terms", ref: useRef(null), content:"eside in a country where the Service is available. You also promise that any registration information that you submit to Spotify is true, accurate, and complete, and you agree to keep it that way at all times. If you are a minor in your home country, your parent or guardian will need to enter into these Terms on your behalf. You can find additional information regarding minimum age requirements in the registration process. If you do not meet the minimum age requirements then you should eside in a country where the Service is available. You also promise that any registration information that you submit to Spotify is true, accurate, and complete, and you agree to keep it that way at all times. If you are a minor in your home country, your parent or guardian will need to enter into these Terms on your behalf. You can find additional information regarding minimum age requirements in the registration process. If you do not meet the minimum age requirements then you should eside in a country where the Service is available. You also promise that any registration information that you submit to Spotify is true, accurate, and complete, and you agree to keep it that way at all times. If you are a minor in your home country, your parent or guardian will need to enter into these Terms on your behalf. You can find additional information regarding minimum age requirements in the registration process. If you do not meet the minimum age requirements then you should "  },
  ];

  const scrollToSection = (ref) => {
    ref.current?.measureLayout(
      scrollViewRef.current,
      (x, y) => {
        scrollViewRef.current.scrollTo({ y, animated: true });
      }
    );
  };

  return (
    <View style={styles.container}>
      
      <ScrollView ref={scrollViewRef} style={styles.scrollView}>
        <View style={styles.linksContainer}>
          {sections.map((section, index) => (
            <TouchableOpacity key={index} onPress={() => scrollToSection(section.ref)}>
              <Text style={styles.link}>{section.title}</Text>
            </TouchableOpacity>
          ))}
        </View>
        
        {sections.map((section, index) => (
          <View key={index} ref={section.ref} style={styles.section}>
            <Text style={styles.sectionTitle}>{section.title}</Text>
            <Text style={styles.sectionContent}>{section.content}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8F8F8",
    padding: 20,
  },
  backButton: {
    position: "absolute",
    top: 50,
    left: 20,
  },
  header: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 20,
  },
  scrollView: {
    marginTop: 40,
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
