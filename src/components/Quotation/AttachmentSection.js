import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const AttachmentSection = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Tải liệu đính kèm</Text>
      <TouchableOpacity style={styles.uploadButton}>
        <Ionicons name="cloud-upload-outline" size={20} color="#1DA1F2" />
        <Text style={styles.uploadText}>Tải lên</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AttachmentSection;

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  label: {
    fontSize: 14,
    fontWeight: "500",
    marginTop: 10,
    marginBottom: 5,
  },
  uploadButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#E6F0FA",
    padding: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#B3D4FC",
    marginBottom: 10,
  },
  uploadText: {
    color: "#1DA1F2",
    marginLeft: 5,
    fontSize: 14,
  },
  dropdown: {
    backgroundColor: "#F0F4F8",
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  dropdownText: {
    color: "#666",
  },
});