import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { theme } from "../../theme";
import { Ionicons } from "@expo/vector-icons";
const Header = () => {
  return (
    <View style={styles.header}>
      <Text style={theme.typography.h3}>Khách hàng</Text>
      <View style={styles.right}>
        <Pressable onPress={() => console.log("Chat pressed")}>
          <Ionicons name="search-outline" size={22} color="#000" />
        </Pressable>
        <Pressable onPress={() => console.log("Chat pressed")}>
          <Ionicons name="add-outline" size={22} color="#000" />
        </Pressable>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 16,
    paddingTop: 50,
    borderBottomWidth: 1,
    borderBottomColor: "#DFDFDF",
    backgroundColor: "#FFFFFF",
  },
  right: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
});
