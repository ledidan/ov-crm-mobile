import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'; // Dùng bộ icon tùy chọn

const IconBox = ({ iconName, iconColor = "#333", title, onPress }) => {
  return (
    <TouchableOpacity style={styles.box} onPress={onPress}>
      <Icon name={iconName} size={28} color={iconColor} style={styles.icon} />
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

export default IconBox;

const styles = StyleSheet.create({
  box: {
    width: "22%",
    aspectRatio: 1,
    backgroundColor: "#f5f5fc",
    borderRadius: 12,
    marginVertical: 8,
    alignItems: "center",
    justifyContent: "center",
    padding: 6,
  },
  icon: {
    marginBottom: 6,
  },
  title: {
    fontSize: 12,
    textAlign: "center",
    fontWeight: "500",
  },
});
