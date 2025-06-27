import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Modal,
  FlatList,
  Pressable,
  TouchableWithoutFeedback,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function AppSelect({
  label,
  required = false,
  value,
  onSelect,
  options = [],
  placeholder = "Chọn...",
  style,
}) {
  const [visible, setVisible] = useState(false);

  const handleSelect = (item) => {
    onSelect(item);
    setVisible(false);
  };

  return (
    <View style={[styles.container, style]}>
      {label && (
        <Text style={styles.label}>
          {label}
          {required && <Text style={styles.required}> *</Text>}
        </Text>
      )}

      <TouchableOpacity
        style={styles.selectBox}
        onPress={() => setVisible(true)}
        activeOpacity={0.8}
      >
        <Text style={value ? styles.valueText : styles.placeholder}>
          {value ? value.label : placeholder}
        </Text>
        <Ionicons name="chevron-down" size={18} color="#555" />
      </TouchableOpacity>

      <Modal visible={visible} animationType="slide" transparent>
        <Pressable style={styles.overlay} onPress={() => setVisible(false)}>
          <TouchableWithoutFeedback>
            <View style={styles.dropdown}>
              <FlatList
                data={options}
                keyExtractor={(item) => item.value.toString()}
                renderItem={({ item }) => (
                  <TouchableOpacity
                    style={styles.option}
                    onPress={() => handleSelect(item)}
                  >
                    <Text style={styles.optionText}>{item.label}</Text>
                  </TouchableOpacity>
                )}
              />
            </View>
          </TouchableWithoutFeedback>
        </Pressable>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 12,
  },
  label: {
    fontSize: 14,
    fontFamily: "BeVietnamPro-SemiBold",
    marginBottom: 6,
    color: "#333",
  },
  required: {
    color: "red",
  },
  selectBox: {
    backgroundColor: "#fff",
    borderRadius: 6,
    paddingVertical: 12,
    paddingHorizontal: 14,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  placeholder: {
    color: "#aaa",
    fontFamily: "BeVietnamPro-Regular",
  },
  valueText: {
    color: "#000",
    fontFamily: "BeVietnamPro-Regular",
  },
  overlay: {
    flex: 1,
    justifyContent: "flex-end",
    backgroundColor: "rgba(0,0,0,0.2)",
  },
  dropdown: {
    backgroundColor: "#fff",
    paddingVertical: 10,
    paddingHorizontal: 16,
    maxHeight: 400,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
  },
  option: {
    paddingVertical: 14,
    borderBottomWidth: 0.5,
    borderColor: "#eee",
  },
  optionText: {
    fontSize: 16,
    fontFamily: "BeVietnamPro-Regular",
  },
});
