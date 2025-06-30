// components/CustomerTabs.js
import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import Activity from "./Tabs/Activity";
import Detail from "./Tabs/Detail";
import Order from "./Tabs/Order";
import Others from "./Tabs/Others";

const TABS = ["Thông tin", "Hoạt động", "Đơn hàng", "Khác"];

const CustomerTabs = ({navigation}) => {
  const [activeTab, setActiveTab] = useState("Thông tin");

  const handleTabPress = (tab) => {
    setActiveTab(tab);
  };
  const renderTabContent = () => {
    switch (activeTab) {
      case "Hoạt động":
        return <Activity />;
      case "Thông tin":
        return <Detail />;
      case "Đơn hàng":
        return <Order navigation={navigation}/>;
      case "Khác":
        return <Others />;
      default:
        return null;
    }
  };
  return (
    <View style={styles.container}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.tabs}
      >
        {TABS.map((tab) => (
          <TouchableOpacity key={tab} onPress={() => handleTabPress(tab)}>
            <Text style={[styles.tab, activeTab === tab && styles.tabActive]}>
              {tab}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
      <View style={{ padding: 14 }}>{renderTabContent()}</View>
    </View>
  );
};

export default CustomerTabs;

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
  tabs: {
    width: "100%",
    flexDirection: "row",
    borderBottomWidth: 0.7,
    borderTopWidth: 0.7,
    borderColor: "#dededc",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingTop: 12,
  },
  tab: {
    fontSize: 14,
    fontFamily: "BeVietnamPro-Regular",
    color: "gray",
    paddingBottom: 12,
  },
  tabActive: {
    color: "#007AFF",
    borderBottomWidth: 1,
    borderColor: "#007AFF",
  },
});
