import React from "react";
import { View, Text, StyleSheet } from "react-native";

const PaymentInfo = () => {
  return (
    <View style={styles.container}>
      <View style={styles.detailBox}>
        <Text style={styles.title}>Chi tiết thanh toán</Text>
        <Text>Tổng tiền sản phẩm: 200,640 đ</Text>
        <Text>Phí vận chuyển: 0 đ</Text>
        <Text>Chiết khấu: 0 đ</Text>
        <Text>VAT: 0 đ</Text>
        <Text>Phí lắp đặt: 0 đ</Text>
        <Text>Phương thức thanh toán: Chưa cập nhật</Text>
      </View>
      <View style={styles.card}>
        <Text style={styles.label}>Mã đơn hàng: DH0001</Text>
        <Text style={styles.label}>Ngày đặt hàng: 29/06/2025</Text>
        <Text style={styles.label}>
          Trạng thái thanh toán:{" "}
          <Text style={{ fontWeight: "bold" }}>Chưa thanh toán</Text>
        </Text>
        <Text style={styles.label}>Tổng tiền sản phẩm: 200,640 đ</Text>
        <Text style={styles.label}>Còn nợ: 200,640 đ</Text>
      </View>
    </View>
  );
};

export default PaymentInfo;

const styles = StyleSheet.create({
  detailBox: { backgroundColor: "#FFFFFF", padding: 16, borderRadius: 10, marginBottom: 20 },
  card: {
    padding: 16,
    backgroundColor: "#fff",
    borderRadius: 8,
    marginBottom: 16,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 2,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 8,
  },
  label: {
    fontSize: 14,
    marginBottom: 8,
  },
});
