import React, { useState } from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation, useRoute } from "@react-navigation/native";
import { getColor, getInitials } from "@/utils/helperFunctions";
import AppSelect from "@/fields/AppSelect";
import LoadingOverlay from "@/fields/Loading/LoadingOverlay";

const ContactAssignScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { selectedContacts = [] } = route.params || {};
  const [visible, setVisible] = useState(false);
  const [assignee, setAssignee] = useState(null);

  const assigneeOptions = [
    { label: "Nguyễn Văn A", value: "1" },
    { label: "Trần Thị B", value: "2" },
    { label: "Lê Văn C", value: "3" },
  ];

  function delay(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
  const handleSync = async () => {
    console.log("Đồng bộ:", selectedContacts, "Người phụ trách:", assignee);
    setVisible(true);
    try {
      await delay(2000);
      setVisible(false);
      navigation.navigate("SyncResultCustomer", {
        validContacts: selectedContacts,
      });
    } catch (err) {}
  };

  return (
    <View style={styles.container}>
      <LoadingOverlay visible={visible} />
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Đồng bộ danh bạ</Text>
        <View style={{ width: 24 }} />
      </View>

      {/* Nội dung */}
      <Text style={styles.question}>
        Bạn có muốn giao cho nhân viên phụ trách những liên hệ này không ?
      </Text>

      <Text style={styles.label}>Người phụ trách</Text>
      <View style={{ marginHorizontal: 16, marginBottom: 24 }}>
        <AppSelect
          placeholder="Mời chọn"
          options={assigneeOptions}
          value={assignee}
          onSelect={setAssignee}
        />
      </View>

      <Text style={styles.info}>
        Bạn sẽ{" "}
        <Text style={{ fontWeight: "700" }}>
          Đồng bộ {selectedContacts.length}
        </Text>{" "}
        liên hệ từ danh bạ lên CRM.
      </Text>

      <FlatList
        data={selectedContacts}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.contactItem}>
            <View
              style={[styles.circle, { backgroundColor: getColor(item.name) }]}
            >
              <Text style={styles.circleText}>{getInitials(item.name)}</Text>
            </View>
            <View>
              <Text style={styles.name}>{item.name}</Text>
              <Text style={styles.phone}>{item.phoneNumbers?.[0]?.number}</Text>
            </View>
          </View>
        )}
      />

      {/* Nút hành động */}
      <View style={styles.actions}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.back}>Quay lại</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.syncBtn} onPress={handleSync}>
          <Text style={styles.syncText}>Đồng bộ ngay</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ContactAssignScreen;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },
  header: {
    paddingTop: 50,
    paddingHorizontal: 16,
    paddingBottom: 12,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  headerTitle: { fontSize: 18, fontWeight: "600" },
  question: {
    marginTop: 16,
    marginHorizontal: 16,
    fontSize: 15,
    color: "#111",
  },
  label: {
    fontSize: 14,
    fontWeight: "500",
    marginTop: 16,
    marginHorizontal: 16,
    marginBottom: 4,
  },
  info: {
    marginHorizontal: 16,
    marginBottom: 16,
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
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 12,
    justifyContent: "center",
    alignItems: "center",
  },
  circleText: {
    color: "#fff",
    fontWeight: "bold",
  },
  name: {
    fontSize: 14,
    fontWeight: "500",
  },
  phone: {
    fontSize: 13,
    color: "#555",
  },
  actions: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 16,
    borderTopWidth: 1,
    borderColor: "#eee",
    marginBottom: 20,
  },
  back: {
    color: "#007AFF",
    fontSize: 16,
  },
  syncBtn: {
    backgroundColor: "#007AFF",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 6,
  },
  syncText: {
    color: "#fff",
    fontWeight: "600",
    fontSize: 16,
  },
});
