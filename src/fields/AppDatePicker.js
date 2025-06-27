import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Platform,
  Modal,
} from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import { Ionicons } from "@expo/vector-icons";

export default function AppDatePicker({ label, value, onChange }) {
  const [show, setShow] = useState(false);
  const [tempDate, setTempDate] = useState(value || new Date());

  const handleChange = (event, selectedDate) => {
    if (Platform.OS === "android") {
      setShow(false);
      if (selectedDate) {
        onChange?.(selectedDate);
      }
    } else {
      if (selectedDate) {
        setTempDate(selectedDate);
      }
    }
  };

  const confirmIOSDate = () => {
    onChange?.(tempDate);
    setShow(false);
  };

  return (
    <View style={styles.container}>
      {label && <Text style={styles.label}>{label}</Text>}
      <TouchableOpacity style={styles.inputBox} onPress={() => setShow(true)}>
        <Text style={styles.inputText}>
          {value
            ? value.toLocaleString("vi-VN", {
                day: "2-digit",
                month: "2-digit",
                year: "numeric",
                hour: "2-digit",
                minute: "2-digit",
              })
            : "Chọn thời gian"}
        </Text>
        <Ionicons name="chevron-down" size={18} color="#555" />
      </TouchableOpacity>

      {show && Platform.OS === "android" && (
        <DateTimePicker
          value={value || new Date()}
          mode="datetime"
          display="default"
          locale="vi"
          onChange={handleChange}
        />
      )}

      {/* iOS Modal */}
      {Platform.OS === "ios" && (
        <Modal
          transparent
          visible={show}
          animationType="slide"
          onRequestClose={() => setShow(false)}
        >
          <View style={styles.modalOverlay}>
            <View style={styles.pickerContainer}>
              <View style={styles.modalHeader}>
                <Text style={styles.modalTitle}>Chọn thời gian</Text>
                <TouchableOpacity onPress={() => setShow(false)}>
                  <Ionicons name="close" size={20} />
                </TouchableOpacity>
              </View>

              <DateTimePicker
                value={tempDate}
                mode="datetime"
                display="spinner" // 🌀 Wheel style!
                locale="vi"
                onChange={handleChange}
                style={styles.picker}
              />

              <TouchableOpacity
                style={styles.btnConfirm}
                onPress={confirmIOSDate}
              >
                <Text style={styles.btnConfirmText}>Xác nhận</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 14,
  },
  label: {
    fontSize: 14,
    fontFamily: "BeVietnamPro-SemiBold",
    color: "#333",
    marginBottom: 6,
  },
  inputBox: {
    backgroundColor: "#FAFAFA",
    borderRadius: 10,
    paddingHorizontal: 14,
    paddingVertical: 12,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  inputText: {
    fontSize: 14,
    color: "#000",
    fontFamily: "BeVietnamPro-Regular",
  },
  modalOverlay: {
    flex: 1,
    justifyContent: "flex-end",
    backgroundColor: "rgba(0,0,0,0.3)",
  },
  pickerContainer: {
    backgroundColor: "#fff",
    borderTopLeftRadius: 18,
    borderTopRightRadius: 18,
    paddingHorizontal: 16,
    paddingTop: 10,
    paddingBottom: 20,
  },
  modalHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingBottom: 12,
  },
  modalTitle: {
    fontSize: 16,
    fontFamily: "BeVietnamPro-Bold",
    color: "#333",
  },
  picker: {
    backgroundColor: "#fff",
  },
  btnConfirm: {
    marginTop: 16,
    backgroundColor: "#000",
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: "center",
  },
  btnConfirmText: {
    color: "#fff",
    fontSize: 14,
    fontFamily: "BeVietnamPro-SemiBold",
  },
});

