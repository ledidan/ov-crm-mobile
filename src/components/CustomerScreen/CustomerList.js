import React from "react";
import { View, Text, StyleSheet, FlatList, Image, Pressable } from "react-native";
import { Feather, Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const customers = [
  {
    id: "1",
    name: "A Bin",
    phone: "0385114940",
    assignedTo: "Chưa cập nhật",
    lastContact: 0,
  },
  {
    id: "2",
    name: "A Bin",
    phone: "0385114940",
    assignedTo: "Chưa cập nhật",
    lastContact: 0,
  },
  {
    id: "3",
    name: "A Bin",
    phone: "0385114940",
    assignedTo: "Chưa cập nhật",
    lastContact: 0,
  },
  {
    id: "4",
    name: "A Bin",
    phone: "0385114940",
    assignedTo: "Chưa cập nhật",
    lastContact: 0,
  },
  {
    id: "5",
    name: "A Bin",
    phone: "0385114940",
    assignedTo: "Chưa cập nhật",
    lastContact: 0,
  },
  {
    id: "6",
    name: "A Bin",
    phone: "0385114940",
    assignedTo: "Chưa cập nhật",
    lastContact: 0,
  },
];

export default function CustomerList() {
  const navigation = useNavigation();
  return (
    <FlatList
      data={customers}
      keyExtractor={(item) => item.id}
      contentContainerStyle={{ padding: 16 }}
      renderItem={({ item }) => (
        <View style={styles.card}>
          <Pressable
            style={styles.item}
            onPress={() =>
              navigation.navigate("CustomerDetail", { customer: item })
            }
          >
            <Image
              source={require("../../../assets/favicon.png")}
              style={styles.avatar}
            />
            <View style={styles.info}>
              <Text style={styles.name}>{item.name}</Text>
              <Text style={styles.line}>
                <Feather name="phone" size={14} /> Số điện thoại: {item.phone}
              </Text>
              <Text style={styles.line}>
                <Feather name="user" size={14} /> Người phụ trách:{" "}
                {item.assignedTo}
              </Text>
              <Text style={styles.line}>
                <Feather name="calendar" size={14} /> Liên hệ lần cuối:{" "}
                {item.lastContact}
              </Text>
            </View>
          </Pressable>
        </View>
      )}
    />
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    marginBottom: 16,
    backgroundColor: "#fff",
    borderRadius: 8,
    padding: 12,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 5,
    elevation: 1,
  },
  avatar: {
    width: 38,
    height: 38,
    borderRadius: 999,
    backgroundColor: "#eee",
    marginRight: 12,
  },
  info: {
    flex: 1,
  },
  name: {
    fontSize: 16,
    fontFamily: "BeVietnamPro-SemiBold",
    marginBottom: 6,
  },
  line: {
    fontSize: 14,
    marginBottom: 2,
    color: "#333",
  },
});
