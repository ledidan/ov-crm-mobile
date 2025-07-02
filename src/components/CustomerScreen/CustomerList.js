import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { theme } from "../../theme";
import Checkbox from "expo-checkbox";

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

export default function CustomerList({
  selectMode,
  selectedCustomers,
  setSelectedCustomers,
}) {
  const navigation = useNavigation();

  const toggleSelect = (id) => {
    if (selectedCustomers.includes(id)) {
      setSelectedCustomers(selectedCustomers.filter((item) => item !== id));
    } else {
      setSelectedCustomers([...selectedCustomers, id]);
    }
  };

  return (
    <FlatList
      data={customers}
      keyExtractor={(item) => item.id}
      contentContainerStyle={{ padding: 16 }}
      renderItem={({ item }) => {
        const isChecked = selectedCustomers.includes(item.id);

        return (
          <View style={styles.card}>
            <TouchableOpacity
              style={styles.item}
              activeOpacity={selectMode ? 1 : 0.7}
              onPress={() => {
                if (selectMode) {
                  toggleSelect(item.id);
                } else {
                  navigation.navigate("CustomerDetail", { customer: item });
                }
              }}
            >
              {selectMode && (
                <Checkbox
                  value={isChecked}
                  onValueChange={() => toggleSelect(item.id)}
                  style={styles.checkbox}
                  color={isChecked ? "#007AFF" : undefined}
                />
              )}
              <View style={styles.verticalLine} />
              <Image
                source={require("../../../assets/favicon.png")}
                style={styles.avatar}
              />
              <View style={styles.info}>
                <Text style={styles.name}>{item.name}</Text>
                <Text style={styles.line}>
                  <Feather name="phone" size={14} /> Số điện thoại:{" "}
                  <Text style={styles.itemInfo}>{item.phone}</Text>
                </Text>
                <Text style={styles.line}>
                  <Feather name="user" size={14} /> Người phụ trách:{" "}
                  <Text style={styles.itemInfo}>{item.assignedTo}</Text>
                </Text>
                <Text style={styles.line}>
                  <Feather name="calendar" size={14} /> Liên hệ lần cuối:{" "}
                  <Text style={styles.itemInfo}>{item.lastContact}</Text>
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        );
      }}
    />
  );
}

const styles = StyleSheet.create({
  item: {
    flexDirection: "row",
    alignItems: "center",
  },
  checkbox: {
    marginRight: 8,
  },
  itemInfo: {
    fontWeight: "600",
  },
  card: {
    width: "100%",
    flexDirection: "row",
    marginBottom: 16,
    backgroundColor: "#fff",
    borderRadius: 8,
    padding: 12,
    shadowColor: "#000",
    alignItems: "flex-start",
    borderBottomColor: "#DFDFDF",
    borderBottomWidth: 1,
    borderLeftWidth: 4,
    borderLeftColor: "transparent",
    position: "relative",
  },
  verticalLine: {
    width: 4,
    height: "100%",
    backgroundColor: theme.colors.secondary,
    borderRadius: 2,
    position: "absolute",
    left: -20,
    top: 0,
    bottom: 0,
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
    gap: 5,
  },
  name: {
    fontSize: 16,
    fontFamily: "BeVietnamPro-SemiBold",
    marginBottom: 6,
  },
  line: {
    flexDirection: "row",
    alignItems: "center",
    fontSize: 14,
    marginBottom: 2,
    color: "#333",
  },
});
