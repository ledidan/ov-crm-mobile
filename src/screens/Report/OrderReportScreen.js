import React from "react";
import { View, Text, StyleSheet } from "react-native";

const OrderReportScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Đơn hàng</Text>
      {[
        "Đơn hàng",
        "Hợp đồng",
        "Tỷ lệ số ĐH / Số KH mua hàng",
        "Tỷ lệ",
        "Tần suất mua hàng",
        "Một lần",
        "Nhiều lần",
        "Theo hợp đồng",
        "Tái ký",
        "Đã hết hạn",
        "Thanh toán",
        "Đã thanh toán",
      ].map((item) => (
        <View style={styles.row} key={item}>
          <Text>{item}</Text>
          <Text>0</Text>
        </View>
      ))}
    </View>
  );
};

export default OrderReportScreen;

const styles = StyleSheet.create({
  container: { padding: 16 },
  title: { fontWeight: "bold", fontSize: 16, marginBottom: 12 },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 4,
  },
});
