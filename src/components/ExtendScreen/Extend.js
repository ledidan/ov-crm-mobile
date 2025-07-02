import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import IconBox from "../../fields/IconBox";

const Extend = () => {
  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        <Text style={styles.sectionTitle}>Kho</Text>
        <View style={styles.grid}>
          <IconBox iconName="warehouse" title="Kho" />
          <IconBox iconName="arrow-down-bold" title="Nhập kho" />
          <IconBox iconName="arrow-up-bold" title="Xuất kho" />
          <IconBox iconName="swap-horizontal" title="Chuyển kho" />
          <IconBox iconName="cube-outline" title="Tồn kho" />
          <IconBox iconName="clipboard-list-outline" title="Kiểm kho" />
          <IconBox iconName="card-account-details-outline" title="Thẻ Kho" />
          <IconBox iconName="cart-outline" title="Bảng Xuất Nhập Tồn" />
        </View>

        <Text style={styles.sectionTitle}>Chăm sóc khách hàng</Text>
        <View style={styles.grid}>
          <IconBox iconName="phone-in-talk" title="Tổng đài" />
          <IconBox iconName="ticket-outline" title="Ticket" />
        </View>

        <Text style={styles.sectionTitle}>Tài chính kế toán</Text>
        <View style={styles.grid}>
          <IconBox iconName="home-currency-usd" title="Trang chủ tài chính" />
          <IconBox iconName="book-open-page-variant" title="Sổ cái" />
          <IconBox iconName="cash" title="Quỹ" />
          <IconBox iconName="chart-pie" title="Ngân sách" />
          <IconBox iconName="file-download-outline" title="Phiếu thu" />
          <IconBox iconName="file-upload-outline" title="Phiếu chi" />
          <IconBox iconName="receipt-outline" title="YC Chi phí" />
          <IconBox iconName="file-document-outline" title="Công nợ" />
        </View>
      </View>
    </ScrollView>
  );
};

export default Extend;

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    backgroundColor: "#fff",
  },
  container: {
    marginTop:20,
    padding: 16,
    backgroundColor: "#fff",
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "700",
    marginVertical: 10,
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
});
