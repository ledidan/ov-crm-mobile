import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from "react-native";
import Modal from "react-native-modal"; 
import { Ionicons } from "@expo/vector-icons";
import AppSelect from "../../fields/AppSelect";
import AppDatePicker from "../../fields/AppDatePicker";

export default function AddTaskModal({ visible, onClose }) {
  const [selectedDate, setSelectedDate] = useState(new Date());

  return (
    <Modal
      isVisible={visible}
      onBackdropPress={onClose}
      onSwipeComplete={onClose}
      swipeDirection="down"
      style={styles.modal}
      backdropOpacity={0.3}
      animationIn="slideInUp"
      animationOut="slideOutDown"
      propagateSwipe
    >
      <View style={styles.modalContent}>
        <View style={styles.header}>
          <TouchableOpacity onPress={onClose}>
            <Ionicons name="arrow-back-outline" size={24} />
          </TouchableOpacity>
          <Text style={styles.title}>Thêm mới công việc</Text>
        </View>

        <ScrollView contentContainerStyle={styles.body} showsVerticalScrollIndicator={false}>
          <AppSelect label="Dự án" placeholder="Công việc" />

          <Text style={styles.label}>
            Tên công việc <Text style={styles.required}>*</Text>
          </Text>
          <TextInput placeholder="Tên công việc" style={styles.input} />
          <Text style={styles.helperText}>Còn lại 255 ký tự</Text>

          <Text style={styles.label}>Nội dung</Text>
          <TextInput
            placeholder="Nội dung"
            style={[styles.input, { height: 100 }]}
            multiline
          />

          <Text style={[styles.label, { marginTop: 20 }]}>Thời gian thực hiện</Text>
          <AppDatePicker
            label="Ngày bắt đầu"
            value={selectedDate}
            onChange={(newDate) => setSelectedDate(newDate)}
          />
          <AppDatePicker label="Ngày kết thúc" />

          <Text style={[styles.label, { marginTop: 20 }]}>Giao việc</Text>
          <AppSelect label="Người thực hiện" placeholder="Chọn người" />
          <AppSelect label="Người tham gia" placeholder="Chọn người" />
        </ScrollView>

        <TouchableOpacity style={styles.btnAdd}>
          <Text style={styles.btnAddText}>Thêm công việc</Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modal: {
    justifyContent: "flex-end",
    margin: 0,
  },
  modalContent: {
    height: "90%",
    backgroundColor: "#fff",
    borderTopLeftRadius: 18,
    borderTopRightRadius: 18,
    paddingBottom: 20,
    overflow: "hidden",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingTop: 16,
    paddingBottom: 12,
    paddingHorizontal: 20,
    borderBottomWidth: 0.5,
    borderBottomColor: "#e0e0e0",
  },
  title: {
    fontSize: 16,
    fontFamily: "BeVietnamPro-Bold",
    marginLeft: 12,
    color: "#333",
  },
  body: {
    paddingHorizontal: 20,
    paddingBottom: 30,
  },
  label: {
    fontSize: 14,
    fontFamily: "BeVietnamPro-SemiBold",
    color: "#333",
    marginBottom: 6,
    marginTop: 12,
  },
  required: {
    color: "red",
  },
  input: {
    backgroundColor: "#FAFAFA",
    borderRadius: 10,
    paddingHorizontal: 14,
    paddingVertical: 12,
    fontFamily: "BeVietnamPro-Regular",
    fontSize: 14,
    color: "#000",
  },
  helperText: {
    fontSize: 12,
    color: "#888",
    fontFamily: "BeVietnamPro-Regular",
    marginTop: 4,
  },
  btnAdd: {
    backgroundColor: "#000",
    paddingVertical: 16,
    marginHorizontal: 20,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 8,
  },
  btnAddText: {
    color: "#fff",
    fontSize: 14,
    fontFamily: "BeVietnamPro-SemiBold",
  },
});
