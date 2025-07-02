import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import HomeScreen from "../screens/HomeScreen";
import CustomerScreenComponent from "../components/CustomerScreen";
import ActivityScreen from "../screens/ActivityScreen";
import NotificationScreen from "../screens/NotificationScreen";
import QuotationScreen from "../screens/QuotationScreen";
import ReportScreen from "../screens/ReportScreen";
import ExtendScreen from "@/screens/ExtendScreen";

const Tab = createBottomTabNavigator();

export default function BottomTabNavigator({ navigation }) {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, focused }) => {
          let iconName = "home-outline"; // fallback

          switch (route.name) {
            case "Trang chủ":
              iconName = focused ? "home" : "home-outline";
              break;
            case "Khách hàng":
              iconName = focused ? "people" : "people-outline";
              break;
            case "Công việc":
              iconName = focused ? "briefcase" : "briefcase-outline";
              break;
            case "Báo giá":
              iconName = focused ? "bar-chart" : "bar-chart-outline";
              break;
            case "Thông báo":
              iconName = focused ? "notifications" : "notifications-outline";
              break;
            case "Mở rộng":
              iconName = focused
                ? "ellipsis-horizontal-circle"
                : "ellipsis-horizontal-circle-outline";
              break;
          }
          return <Ionicons name={iconName} size={22} color={color} />;
        },
        tabBarActiveTintColor: "#007AFF",
        tabBarInactiveTintColor: "gray",
        headerShown: false,
        tabBarLabelStyle: {
          fontSize: 10,
          fontFamily: "BeVietnamPro-SemiBold",
        },
        tabBarStyle: {
          borderTopWidth: 1,
          borderTopColor: "#efefef",
          height: 100,
          width: "100%",
          paddingTop: 5,
          paddingBottom: 5,
        },
      })}
    >
      <Tab.Screen name="Trang chủ" component={HomeScreen} />
      <Tab.Screen name="Khách hàng" component={CustomerScreenComponent} />
      <Tab.Screen name="Công việc" component={ActivityScreen} />
      <Tab.Screen name="Báo giá" component={QuotationScreen} />
      <Tab.Screen name="Thông báo" component={NotificationScreen} />
      <Tab.Screen name="Mở rộng" component={ExtendScreen} />
    </Tab.Navigator>
  );
}
