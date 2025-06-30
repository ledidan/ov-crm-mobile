import React, { useEffect, useState } from "react";
import { Text, ScrollView, Pressable, StyleSheet } from "react-native";
import Collapsible from "react-native-collapsible";
import IndexSection from "../IndexSection";
import ContactInfoSection from "../ContactInfoSection";
import { Ionicons } from "@expo/vector-icons";
import MainInfoSection from "../MainInfoSection";
import OtherInfoSection from "../OtherInfoSection";

const Detail = () => {
  const [collapsedSections, setCollapsedSections] = useState({
    index: true,
    contact: true,
    main: true,
    other: true,
  });

  useEffect(() => {
    setCollapsedSections({
      index: false,
      contact: false,
      main: true,
      other: true,
    });
  }, []);

    const toggleSection = (key) => {
    setCollapsedSections((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <ScrollView style={styles.container}>
      <Pressable onPress={() => toggleSection("index")} style={styles.header}>
        <Text style={styles.headerText}>Chỉ số</Text>
        <Ionicons
          name={collapsedSections.index ? "chevron-down" : "chevron-up"}
          size={18}
          color="#555"
        />
      </Pressable>
      <Collapsible collapsed={collapsedSections.index}>
        <IndexSection />
      </Collapsible>

      <Pressable onPress={() => toggleSection("contact")} style={styles.header}>
        <Text style={styles.headerText}>Thông tin liên hệ</Text>
        <Ionicons
          name={collapsedSections.contact ? "chevron-down" : "chevron-up"}
          size={18}
          color="#555"
        />
      </Pressable>
      <Collapsible collapsed={collapsedSections.contact}>
        <ContactInfoSection />
      </Collapsible>

      <Pressable onPress={() => toggleSection("main")} style={styles.header}>
        <Text style={styles.headerText}>Thông tin chính</Text>
        <Ionicons
          name={collapsedSections.main ? "chevron-down" : "chevron-up"}
          size={18}
          color="#555"
        />
      </Pressable>
      <Collapsible collapsed={collapsedSections.main}>
        <MainInfoSection />
      </Collapsible>

      <Pressable onPress={() => toggleSection("other")} style={styles.header}>
        <Text style={styles.headerText}>Thông tin khác</Text>
        <Ionicons
          name={collapsedSections.other ? "chevron-down" : "chevron-up"}
          size={18}
          color="#555"
        />
      </Pressable>
      <Collapsible collapsed={collapsedSections.other}>
        <OtherInfoSection />
      </Collapsible>
    </ScrollView>
  );
};

export default Detail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f6f6f6",
  },
  activeTab: {
    fontWeight: "bold",
    color: "#2F80ED",
  },
  header: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: "#fff",
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  headerText: {
    fontWeight: "600",
    fontSize: 16,
  },
  placeholder: {
    padding: 16,
    fontStyle: "italic",
    color: "#888",
    backgroundColor: "#fff",
  },
});
