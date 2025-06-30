import React from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { theme } from "@/theme";
import OrderItem from "./OrderItem";
import { AppButton } from "@/fields";

const orders = [
  {
    id: 1,
    code: "DH0001",
    customer: "A Bin",
    orderDate: "29/06/2025",
    owner: "Đan Lê",
    total: 200640,
    paid: 0,
    remaining: 200640,
  },
];

const Order = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.bar}>
        <Text style={styles.title}>Đơn hàng </Text>
        <TouchableOpacity onPress={() => navigation.navigate("AddOrder")}>
          <AppButton
            title="Thêm đơn hàng"
            size="small"
            iconName={"add-outline"}
            iconSize={16}
            startIcon={true}
            iconColor="white"
          />
        </TouchableOpacity>
      </View>
      <ScrollView>
        {orders.map((order) => (
          <TouchableOpacity
            key={order.id}
            onPress={() => navigation.navigate("OrderDetailScreen")}
          >
            <OrderItem key={order.id} order={order} />
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

export default Order;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  bar: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    paddingVertical: 10,
    marginBottom: 20,
  },
  title: {
    fontWeight: 700,
    fontSize: 16,
  },
});
