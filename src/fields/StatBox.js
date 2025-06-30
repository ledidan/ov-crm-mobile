import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";
import { theme } from "../theme";

const StatBox = ({ colors, title, subtitle, number, icon, iconName }) => {
  return (
    <LinearGradient colors={colors} style={styles.box}>
      <View style={styles.content}>
        <View style={styles.left}>
          {icon ? (
            <Image source={icon} style={styles.icon} resizeMode="contain" />
          ) : (
            <Ionicons name={iconName || "stats-chart"} size={24} color="#fff" style={styles.icon} />
          )}
          <View>
            <Text style={theme.typography.button}>{title}</Text>
            <Text style={styles.subtitle}>{subtitle}</Text>
          </View>
        </View>
        <Text style={styles.number}>{number}</Text>
      </View>
    </LinearGradient>
  );
};

export default StatBox;

const styles = StyleSheet.create({
  box: {
    flex: 1,
    borderRadius: 12,
    padding: 10,
    height: 100,
    justifyContent: "space-between",
  },
  content: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  left: {
    flexDirection: "row",
    alignItems: "center",
    flexShrink: 1,
  },
  icon: {
    width: 28,
    height: 28,
    marginRight: 10,
  },
  subtitle: {
    color: "#fff",
    fontSize: 12,
    marginTop: 2,
    fontWeight: 500
  },
  number: {
    fontSize: 64,
    fontWeight: "bold",
    color: "rgba(255, 255, 255, 0.2)",
  },
});
