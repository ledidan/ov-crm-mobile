import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import HomeScreen from "../screens/HomeScreen";
import ProfileScreen from "../screens/ProfileScreen";
import CustomerScreenComponent from "../components/CustomerScreen";
import ActivityScreen from "../screens/ActivityScreen";

const Tab = createBottomTabNavigator();

export default function BottomTabNavigator({ navigation }) {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName = "home-outline"; // fallback

          switch (route.name) {
            case "Trang chủ":
              iconName = "home-outline";
              break;
            case "Khách hàng":
              iconName = "people-outline";
              break;
            case "Công việc":
              iconName = "briefcase-outline";
              break;
            case "Báo giá":
              iconName = "bar-chart-outline";
              break;
            case "Thông báo":
              iconName = "notifications-outline";
              break;
            case "Mở rộng":
              iconName = "ellipsis-horizontal-circle-outline";
              break;
          }
          return <Ionicons name={iconName} size={20} color={color} />;
        },
        tabBarActiveTintColor: "#007AFF",
        tabBarInactiveTintColor: "gray",
        headerShown: false,
        tabBarLabelStyle: {
          fontSize: 9,
          fontFamily: "BeVietnamPro-SemiBold",
        },
        tabBarStyle: {
          height: 80,
          width: "100%",
          paddingVertical: 6,
        },
      })}
    >
      <Tab.Screen name="Trang chủ" component={HomeScreen} />
      <Tab.Screen name="Khách hàng" component={CustomerScreenComponent} />
      <Tab.Screen name="Công việc" component={ActivityScreen} />
      <Tab.Screen name="Báo giá" component={ProfileScreen} />
      <Tab.Screen name="Thông báo" component={ProfileScreen} />
      <Tab.Screen name="Mở rộng" component={ProfileScreen} />
    </Tab.Navigator>
  );
}
