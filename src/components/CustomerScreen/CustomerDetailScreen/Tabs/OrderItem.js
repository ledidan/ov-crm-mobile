import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { formatCurrency } from "@/utils/format";
import { Ionicons } from "@expo/vector-icons";

const OrderItem = ({ order = {} }) => {
  return (
    <View style={styles.card}>
      <View style={styles.statusTag}>
        <Text style={styles.statusText}>Đã duyệt</Text>
      </View>

      <View style={styles.rowBetween}>
        <Text style={styles.orderCode}>{order.code}</Text>
        <Ionicons name="ellipsis-vertical" size={18} color="#666" />
      </View>

      <View style={styles.infoRow}>
        <Ionicons name="person-outline" size={14} color="#999" />
        <Text style={styles.infoLabel}>Khách hàng</Text>
        <Text style={styles.infoValue}>{order.customer}</Text>
      </View>

      <View style={styles.infoRow}>
        <Ionicons name="time-outline" size={14} color="#999" />
        <Text style={styles.infoLabel}>Ngày đặt hàng</Text>
        <Text style={styles.infoValue}>{order.orderDate}</Text>
      </View>

      <View style={styles.infoRow}>
        <Ionicons name="person-circle-outline" size={14} color="#999" />
        <Text style={styles.infoLabel}>Người phụ trách</Text>
        <Text style={styles.infoValue}>{order.owner}</Text>
      </View>

      <View style={styles.amountBox}>
        <View style={styles.amountItem}>
          <Text style={styles.amountLabel}>Tổng tiền</Text>
          <Text style={styles.amountValue}>{formatCurrency(order.total)}</Text>
        </View>
        <View style={styles.amountItem}>
          <Text style={styles.amountLabel}>Đã thanh toán</Text>
          <Text style={styles.amountValue}>{formatCurrency(order.paid)}</Text>
        </View>
        <View style={styles.amountItem}>
          <Text style={styles.amountLabel}>Còn lại</Text>
          <Text style={styles.amountValue}>{formatCurrency(order.remaining)}</Text>
        </View>
      </View>
    </View>
  );
};

export default OrderItem;

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#F9F9FB",
    borderRadius: 10,
    padding: 16,
    marginHorizontal: 10,
    marginBottom: 12,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    elevation: 2,
  },
  statusTag: {
    alignSelf: "flex-start",
    backgroundColor: "#00695C",
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
    marginBottom: 6,
  },
  statusText: {
    color: "#fff",
    fontSize: 12,
    fontWeight: "500",
  },
  orderCode: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#222",
  },
  rowBetween: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  infoRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 6,
  },
  infoLabel: {
    marginLeft: 4,
    color: "#999",
    fontSize: 13,
    marginRight: 6,
  },
  infoValue: {
    fontSize: 13,
    fontWeight: "600",
    color: "#111",
  },
  amountBox: {
    marginTop: 12,
    backgroundColor: "#fff",
    borderRadius: 8,
    padding: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  amountItem: {
    alignItems: "center",
  },
  amountLabel: {
    fontSize: 12,
    color: "#888",
  },
  amountValue: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#111",
    marginTop: 2,
  },
});
