import AdditionalInfoTab from "@/components/CustomerScreen/CreateCustomer/AdditionalInfoTab";
import CustomerInfoTab from "@/components/CustomerScreen/CreateCustomer/CustomerInfoTab";
import { AppButton } from "@/fields";
import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const TABS = ["Khách hàng", "Bổ sung"];

export default function CreateCustomerScreen() {
  const [activeTab, setActiveTab] = useState("Khách hàng");

  const renderTab = () => {
    switch (activeTab) {
      case "Khách hàng":
        return <CustomerInfoTab />;
      case "Bổ sung":
        return <AdditionalInfoTab />;
      default:
        return null;
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.tabRow}>
        {TABS.map((tab) => (
          <TouchableOpacity
            key={tab}
            style={[styles.tabItem, activeTab === tab && styles.activeTab]}
            onPress={() => setActiveTab(tab)}
          >
            <Text
              style={activeTab === tab ? styles.tabTextActive : styles.tabText}
            >
              {tab}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
      {renderTab()}
      <View style={styles.actionFooter}>
        <AppButton
          title="Tạo khách hàng"
          onPress={() => console.log("tao kahch hag")}
          style={styles.actionButton}
          startIcon={true}
          iconName={"add"}
          iconSize={20}
          iconColor="white"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },
  tabRow: {
    flexDirection: "row",
    justifyContent: "start",
    gap: 50,
    paddingHorizontal: 10,
    borderBottomWidth: 1,
    borderColor: "#eee",
  },
  tabItem: {
    paddingVertical: 10,
    paddingHorizontal: 50,
  },
  activeTab: {
    borderBottomWidth: 2,
    borderColor: "#007AFF",
  },
  tabText: {
    fontSize: 15,
    color: "#999",
  },
  tabTextActive: {
    fontSize: 15,
    color: "#007AFF",
    fontWeight: "600",
  },
  actionFooter: {
    marginBottom: 20,
  },
  actionButton: {
    borderRadius: 0,
    paddingVertical: 20,
    marginBottom: 0,
  },
});
