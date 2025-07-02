import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons"; // hoặc import icon lib bạn dùng
// import TabHeader from "@/components/common/TabHeader";
// import CustomerInfo from "./components/CustomerInfo";
// import PaymentSummary from "./components/PaymentSummary";
// import ExchangeTab from "./components/ExchangeTab";
import PaymentInfo from "./Tabs/PaymentInfo";
import Info from "./Tabs/Info";
import Conversation from "./Tabs/Conversation";
import { AppButton } from "@/fields";
import { formatCurrency } from "@/utils/format";
import PaymentHistory from "./Tabs/PaymentHistory";
import Ticket from "./Tabs/Ticket";
import Attachments from "./Tabs/Attachments";

const TABS = [
  "Thông tin",
  "Trao đổi",
  "Lịch sử thanh toán",
  "Ticket",
  "Tài liệu đính kèm",
];
const logs = [
  {
    name: "Đan Lê",
    action: "Duyệt đơn hàng",
    orderCode: "DH0001",
    timestamp: "29/06/2025 22:52:49",
  },
  {
    name: "Đan Lê",
    action: "Tạo đơn hàng",
    orderCode: "DH0001",
    timestamp: "29/06/2025 22:52:49",
  },
];

const OrderDetailScreen = () => {
  const [activeTab, setActiveTab] = useState("Thông tin");

  const renderTabContent = () => {
    switch (activeTab) {
      case "Thông tin":
        return <Info />;
      case "Trao đổi":
        return <Conversation logs={logs} />;
      case "Lịch sử thanh toán":
        return (
          <PaymentHistory
            payment={{
              total: 200640,
              paid: 0,
              list: [],
            }}
          />
        );
      case "Ticket":
        return <Ticket />;
      case "Tài liệu đính kèm":
        return <Attachments />;
      default:
        return null;
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView
        horizontal
        style={styles.tabs}
        showsHorizontalScrollIndicator={false}
      >
        {TABS.map((tab) => (
          <TouchableOpacity key={tab} onPress={() => setActiveTab(tab)}>
            <Text
              style={[styles.tabText, activeTab === tab && styles.activeTab]}
            >
              {tab}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
      <View style={styles.content}>
        {renderTabContent()}
        {!activeTab.includes("Trao đổi") && (
          <View style={styles.footer}>
            <View style={styles.totalBox}>
              <View style={styles.boxLeft}>
                <View style={styles.boxLeftInner}>
                  <Ionicons name="cart-outline" size={22} />
                  <View>
                    <Text style={styles.totalLabel}>Tổng giá trị đơn hàng</Text>
                    <Text style={styles.totalPrice}>
                      {formatCurrency(3214124)}
                    </Text>
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
                <Ionicons
                  name="document-text-outline"
                  size={20}
                  color={"white"}
                />
                <Text style={styles.exportText}>Xuất hoá đơn</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      </View>
    </View>
  );
};

export default OrderDetailScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    paddingHorizontal: 16,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderBottomColor: "#eee",
    borderBottomWidth: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 16,
  },
  tabs: {
    flexDirection: "row",
    backgroundColor: "#FFFF",
    paddingHorizontal: 12,
    borderBottomColor: "#eee",
    borderBottomWidth: 2,
  },
  tabText: {
    marginRight: 16,
    fontSize: 16,
    color: "gray",
    paddingVertical: 16,
    paddingHorizontal: 7,
  },
  activeTab: {
    color: "#007AFF",
    borderBottomWidth: 2,
    fontWeight: "600",
    borderBottomColor: "#007AFF",
  },
  content: {
    flex:9999
  },
  footer: {
    borderTopWidth: 1,
    borderColor: "#eee",
    backgroundColor: "#fff",
    paddingBottom: 40,
    paddingHorizontal: 14,
    shadowColor: "#000",
    shadowOpacity: 1,
    shadowOffset: { width: 0, height: 8 },
    shadowRadius: 6,
    elevation: 2,
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
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
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
  boxLeft: {
    flexDirection: "row",
    alignItems: "center",
  },
  boxLeftInner: {
    flexDirection: "row",
    alignItems: "center",
    gap: 20,
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
});
