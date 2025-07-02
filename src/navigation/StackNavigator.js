import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "../screens/LoginScreen";
import BottomTabNavigator from "./BottomTabNavigator";
import CustomerScreen from "../screens/CustomerScreen";
import CustomerDetailScreen from "../screens/CustomerDetailScreen";
import ActivityDetailScreen from "../screens/ActivityDetailScreen";
import NotificationScreen from "../screens/NotificationScreen";
import QuotationScreen from "../screens/QuotationScreen";
import AddQuotationForm from "../components/Quotation/AddQuotationForm";
import OrderScreenComponent from "@/components/OrderScreen";
import OrderDetailScreen from "@/screens/OrderDetailScreen";
import AccountScreen from "@/screens/AccountScreen";
import ManagerInfoScreen from "@/screens/ManagerInfoScreen";

const Stack = createNativeStackNavigator();

export default function StackNavigator() {
  return (
    <Stack.Navigator initialRouteName="Trang chủ">
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Trang chủ"
        component={BottomTabNavigator}
        style={{}}
        options={{ headerShown: false }}
      />
      {/* ** Customer  */}
      <Stack.Screen
        name="Khách hàng"
        component={BottomTabNavigator}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="CustomerDetail"
        component={CustomerDetailScreen}
        options={{ title: "Chi tiết khách hàng" }}
      />
      <Stack.Screen
        name="ActivityDetail"
        component={ActivityDetailScreen}
        options={{ headerShown: false }}
      />
      {/* Notification */}
      <Stack.Screen
        name="Thông báo"
        component={NotificationScreen}
        options={{ headerShown: false }}
      />
      {/* Quote */}
      <Stack.Screen
        name="Báo giá"
        component={BottomTabNavigator}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="AddQuotationForm"
        component={AddQuotationForm}
        options={{ headerShown: false }}
      />
      {/* Order */}
      <Stack.Screen
        name="Đơn hàng"
        component={OrderScreenComponent}
        options={{ headerShown: true }}
      />
      <Stack.Screen
        name="Tài Khoản"
        component={AccountScreen}
        options={{ headerShown: true }}
      />
      <Stack.Screen
        name="Thông tin Admin"
        component={ManagerInfoScreen}
        options={{ headerShown: true }}
      />
      <Stack.Screen
        name="OrderDetailScreen"
        component={OrderDetailScreen}
        options={{ title: "Chi tiết đơn hàng", headerShown: true }}
      />
    </Stack.Navigator>
  );
}
