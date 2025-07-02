import React from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const ManagerInfo = () => {
  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>

        <View style={styles.avatarWrapper}>
          <View style={styles.avatar}>
            <Icon name="account" size={48} color="#888" />
          </View>
          <TouchableOpacity style={styles.cameraIcon}>
            <Icon name="camera" size={20} color="#fff" />
          </TouchableOpacity>
        </View>

        <Text style={styles.label}>
          Họ và tên <Text style={styles.required}>*</Text>
        </Text>
        <TextInput style={styles.input} value="Đan Lê" />

        <Text style={styles.label}>
          Email <Text style={styles.required}>*</Text>
        </Text>
        <TextInput
          style={styles.input}
          value="Binbon123123123@gmail.com"
          keyboardType="email-address"
        />
        <Text style={styles.note}>Thông tin hệ thống sẽ được gửi về email này</Text>

        <Text style={styles.label}>
          Số điện thoại <Text style={styles.required}>*</Text>
        </Text>
        <View style={styles.phoneWrapper}>
          <View style={styles.flagBox}>
            <Text style={{ fontSize: 16 }}>🇻🇳 VIE</Text>
          </View>
          <Text style={{ marginHorizontal: 6 }}>(+84)</Text>
          <TextInput style={[styles.input, { flex: 1 }]} value="3865845785" keyboardType="phone-pad" />
        </View>

        <Text style={styles.label}>
          Tính năng bạn muốn trải nghiệm <Text style={styles.required}>*</Text>
        </Text>
        <View style={styles.tagWrapper}>
          {["Khách hàng", "Công việc", "KPI"].map((tag, i) => (
            <View key={i} style={styles.tag}>
              <Text style={styles.tagText}>{tag}</Text>
            </View>
          ))}
          <View style={styles.tag}>
            <Text style={styles.tagText}>+8</Text>
          </View>
        </View>

        <Text style={styles.policy}>
          Bằng cách nhấp vào Tiếp tục, bạn sẽ đồng ý với chính sách của chúng tôi, bao gồm{" "}
          <Text style={styles.link}>Điều khoản sử dụng</Text> và{" "}
          <Text style={styles.link}>Chính sách quyền riêng tư</Text>
        </Text>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Tiếp tục</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default ManagerInfo;
const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    backgroundColor: "#fff",
  },
  container: {
    padding: 20,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 22,
    fontWeight: "700",
    marginTop: 10,
    marginBottom: 20,
    color: "#062a6d",
  },
  avatarWrapper: {
    alignItems: "center",
    marginBottom: 20,
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: "#eee",
    alignItems: "center",
    justifyContent: "center",
  },
  cameraIcon: {
    position: "absolute",
    bottom: 0,
    right: 100 - 80 / 2 + 20,
    backgroundColor: "#0d6efd",
    borderRadius: 15,
    padding: 6,
  },
  label: {
    fontWeight: "600",
    marginTop: 10,
    fontSize: 14,
  },
  required: {
    color: "red",
  },
  input: {
    backgroundColor: "#f7f8f9",
    borderRadius: 10,
    padding: 12,
    marginTop: 6,
  },
  note: {
    fontSize: 12,
    color: "#2980ef",
    marginBottom: 10,
  },
  phoneWrapper: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f7f8f9",
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 8,
    marginTop: 6,
  },
  flagBox: {
    backgroundColor: "#fff",
    paddingHorizontal: 6,
    paddingVertical: 4,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: "#ccc",
  },
  tagWrapper: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 10,
    gap: 6,
  },
  tag: {
    backgroundColor: "#0d6efd",
    paddingVertical: 6,
    paddingHorizontal: 10,
    borderRadius: 16,
  },
  tagText: {
    color: "#fff",
    fontSize: 13,
  },
  policy: {
    fontSize: 12,
    marginVertical: 20,
    color: "#333",
  },
  link: {
    color: "#0d6efd",
  },
  button: {
    backgroundColor: "#0d6efd",
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 10,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
});
