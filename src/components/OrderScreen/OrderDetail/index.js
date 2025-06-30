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

const TABS = [
  "Thông tin",
  "Trao đổi",
  "Lịch sử thanh toán",
  "Tích điểm",
  "Tài liệu đính kèm",
];

const OrderDetailScreen = () => {
  const [activeTab, setActiveTab] = useState("Thông tin");
  const navigation = useNavigation();

  const renderTabContent = () => {
    switch (activeTab) {
      case "Thông tin":
        return <Info />
      case "Trao đổi":
        return <Text>Comming soon</Text>;
      case "Lịch sử thanh toán":
        return <Text>Comming soon</Text>;
      case "Tích điểm":
        return <Text>Comming soon</Text>;
      case "Tài liệu đính kèm":
        return <Text>Comming soon</Text>;
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
      <ScrollView contentContainerStyle={styles.content}>
        {renderTabContent()}
      </ScrollView>
    </View>
  );
};

export default OrderDetailScreen;

const styles = StyleSheet.create({
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
    paddingHorizontal: 7
  },
  activeTab: {
    color: "#007AFF",
    borderBottomWidth: 2,
    fontWeight: '600',
    borderBottomColor: "#007AFF",
  },
  content: {
    height: "100%",
  },
});
