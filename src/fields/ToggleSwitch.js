import React from "react";
import { theme } from "../theme";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const ToggleSwitch = ({ options = [], selected, onSelect }) => {
  return (
    <View style={styles.toggleContainer}>
      {options.map((option, index) => {
        const isActive = selected === option.key;
        return (
          <TouchableOpacity
            key={option.key}
            onPress={() => onSelect(option.key)}
            style={[
              styles.toggleButton,
              isActive && styles.toggleButtonActive,
              index === 0 && styles.leftRounded,
              index === options.length - 1 && styles.rightRounded,
            ]}
          >
            <Text
              style={[styles.toggleText, isActive && styles.toggleTextActive]}
            >
              {option.label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default ToggleSwitch;

const styles = StyleSheet.create({
  toggleContainer: {
    flexDirection: "row",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 6,
    overflow: "hidden",
  },
  toggleButton: {
    paddingHorizontal: 10,
    paddingVertical: 6,
    backgroundColor: "#F0F0F0",
  },
  toggleButtonActive: {
    backgroundColor: theme.colors.primary,
  },
  toggleText: {
    fontSize: 12,
    color: "#333",
  },
  toggleTextActive: {
    color: "#fff",
    fontWeight: "bold",
  },
  leftRounded: {
    borderTopLeftRadius: 6,
    borderBottomLeftRadius: 6,
  },
  rightRounded: {
    borderTopRightRadius: 6,
    borderBottomRightRadius: 6,
  },
});
