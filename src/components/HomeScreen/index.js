import React, { useState } from "react";
import { View, ScrollView, Pressable, Text, StyleSheet } from "react-native";
import Collapsible from "react-native-collapsible";
import HeaderSection from "./HeaderSection";
import StatSection from "./StatSection";
import NewsList from "./NewsList";
import DocumentSection from "./DocumentSection";
import SupportCard from "./SupportCard";


const HomeScreenComponent = ({navigation}) => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <View style={{ flex: 1, backgroundColor: "#fff" }}>
      <HeaderSection />
      <ScrollView contentContainerStyle={{ padding: 8 }}>
        <Pressable
          onPress={() => setIsCollapsed(!isCollapsed)}
          style={styles.sectionHeader}
        >
          <Text style={styles.sectionTitle}>Tỷ lệ chuyển đổi</Text>
          <Pressable style={styles.compareButton}>
            <Text style={styles.compareText}>So sánh</Text>
          </Pressable>
        </Pressable>

        {/* <Collapsible collapsed={isCollapsed}> */}
          <StatSection navigation={navigation}/>
        {/* </Collapsible> */}

        {/* <DocumentSection /> */}
        <NewsList />
        <SupportCard />
      </ScrollView>
    </View>
  );
};

export default HomeScreenComponent;

const styles = StyleSheet.create({
  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 10,
    paddingVertical: 20,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: "#000",
  },
  compareButton: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 999,
    paddingHorizontal: 12,
    paddingVertical: 4,
  },
  compareText: {
    fontSize: 12,
    color: "#000",
  },
});
