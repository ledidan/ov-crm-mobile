import React from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";

export default function AppInput({
  label,
  required = false,
  placeholder = "",
  value,
  onChangeText,
  style,
  inputStyle,
  ...props
}) {
  return (
    <View style={[styles.container, style]}>
      {label && (
        <Text style={styles.label}>
          {label} {required && <Text style={styles.required}>*</Text>}
        </Text>
      )}
      <TextInput
        style={[styles.input, inputStyle]}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        placeholderTextColor="#A0A0A0"
        {...props}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  label: {
    fontFamily: "BeVietnamPro-SemiBold",
    fontSize: 14,
    color: "#333",
    paddingBottom: 5
  },
  required: {
    color: "red",
  },
  input: {
    maxHeight: '100%',
    backgroundColor: '#f9f9f9',
    borderRadius: 4,
    height: 42,
    fontSize: 14,
    fontFamily: "BeVietnamPro-Regular",
    color: "#000",
    paddingHorizontal: 12, 
    marginBottom: 20
  },
});
