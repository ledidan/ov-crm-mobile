import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, FlatList } from "react-native";
import Modal from "react-native-modal";
import { Ionicons, Feather } from "@expo/vector-icons";

const actions = [
  { label: "Gửi email", icon: "mail-outline" },
  { label: "Gửi SMS", icon: "chatbox-outline" },
  { label: "Tạo cơ hội", icon: "key-outline" },
  { label: "Tạo công việc", icon: "briefcase-outline" },
  // { label: "Mối quan hệ", icon: "link-outline" },
  { label: "Nhóm khách hàng", icon: "people-outline" },
  { label: "Người phụ trách", icon: "person-outline" },
  { label: "Người xem", icon: "eye-outline" },
  // { label: "Lịch đi tuyến", icon: "percent-outline" },
  { label: "Xóa nhiều", icon: "trash-outline" },
];

const ActionModal = ({ visible, onClose, onAction }) => {
  return (
    <Modal
      isVisible={visible}
      onBackdropPress={onClose}
      style={styles.modal}
      backdropOpacity={0.4}
    >
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>Hành động</Text>
          <TouchableOpacity onPress={onClose}>
            <Feather name="x" size={24} color="#333" />
          </TouchableOpacity>
        </View>

        {actions.map((action, idx) => (
          <TouchableOpacity
            key={idx}
            style={styles.item}
            onPress={() => onAction(action.label)}
          >
            <Ionicons name={action.icon} size={20} color="#333" style={{ marginRight: 12 }} />
            <Text style={styles.text}>{action.label}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </Modal>
  );
};

export default ActionModal;

const styles = StyleSheet.create({
  modal: {
    justifyContent: "flex-end",
    margin: 0,
  },
  container: {
    backgroundColor: "#fff",
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    paddingHorizontal: 20,
    paddingVertical: 20,
    maxHeight: "80%",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: "700",
    color: "#111",
  },
  item: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  text: {
    fontSize: 16,
    color: "#111",
  },
});
