// src/components/AppButton.js
import React from "react";
import { TouchableOpacity, Text, StyleSheet, Pressable } from "react-native";
import { theme } from "../theme"; // assuming you setup theme
import { Ionicons } from "@expo/vector-icons";

export default function AppButton({
  title = "default",
  onPress,
  size = "medium",
  variant = "contained",
  style,
  color = theme.colors.primary,
  iconName,
  iconSize = 24,
  disabled = false,
  ...props
}) {
  const sizeStyle = sizeStyles[size] || sizeStyles.medium;
  const variantStyle = variantStyles[variant] || variantStyles.contained;
  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled}
      activeOpacity={0.5}
      style={[
        styles.base,
        variantStyle.button,
        sizeStyle.button,
        disabled && styles.disabled,
        style,
      ]}
      {...props}
    >
      {iconName && (
        <Ionicons
          name={iconName}
          size={iconSize ? iconSize : iconSizes[size] || iconSize}
          color={color || "black"}
          style={{marginRight: 6}}
        />
      )}
      {title && (
        <Text
          style={[
            styles.textBase,
            variantStyle.text,
            sizeStyle.text,
            disabled && styles.textDisabled,
          ]}
        >
          {title}
        </Text>
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  base: {
    borderRadius: 8,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  textBase: {
    fontFamily: "BeVietnamPro-SemiBold",
    textAlign: "center",
  },
  disabled: {
    backgroundColor: "#ccc",
    borderColor: "#ccc",
  },
  textDisabled: {
    color: "#999",
  },
});
const iconSizes = {
  small: 16,
  medium: 20,
  large: 24,
};
const sizeStyles = {
  small: {
    button: {
      paddingVertical: 6,
      paddingHorizontal: 14,
    },
    text: {
      fontSize: 12,
    },
  },
  medium: {
    button: {
      paddingVertical: 10,
      paddingHorizontal: 20,
    },
    text: {
      fontSize: 16,
    },
  },
  large: {
    button: {
      paddingVertical: 14,
      paddingHorizontal: 24,
    },
    text: {
      fontSize: 18,
    },
  },
};

const variantStyles = {
  contained: {
    button: {
      backgroundColor: theme.colors.primary,
    },
    text: {
      color: theme.colors.white,
    },
  },
  outlined: {
    button: {
      backgroundColor: "transparent",
      borderWidth: 1,
      borderColor: theme.colors.primary,
    },
    text: {
      color: theme.colors.primary,
    },
  },
  text: {
    button: {
      backgroundColor: "transparent",
    },
    text: {
      color: theme.colors.primary,
    },
  },
};
