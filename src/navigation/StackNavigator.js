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
import OrderScreen from "@/screens/OrderScreen";
import CreateSalesOrderScreen from "@/screens/CreateSalesOrderScreen";
import ChatScreen from "@/screens/ChatScreen";
import ContactSyncScreen from "@/screens/ContactAsyncScreen";
import ContactAssignScreen from "@/screens/ContactAssignScreen";
import SyncResultScreen from "@/screens/SyncResultScreen";
import AccountScreen from "@/screens/AccountScreen";
import ManagerInfoScreen from "@/screens/ManagerInfoScreen";
import CreateCustomerScreen from "@/screens/CreateCustomerScreen";
import NewCustomerReportScreen from "@/screens/Report/NewCustomerReportScreen";
import InteractionReportScreen from "@/screens/Report/InteractionReportScreen";
import ActivityReportScreen from "@/screens/Report/ActivityReportScreen";
import OrderReportScreen from "@/screens/Report/OrderReportScreen";
import RevenueReportScreen from "@/screens/Report/RevenueReportScreen";
import { theme } from "@/theme";

const Stack = createNativeStackNavigator();

export default function StackNavigator() {
  return (
    <Stack.Navigator initialRouteName="Trang chủ"
    screenOptions={{
      headerStyle: {
        backgroundColor: theme.colors.primary,
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
        fontSize: 20,
      },
      headerTitleAlign: 'center',
    }}
    >
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{ headerShown: false }}
      />
      {/* ** Report  */}
      <Stack.Screen
        name="NewCustomerReport"
        component={NewCustomerReportScreen}
        options={{ title: "Báo cáo khách hàng mới", }}
      />
      <Stack.Screen
        name="InteractionReport"
        component={InteractionReportScreen}
        options={{ title: "Báo cáo tương tác" }}
      />
      <Stack.Screen
        name="ActivityReport"
        component={ActivityReportScreen}
        options={{ title: "Báo cáo hoạt động" }}
      />
      <Stack.Screen
        name="OrderReport"
        component={OrderReportScreen}
        options={{ title: "Báo cáo đơn hàng" }}
      />
      <Stack.Screen
        name="RevenueReport"
        component={RevenueReportScreen}
        options={{ title: "Báo cáo doanh thu" }}
      />
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
      <Stack.Screen
        name="SyncResultCustomer"
        component={SyncResultScreen}
        options={{ headerShadow: false, title: "Kết quả đồng bộ" }}
      />
      <Stack.Screen
        name="CreateCustomer"
        component={CreateCustomerScreen}
        options={{ title: "Tạo khách hàng" }}
      />

      {/* Activity */}
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
        component={OrderScreen}
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
      <Stack.Screen
        name="Tạo đơn hàng"
        component={CreateSalesOrderScreen}
        options={{ headerShown: true }}
      />
      {/* Chat  */}
      <Stack.Screen
        name="Chat"
        component={ChatScreen}
        options={{ headerShown: true }}
      />
      {/* Contacts */}
      <Stack.Screen
        name="ContactAsync"
        component={ContactSyncScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ContactAssign"
        component={ContactAssignScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
