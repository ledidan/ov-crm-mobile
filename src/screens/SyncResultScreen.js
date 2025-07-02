import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation, useRoute } from "@react-navigation/native";
import { getColor, getInitials } from "@/utils/helperFunctions";

const SyncResultScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { validContacts = [] } = route.params || {};

  return (
    <View style={styles.container}>
      {/* Header */}
      {/* <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} />
        </TouchableOpacity>
        <Text style={styles.title}>Kết quả đồng bộ</Text>
        <View style={{ width: 24 }} />
      </View> */}

      {/* Valid section */}
      <View style={styles.validBox}>
        <Ionicons
          name="checkmark-circle"
          size={18}
          color="#007AFF"
          style={{ marginRight: 6 }}
        />
        <Text style={styles.validText}>
          Số khách hàng hợp lệ{" "}
          <Text style={{ fontWeight: "600" }}>{validContacts.length}</Text>
        </Text>
      </View>

      <FlatList
        data={validContacts}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.contactItem}>
            <View
              style={[styles.circle, { backgroundColor: getColor(item.name) }]}
            >
              <Text style={styles.circleText}>
                {getInitials(item.name || item.phone)}
              </Text>
            </View>
            <View>
              <Text style={styles.name}>{item.name || item.phone}</Text>
              <Text style={styles.phone}>{item.phone}</Text>
            </View>
          </View>
        )}
      />

      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          navigation.navigate("Trang chủ", {
            screen: "Khách hàng",
          })
        }}
      >
        <Text style={styles.buttonText}>Xem danh sách khách hàng</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SyncResultScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    paddingTop: 50,
    paddingHorizontal: 16,
    paddingBottom: 12,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    fontSize: 18,
    fontWeight: "600",
    color: "#111",
  },
  validBox: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 16,
    marginVertical: 20,
  },
  validText: {
    fontSize: 14,
    color: "#333",
  },
  contactItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderColor: "#f0f0f0",
  },
  circle: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: "#007AFF",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12,
  },
  circleText: {
    color: "#fff",
    fontWeight: "600",
  },
  name: {
    fontSize: 14,
    fontWeight: "500",
  },
  phone: {
    fontSize: 13,
    color: "#555",
  },
  button: {
    backgroundColor: "#007AFF",
    padding: 16,
    borderRadius: 8,
    margin: 16,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "600",
    fontSize: 16,
  },
});
