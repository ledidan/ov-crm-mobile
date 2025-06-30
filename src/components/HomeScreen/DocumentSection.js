import React from "react";
import { TabIcon } from "@/fields";
import { ScrollView, StyleSheet, Text, View } from "react-native";

const DocumentSection = () => (
  <View>
    <Text style={styles.title}>Tài liệu</Text>
    <ScrollView
      contentContainerStyle={styles.tabRow}
      horizontal={true}
      showsHorizontalScrollIndicator={false}
    >
      {Array.from({ length: 10 }).map((_, idx) => (
        <TabIcon
          key={idx}
          label={["Riêng tư", "Chia sẻ", "Chung", "Dẫn"][idx % 4]}
          icon={["lock-closed-outline", "share-social-outline", "people-outline", "link-outline"][idx % 4]}
        />
      ))}
    </ScrollView>
  </View>
);

export default DocumentSection;

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: "700",
    marginTop: 20,
    marginHorizontal: 6
  },
  tabRow: {
    flexDirection: "row",
    gap: 6,
    paddingVertical: 12,
  },
});
