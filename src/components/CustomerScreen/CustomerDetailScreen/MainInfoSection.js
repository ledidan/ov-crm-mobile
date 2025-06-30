import React from "react";
import { View, Text, StyleSheet } from "react-native";

const MainInfoSection = ({ info = {} }) => {
  const renderRow = (label, value) => (
    <View style={styles.row}>
      <Text style={styles.label}>{label}</Text>
      <Text style={[styles.value, !value && styles.muted]}>
        {value || "Chưa cập nhật"}
      </Text>
    </View>
  );

  return (
    <View style={styles.container}>
      {renderRow("Email", info.email)}
      {renderRow("Điện thoại", info.phone)}
      {renderRow("Nguồn khách hàng", info.source)}
      {renderRow("Mã số thuế", info.taxCode)}
      {renderRow("Địa chỉ", info.address)}
      {renderRow("Nhóm khách hàng", info.group)}
      {renderRow("Ngành kinh doanh", info.industry)}
      {renderRow("Website", info.website)}
      {renderRow("Mô tả", info.description)}
    </View>
  );
};

export default MainInfoSection;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 8,
  },
  label: {
    fontSize: 14,
    color: "#111",
    fontWeight: "bold",
    flex: 1,
  },
  value: {
    fontSize: 14,
    color: "#111",
    flex: 1,
    textAlign: "right",
  },
  muted: {
    color: "#bbb",
  },
});
