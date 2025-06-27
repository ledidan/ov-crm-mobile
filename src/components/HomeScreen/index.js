import React from "react";
import { View, Text, StyleSheet, ScrollView, Pressable, Image } from "react-native";
import { theme } from "../../theme";
import { Ionicons } from "@expo/vector-icons";

const HomeScreenComponent = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.left}>
          <Image
            source={require("../../../assets/favicon.png")}
            style={styles.avatar}
          />
          <Text style={styles.name}>Đan Lê</Text>
        </View>

        <Pressable onPress={() => console.log("Chat pressed")}>
          <Ionicons name="chatbubble-ellipses-outline" size={22} color="#000" />
        </Pressable>
      </View>
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={theme.typography.h1}>Tổng quan CRM</Text>
        <View style={styles.chartBox}>
          <Pressable
            onPress={() =>
              navigation.navigate("Customers", {
                screen: "Customers",
              })
            }
          >
            <Text>📊 Biểu đồ khách hàng</Text>
          </Pressable>
        </View>

        <View style={styles.chartBox}>
          <Text>📈 Biểu đồ công việc</Text>
        </View>

        <View style={styles.chartBox}>
          <Text>📅 Biểu đồ chấm công</Text>
        </View>

        <View style={styles.chartBox}>
          <Text>💵 Biểu đồ hóa đơn / báo giá</Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default HomeScreenComponent;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#efefef" },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 16,
    paddingTop: 50,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
    backgroundColor: "#FFFFFF",
  },
  left: {
    flexDirection: "row",
    alignItems: "center",
  },
  avatar: {
    width: 36,
    height: 36,
    borderRadius: 999,
    backgroundColor: "#eee",
    marginRight: 10,
  },
  name: {
    fontSize: 16,
    fontWeight: "600",
    fontFamily: "BeVietnamPro-SemiBold",
    color: "#000",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
  },
  content: {
    padding: 16,
  },
  sectionTitle: {
    fontSize: 20,
    marginBottom: 12,
    fontWeight: "600",
  },
  chartBox: {
    height: 150,
    borderRadius: 12,
    backgroundColor: "#FFFFFF ",
    marginBottom: 16,
    justifyContent: "center",
    alignItems: "center",
  },
});
