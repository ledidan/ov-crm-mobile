import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import CustomerInfo from "./CustomerInfo";
import { formatCurrency } from "@/utils/format";
import PaymentInfo from "./PaymentInfo";
import Collapsible from "react-native-collapsible";
import { Ionicons } from "@expo/vector-icons";
import { AppButton } from "@/fields";

const Info = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleExpand = (index) => {
    setExpandedIndex((prev) => (prev === index ? null : index));
  };

  const order = {
    code: "DH0001",
    orderDate: "29/06/2025",
    owner: "Đan Lê",
    status: "Đã duyệt",
    paymentStatus: "Chưa thanh toán",
    total: 200640,
    remaining: 200640,
    customer: {
      name: "A Bin",
      phone: "0385114940",
      email: null,
      address: null,
    },
    items: [
      {
        code: "SP0288482",
        name: "Tew",
        brand: "Okela",
        price: 100320,
        quantity: 2,
        unit: null,
        costPrice: 0,
        vat: 0,
        discountPercent: 0,
        discountAmount: 0,
      },
    ],
  };

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scroll}>
        {/* Header */}
        <View style={styles.section}>
          <Text style={styles.date}>Ngày đặt hàng: {order.orderDate}</Text>
          <View style={styles.row}>
            <Text style={styles.code}>{order.code}</Text>
            <View style={styles.statusBox}>
              <Text style={styles.statusText}>{order.status}</Text>
            </View>
          </View>
        </View>

        {/* Thông tin */}
        <View style={styles.section}>
          <Text style={styles.label}>Người phụ trách</Text>
          <Text style={styles.text}>{order.owner}</Text>

          <Text style={styles.label}>Trạng thái thanh toán</Text>
          <Text style={styles.text}>{order.paymentStatus}</Text>

          <Text style={styles.label}>Tổng tiền sản phẩm</Text>
          <Text style={styles.money}>{formatCurrency(order.total)}</Text>

          <Text style={styles.label}>Còn nợ</Text>
          <Text style={styles.money}>{formatCurrency(order.remaining)}</Text>
        </View>

        {/* Khách hàng */}
        <CustomerInfo customer={order.customer} />

        {/* Tóm tắt thanh toán */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Tóm tắt thanh toán</Text>
          {order.items.map((item, index) => (
            <View key={index} style={styles.itemBox}>
              <Text style={styles.itemTitle}>
                {item.code} - {item.name}
              </Text>
              <Text style={styles.brand}>{item.brand}</Text>

              <Collapsible collapsed={expandedIndex !== index}>
                <Text style={styles.line}>
                  Đơn vị: {item.unit ?? "Chưa cập nhật"}
                </Text>
                <Text style={styles.line}>
                  Đơn giá: {formatCurrency(item.price)}
                </Text>
                <Text style={styles.line}>
                  Giá nhập: {formatCurrency(item.costPrice)}
                </Text>
                <Text style={styles.line}>VAT: {item.vat}%</Text>
                <Text style={styles.line}>
                  Chiết khấu: {item.discountPercent}%
                </Text>
                <Text style={styles.line}>
                  Chiết khấu tiền: {formatCurrency(item.discountAmount)}
                </Text>
              </Collapsible>

              <Text style={styles.line}>Số lượng: {item.quantity}</Text>
              <Text style={styles.total}>
                Tổng tiền: {formatCurrency(order.total)}
              </Text>

              <TouchableOpacity onPress={() => toggleExpand(index)}>
                <Text style={styles.expand}>
                  {expandedIndex === index ? "Thu gọn ⏶" : "Mở rộng ⏷"}
                </Text>
              </TouchableOpacity>
            </View>
          ))}
        </View>
        <PaymentInfo />
      </ScrollView>
      <View style={styles.footer}>
        <View style={styles.totalBox}>
          <View style={styles.boxLeft}>
            <View style={styles.boxLeftInner}>
              <Ionicons name="cart-outline" size={22} />
              <View>
                <Text style={styles.totalLabel}>Tổng giá trị đơn hàng</Text>
                <Text style={styles.totalPrice}>{formatCurrency(3214124)}</Text>
              </View>
            </View>
          </View>
          <AppButton
            iconName={"chevron-forward-outline"}
            endIcon={true}
            title="Thanh toán"
            variant="contained"
            onPress={() => {}}
            size="small"
            iconColor="white"
            iconSize={16}
          />
        </View>

        <View style={styles.actions}>
          <TouchableOpacity style={styles.cancelBtn}>
            <Text style={styles.cancelText}>✕ Hủy</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.exportBtn}>
            <Ionicons name="document-text-outline" size={20} color={"white"}/>
            <Text style={styles.exportText}>Xuất hoá đơn</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Info;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scroll: {
    flex: 1,
    padding: 14,
  },
  section: {
    marginBottom: 20,
    backgroundColor: "#FFFFFF",
    paddingVertical: 16,
    paddingHorizontal: 12,
    borderRadius: 10,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  date: {
    color: "#777",
    fontSize: 13,
  },
  code: {
    fontSize: 16,
    fontWeight: "600",
  },
  statusBox: {
    backgroundColor: "#00695C",
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 6,
  },
  statusText: {
    color: "#fff",
    fontSize: 12,
  },
  label: {
    fontSize: 13,
    color: "#888",
    marginTop: 10,
  },
  text: {
    fontSize: 14,
    color: "#333",
  },
  money: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#000",
  },
  totalPrice: {
    fontWeight: "600",
    fontSize: 15,
    paddingVertical: 5,
    color: "#000",
  },
  totalBox: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 12,
  },
  boxLeft: {
    flexDirection: "row",
    alignItems: "center",
  },
  boxLeftInner: {
    flexDirection: "row",
    alignItems: "center",
    gap: 20,
  },
  sectionTitle: {
    fontWeight: "600",
    fontSize: 15,
    marginBottom: 10,
  },
  itemBox: {
    padding: 12,
    borderRadius: 8,
    shadowColor: "#00000020",
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 2 },
  },
  itemTitle: {
    fontWeight: "bold",
  },
  brand: {
    fontSize: 13,
    color: "#666",
  },
  line: {
    fontSize: 13,
    marginTop: 4,
    color: "#333",
  },
  total: {
    fontWeight: "600",
    marginTop: 8,
    fontSize: 14,
  },
  expand: {
    marginTop: 10,
    fontSize: 13,
    color: "#2196F3",
    textAlign: "right",
  },
  footer: {
    borderTopWidth: 1,
    borderColor: "#eee",
    backgroundColor: "#fff",
    paddingBottom: 70,
    paddingHorizontal: 14,
    marginBottom: 20,
  },
  footerTop: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 12,
  },
  footerLabel: {
    fontSize: 14,
    color: "#777",
  },
  footerTotal: {
    fontSize: 16,
    fontWeight: "bold",
  },
  actions: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  cancelBtn: {
    flex: 1,
    marginRight: 10,
    backgroundColor: "#f44336",
    padding: 12,
    borderRadius: 8,
  },
  exportBtn: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "#00B276",
    padding: 12,
    borderRadius: 8,
  },
  cancelText: {
    textAlign: "center",
    color: "#fff",
    fontWeight: "bold",
  },
  exportText: {
    textAlign: "center",
    color: "#fff",
    fontWeight: "bold",
  },
});
