// src/screens/ChatScreen.tsx
import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const ChatScreen = () => {
  return (
    <View style={styles.container}>
      {/* <Text style={styles.title}>Trò chuyện</Text> */}
      <View style={styles.tabs}>
        <Text style={[styles.tab, styles.activeTab]}>Tất cả</Text>
        <Text style={styles.tab}>Chưa đọc</Text>
        <Text style={styles.tab}>Public</Text>
      </View>

      <View style={styles.emptyBox}>
        <Image
          source={require("assets/adaptive-icon.png")}
          style={styles.image}
        />
        <Text style={styles.emptyText}>Chưa có tin nhắn nào ở đây</Text>
      </View>
    </View>
  );
};

export default ChatScreen;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },
//   title: {
//     fontSize: 20,
//     fontWeight: "600",
//     paddingHorizontal: 16,
//     marginBottom: 10,
//   },
  tabs: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
    paddingHorizontal: 16,
    marginBottom: 10,
  },
  tab: {
    marginRight: 20,
    paddingVertical: 8,
    fontSize: 16,
    color: "#888",
  },
  activeTab: {
    color: "#4B4DED",
    borderBottomWidth: 2,
    borderBottomColor: "#4B4DED",
  },
  emptyBox: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 16,
    resizeMode: "contain",
  },
  emptyText: {
    color: "#999",
    fontSize: 16,
  },
});
