import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { Text, TouchableOpacity } from "react-native";
import { StyleSheet, View } from "react-native";
import { theme } from "../theme";

const TabIcon = ({ label, icon, color = theme.colors.primary, onPress }) => (
  <View style={styles.tab}>
    <TouchableOpacity onPress={onPress}>
      <Ionicons name={icon} size={20} color={color} style={{textAlign: "center"}}/>
      <Text style={styles.tabText}>{label}</Text>
    </TouchableOpacity>
  </View>
);

export default TabIcon;

const styles = StyleSheet.create({
  tab: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 14,
    backgroundColor: "#fff",
    flex: 1,
    width: 100,
    height: 70,
    borderRadius: 10,
    borderColor: "#E0E0E0",
    borderWidth: 1,
    marginHorizontal: 4,
    shadowRadius: 2,
  },

  tabText: {
    fontSize: 12,
    fontWeight: 500,
    marginTop: 6,
    color: "#000",
    textAlign: "center",
  },
});
