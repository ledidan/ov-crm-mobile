import React from "react";
import { View, StyleSheet } from "react-native";
import StatBox from "../../fields/StatBox";

const StatSection = ({ navigation }) => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.row}>
        <StatBox
          colors={["#3A7BD5", "#00d2ff"]}
          title="Khách hàng mới"
          subtitle="1 Khách hàng"
          number="1"
          onPress={() => navigation.navigate("NewCustomerReport")}
        />
        <StatBox
          colors={["#f7971e", "#ffd200"]}
          title="Tương tác"
          subtitle="2 Khách hàng"
          number="2"
          icon={require("../../../assets/icons/trophy-100x100.png")}
          onPress={() => navigation.navigate("InteractionReport")}
        />
      </View>
      <View style={styles.row}>
        <StatBox
          colors={["#00c6ff", "#0072ff"]}
          title="Hoạt động"
          subtitle="1 Hoạt động"
          number="3"
          icon={require("../../../assets/icons/trophy-100x100.png")}
          onPress={() => navigation.navigate("ActivityReport")}
        />
        <StatBox
          colors={["#7F00FF", "#E100FF"]}
          title="Đơn hàng"
          subtitle="0 Đơn hàng"
          number="4"
          icon={require("../../../assets/icons/trophy-100x100.png")}
          onPress={() => navigation.navigate("OrderReport")}
        />
      </View>
      <View style={styles.full}>
        <StatBox
          colors={["#00c9ff", "#92fe9d"]}
          title="Doanh thu"
          subtitle="0 ₫"
          number="5"
          icon={require("../../../assets/icons/trophy-100x100.png")}
          onPress={() => navigation.navigate("RevenueReport")}
        />
      </View>
    </View>
  );
};

export default StatSection;

const styles = StyleSheet.create({
  wrapper: { padding: 12 },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 12,
    marginBottom: 12,
  },
  full: {
    width: "100%",
  },
});
