import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import Checkbox from "expo-checkbox";
import { theme } from "../../theme";
import ActionModal from "@/fields/Modal/ActionModal";

export default function CustomerList({
  selectMode,
  selectedCustomers,
  setSelectedCustomers,
  customers,
  navigation,
}) {
  const [actionModalVisible, setActionModalVisible] = useState(false);

  const toggleSelect = (id) => {
    if (selectedCustomers.includes(id)) {
      setSelectedCustomers(selectedCustomers.filter((item) => item !== id));
    } else {
      setSelectedCustomers([...selectedCustomers, id]);
    }
  };

  const toggleSelectAll = () => {
    if (selectedCustomers.length === customers.length) {
      setSelectedCustomers([]);
    } else {
      setSelectedCustomers(customers.map((item) => item.id));
    }
  };

  const renderHeader = () => {
    if (!selectMode) return null;

    return (
      <View style={styles.selectAllRow}>
        <View style={styles.selectedAll}>
          <Checkbox
            value={selectedCustomers.length === customers.length}
            onValueChange={toggleSelectAll}
            style={styles.checkbox}
            color="#007AFF"
          />
          <Text style={styles.selectAllText}>Chọn tất cả</Text>
        </View>

        <View style={styles.selectedInfo}>
          <Text style={styles.selectedText}>
            Đã chọn "{selectedCustomers.length} Khách hàng"
          </Text>
          <TouchableOpacity onPress={() => setActionModalVisible(true)}>
            <Text style={styles.actionText}>Chọn hành động &gt;</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  return (
    <View>
      <ActionModal
        visible={actionModalVisible}
        onClose={() => setActionModalVisible(false)}
        onAction={(action) => {
          setActionModalVisible(false);
        }}
      />
      <FlatList
        data={customers}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ padding: 16 }}
        ListHeaderComponent={renderHeader}
        renderItem={({ item }) => {
          const isChecked = selectedCustomers.includes(item.id);

          return (
            <TouchableOpacity
              style={styles.card}
              activeOpacity={selectMode ? 1 : 0.7}
              onPress={() =>
                selectMode
                  ? toggleSelect(item.id)
                  : navigation.navigate("CustomerDetail", { customer: item })
              }
            >
              {selectMode && (
                <Checkbox
                  value={isChecked}
                  onValueChange={() => toggleSelect(item.id)}
                  style={styles.checkbox}
                  color={isChecked ? "#007AFF" : undefined}
                />
              )}
              <View
                style={[
                  styles.verticalLine,
                  isChecked && styles.verticalLineActive,
                ]}
              />
              <Image
                source={require("../../../assets/avatars/user.png")}
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
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  checkbox: {
    marginRight: 10,
  },
  selectAllRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: '#f2f2f2',
    padding: 10,
    borderRadius: 8,
    marginBottom: 12,
    // flexWrap: "wrap",
  },
  selectedAll: {
    flexDirection: 'row'
  },
  selectAllText: {
    fontWeight: "600",
  },
  selectedInfo: {
    flexDirection: "column",
    alignItems: "center",
    marginLeft: 12,
    // flexWrap: "wrap",
  },
  selectedText: {
    fontWeight: "500",
    marginRight: 8,
  },
  actionText: {
    color: "#007AFF",
    fontWeight: "600",
  },
  card: {
    flexDirection: "row",
    backgroundColor: "#fff",
    borderBottomColor: "#eee",
    borderBottomWidth: 1,
    padding: 12,
    marginBottom: 10,
    borderLeftWidth: 4,
    borderLeftColor: "transparent",
    position: "relative",
    borderRadius: 8,
  },
  verticalLine: {
    borderRadius: 10,
    width: 4,
    height: "100%",
    backgroundColor: theme.colors.success,
    position: "absolute",
    left: -15,
  },
  verticalLineActive: {
    backgroundColor: theme.colors.primary,
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
  },
  line: {
    fontSize: 14,
    color: "#333",
    marginTop: 4,
  },
  itemInfo: {
    fontWeight: "600",
  },
});
