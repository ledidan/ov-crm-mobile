import React from "react";
import { View, Text, StyleSheet } from "react-native";

const NewCustomerReportScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Khách hàng mới</Text>
      <View style={styles.row}>
        <Text>Không có nguồn</Text>
        <Text>3 (100%)</Text>
      </View>
    </View>
  );
};

export default NewCustomerReportScreen;

const styles = StyleSheet.create({
  container: { padding: 16 },
  title: { fontWeight: "bold", fontSize: 16, marginBottom: 12 },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
