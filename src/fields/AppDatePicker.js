import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Platform,
  Modal,
} from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import { Ionicons } from "@expo/vector-icons";

export default function AppDatePicker({ label, value, onChange }) {
  const [show, setShow] = useState(false);
  const [tempDate, setTempDate] = useState(value || new Date());

  const handleAndroidChange = (event, selectedDate) => {
    setShow(false);
    if (event.type === "set" && selectedDate) {
      onChange?.(selectedDate);
    }
  };

  const handleIOSChange = (event, selectedDate) => {
    if (selectedDate) setTempDate(selectedDate);
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
          mode="date"
          display="default"
          onChange={handleAndroidChange}
        />
      )}
      {Platform.OS === "ios" && (
        <Modal
          transparent
          visible={show}
          animationType="slide"
          onRequestClose={() => setShow(false)}
          onDismiss={() => setShow(false)}
        >
          <View style={styles.modalOverlay}>
            <View style={styles.pickerContainer}>
              <View style={styles.modalHeader}>
                <Text style={styles.modalTitle}>Chọn thời gian</Text>
                <TouchableOpacity onPress={() => setShow(false)}>
                  <Ionicons name="close" size={26} />
                </TouchableOpacity>
              </View>

              <DateTimePicker
                value={tempDate}
                display="spinner"
                mode="datetime"
                onChange={handleIOSChange}
                style={styles.picker}
                themeVariant="light"
                locale="vi-vn"
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
    width: "100%",
    backgroundColor: "#fff",
    borderTopLeftRadius: 18,
    borderTopRightRadius: 18,
    paddingHorizontal: 16,
    paddingTop: 20,
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
