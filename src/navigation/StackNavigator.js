import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "../screens/LoginScreen";
import BottomTabNavigator from "./BottomTabNavigator";
import CustomerScreen from "../screens/CustomerScreen";
import CustomerDetailScreen from "../screens/CustomerDetailScreen";

const Stack = createNativeStackNavigator();

export default function StackNavigator() {
  return (
    <Stack.Navigator initialRouteName="Trang chủ">
      {/* <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{ headerShown: false }}
      /> */}
      <Stack.Screen
        name="Trang chủ"
        component={BottomTabNavigator}
        style={{}}
        options={{ headerShown: false }}
      />
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
    </Stack.Navigator>
  );
}
