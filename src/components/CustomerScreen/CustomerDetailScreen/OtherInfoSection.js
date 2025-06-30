import React from "react";
import { View, Text, StyleSheet } from "react-native";

const OtherInfoSection = ({ info = {} }) => {
  const renderRow = (label, value) => (
    <View style={styles.row} key={label}>
      <Text style={styles.label}>{label}</Text>
      <Text style={[styles.value, !value && styles.placeholder]}>
        {value || "Chưa cập nhật"}
      </Text>
    </View>
  );

  return (
    <View style={styles.container}>
      {renderRow("Mã KH", info.customerCode)}
      {renderRow("Người phụ trách", info.owner)}
      {renderRow("Sinh nhật", info.birthday)}
      {renderRow("Fax", info.fax)}
      {renderRow("Quốc gia", info.country)}
      {renderRow("Tỉnh/thành phố", info.city)}
      {renderRow("Quận/huyện", info.district)}
      {renderRow("Giới tính", info.gender)}
      {renderRow("Mã tiếp thị liên kết", info.refCode)}
      {renderRow("Người tạo", info.createdBy)}
      {renderRow("Liên hệ lần cuối", info.lastContact)}
      {renderRow("Số đơn hàng", info.totalOrders)}
      {renderRow("Tổng doanh thu", info.totalRevenue)}
      {renderRow("Tổng số tương tác", info.totalInteractions)}
      {renderRow("Giá trị", info.value)}
      {renderRow("Kinh độ", info.longitude)}
      {renderRow("Vĩ độ", info.latitude)}
      {renderRow("Phường/Xã", info.ward)}
      {renderRow("Trao đổi gần nhất", info.lastNote)}
      {renderRow("Điểm thưởng", info.loyaltyPoint)}
    </View>
  );
};

export default OtherInfoSection;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: "#fff",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 6,
  },
  label: {
    fontSize: 14,
    color: "#111",
    fontWeight: "bold",
  },
  value: {
    fontSize: 14,
    color: "#111",
    fontWeight: "600",
  },
  placeholder: {
    color: "#999",
    fontWeight: "400",
  },
});
