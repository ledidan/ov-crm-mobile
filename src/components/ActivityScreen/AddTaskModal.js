// components/AddTaskModal.js
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
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [attachments, setAttachments] = useState([
    { id: "1", name: "5A1912FB-0A42...4E41C.jpg", type: ".jpg" },
  ]);

  const [relatedCustomer, setRelatedCustomer] = useState({
    name: "A Bin",
    contact: "Người liên hệ",
  });
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

        <ScrollView
          contentContainerStyle={styles.body}
          showsVerticalScrollIndicator={false}
        >
          {/* Dự án */}
          <AppSelect label="Dự án" placeholder="Công việc" />

          {/* Tên công việc */}
          <Text style={styles.label}>
            Tên công việc <Text style={styles.required}>*</Text>
          </Text>
          <TextInput placeholder="Tên công việc" style={styles.input} />
          <Text style={styles.helperText}>Còn lại 255 ký tự</Text>

          {/* Nội dung */}
          <Text style={styles.label}>Nội dung</Text>
          <TextInput
            placeholder="Nội dung"
            style={[styles.input, { height: 100 }]}
            multiline
          />

          <Text style={[styles.label, { marginTop: 20 }]}>
            Thời gian thực hiện
          </Text>
          <AppDatePicker
            label="Ngày bắt đầu"
            value={startDate}
            onChange={setStartDate}
          />
          <AppDatePicker
            label="Ngày kết thúc"
            value={endDate}
            onChange={setEndDate}
          />

          <Text style={[styles.label, { marginTop: 20 }]}>Giao việc</Text>
          <AppSelect label="Người thực hiện" placeholder="Chọn người" />
          <AppSelect label="Người tham gia" placeholder="Chọn người" />

          <Text style={styles.sectionTitle}>Tài liệu đính kèm</Text>
          {attachments.length > 0 ? (
            <View>
              {attachments.map((file) => (
                <View key={file.id} style={styles.attachmentItem}>
                  <Ionicons name="image-outline" size={20} color="#4CAF50" />
                  <Text numberOfLines={1} style={styles.attachmentName}>
                    {file.name}
                  </Text>
                  <TouchableOpacity
                    style={styles.removeIcon}
                    onPress={() =>
                      setAttachments((prev) =>
                        prev.filter((f) => f.id !== file.id)
                      )
                    }
                  >
                    <Ionicons name="close" size={18} color="#000" />
                  </TouchableOpacity>
                </View>
              ))}
              <TouchableOpacity style={styles.attachAction}>
                <Text style={styles.attachText}>+ Thêm tài liệu đính kèm</Text>
              </TouchableOpacity>
            </View>
          ) : (
            <TouchableOpacity style={styles.attachBox}>
              <Ionicons name="cloud-upload-outline" size={18} color="#1976D2" />
              <Text style={styles.attachText}>Thêm tài liệu</Text>
            </TouchableOpacity>
          )}
          <Text style={styles.sectionTitle}>Thông tin khác</Text>

          <Text style={styles.subLabel}>Khách hàng liên quan</Text>
          {relatedCustomer ? (
            <View>
              <View style={styles.customerBox}>
                <View style={{ flex: 1 }}>
                  <Text style={styles.customerName}>
                    {relatedCustomer.name}
                  </Text>
                  <Text style={styles.customerContact}>
                    {relatedCustomer.contact}
                  </Text>
                </View>
                <TouchableOpacity>
                  <Text style={styles.linkText}>{relatedCustomer.name} ➔</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setRelatedCustomer(null)}>
                  <Ionicons name="trash-outline" size={18} color="#000" />
                </TouchableOpacity>
              </View>
              <TouchableOpacity style={styles.attachAction}>
                <Text style={styles.attachText}>+ Thêm khách hàng</Text>
              </TouchableOpacity>
            </View>
          ) : (
            <TouchableOpacity style={styles.addBox}>
              <Ionicons name="people-outline" size={18} color="#1976D2" />
              <Text style={styles.attachText}>Thêm khách hàng</Text>
            </TouchableOpacity>
          )}

          <Text style={styles.subLabel}>Chọn màu công việc</Text>
          <View style={styles.colorRow}>
            {[
              "#635BFF",
              "#F7941D",
              "#A564F3",
              "#3AD29F",
              "#41C9E2",
              "#FFC727",
              "#F16A5B",
            ].map((color) => (
              <TouchableOpacity
                key={color}
                style={[styles.colorDot, { backgroundColor: color }]}
              />
            ))}
          </View>

          <AppSelect label="Loại công việc" placeholder="Công việc" />

          <View style={styles.row}>
            <View style={{ flex: 1, marginRight: 10 }}>
              <Text style={styles.subLabel}>Mã công việc</Text>
              <TextInput style={styles.input} placeholder="Nhập mã công việc" />
            </View>
            <View style={{ flex: 1 }}>
              <Text style={styles.subLabel}>Khối lượng công việc</Text>
              <TextInput
                style={styles.input}
                keyboardType="numeric"
                placeholder="0"
              />
            </View>
          </View>
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
    backgroundColor: "#f1f1f1",
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

  sectionTitle: {
    fontSize: 14,
    fontFamily: "BeVietnamPro-Bold",
    color: "#333",
    marginTop: 24,
    marginBottom: 12,
  },

  attachBox: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#1976D2",
    borderStyle: "dashed",
    borderRadius: 12,
    padding: 12,
    justifyContent: "center",
    marginBottom: 20,
  },

  addBox: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#1976D2",
    borderStyle: "dashed",
    borderRadius: 12,
    padding: 12,
    justifyContent: "center",
    marginBottom: 16,
  },

  attachText: {
    marginLeft: 6,
    color: "#1976D2",
    fontFamily: "BeVietnamPro-SemiBold",
    fontSize: 14,
  },

  subLabel: {
    fontSize: 13,
    fontFamily: "BeVietnamPro-SemiBold",
    color: "#333",
    marginBottom: 6,
    marginTop: 12,
  },

  colorRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 12,
  },

  colorDot: {
    width: 30,
    height: 30,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: "#ddd",
  },

  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 16,
  },

  // ** attachments + customers
  attachmentItem: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F5F5F5",
    borderRadius: 12,
    paddingVertical: 10,
    paddingHorizontal: 12,
    marginBottom: 8,
    position: "relative",
  },
  attachmentName: {
    flex: 1,
    marginLeft: 8,
    fontSize: 14,
    fontFamily: "BeVietnamPro-Regular",
    color: "#333",
  },
  removeIcon: {
    marginLeft: 8,
    padding: 4,
  },

  attachAction: {
    marginTop: 4,
    marginBottom: 20,
  },
  attachText: {
    fontSize: 14,
    fontFamily: "BeVietnamPro-SemiBold",
    color: "#1976D2",
  },

  customerBox: {
    backgroundColor: "#F5F5F5",
    borderRadius: 12,
    paddingVertical: 12,
    paddingHorizontal: 14,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
    gap: 10,
  },
  customerName: {
    fontSize: 14,
    fontFamily: "BeVietnamPro-SemiBold",
    color: "#000",
  },
  customerContact: {
    fontSize: 12,
    color: "#888",
    fontFamily: "BeVietnamPro-Regular",
  },
  linkText: {
    fontSize: 12,
    color: "#1976D2",
    fontFamily: "BeVietnamPro-Medium",
    marginRight: 10,
  },
});
