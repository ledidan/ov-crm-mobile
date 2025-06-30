import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const IndexSection = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.completion}>Mức độ hoàn thiện hồ sơ: 29%</Text>
      <View style={styles.row}>
        <View style={styles.stat}>
          <Ionicons name="call" size={24} color="#2F80ED" />
          <Text style={styles.label}>Liên hệ lần cuối</Text>
          <Text style={styles.value}>14</Text>
        </View>
        <View style={styles.stat}>
          <Ionicons name="sync" size={24} color="#2F80ED" />
          <Text style={styles.label}>Tổng số tương tác</Text>
          <Text style={styles.value}>5</Text>
        </View>
        <View style={styles.stat}>
          <Ionicons name="cart" size={24} color="#2F80ED" />
          <Text style={styles.label}>Đã mua</Text>
          <Text style={styles.value}>0</Text>
        </View>
      </View>
      <View style={styles.orderValue}>
        <Image
          source={require("../../../../assets/icons/trophy-100x100.png")}
          style={styles.icon}
        />
        <Text style={styles.orderText}>Giá trị đơn hàng</Text>
        <Text style={styles.orderAmount}>0 ₫</Text>
      </View>
    </View>
  );
};

export default IndexSection;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
  },
  completion: {
    backgroundColor: "#E0F7EC",
    padding: 6,
    borderRadius: 6,
    textAlign: "center",
    marginBottom: 12,
    color: "#333",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 16,
  },
  stat: {
    alignItems: "center",
    flex: 1,
  },
  label: {
    fontSize: 12,
    color: "#333",
    marginTop: 4,
  },
  value: {
    fontSize: 14,
    fontWeight: "bold",
    marginTop: 2,
  },
  orderValue: {
    backgroundColor: "#00c9ff",
    borderRadius: 8,
    padding: 12,
    alignItems: "center",
  },
  icon: {
    width: 40,
    height: 40,
    marginBottom: 4,
  },
  orderText: {
    color: "#fff",
    fontWeight: "600",
    marginBottom: 2,
  },
  orderAmount: {
    fontSize: 16,
    color: "#fff",
    fontWeight: "bold",
  },
});
