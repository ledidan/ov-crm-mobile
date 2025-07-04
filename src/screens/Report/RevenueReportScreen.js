import React from "react";
import { View, Text, StyleSheet } from "react-native";

const RevenueReportScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Doanh thu</Text>
      <View style={styles.row}>
        <Text>Đã thanh toán</Text>
        <Text>0 ₫ (0%)</Text>
      </View>
      <View style={styles.row}>
        <Text>Chưa thanh toán</Text>
        <Text>0 ₫ (0%)</Text>
      </View>
    </View>
  );
};

export default RevenueReportScreen;

const styles = StyleSheet.create({
  container: { padding: 16 },
  title: { fontWeight: "bold", fontSize: 16, marginBottom: 12 },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 4,
  },
});
