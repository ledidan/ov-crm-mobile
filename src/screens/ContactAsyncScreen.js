// screens/ContactSyncScreen.js
import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from "react-native";
import * as Contacts from "expo-contacts";
import { Ionicons } from "@expo/vector-icons";
import { getColor, getInitials } from "@/utils/helperFunctions";

const ContactSyncScreen = ({ navigation }) => {
  const [contacts, setContacts] = useState([]);
  const [selected, setSelected] = useState({});
  const [search, setSearch] = useState("");

  useEffect(() => {
    (async () => {
      const { status } = await Contacts.requestPermissionsAsync();
      if (status === "granted") {
        const { data } = await Contacts.getContactsAsync({
          fields: [Contacts.Fields.PhoneNumbers],
        });
        const filtered = data.filter((item) => item.phoneNumbers?.length > 0);
        setContacts(filtered);
      }
    })();
  }, []);

  const toggleSelect = (id) => {
    setSelected((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const handleSelectAll = () => {
    const newSelected = {};
    contacts.forEach((c) => {
      newSelected[c.id] = true;
    });
    setSelected(newSelected);
  };

  const handleUnselectAll = () => {
    setSelected({});
  };

  const filteredContacts = contacts.filter((c) =>
    c.name?.toLowerCase().includes(search.toLowerCase())
  );

  const selectedContactsArray = contacts.filter((c) => selected[c.id]);

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Đồng bộ danh bạ</Text>
        <View style={{ width: 24 }} />
      </View>

      {/* Search */}
      <View style={styles.searchBox}>
        <Ionicons name="search-outline" size={20} color="#888" />
        <TextInput
          placeholder="Tìm kiếm tên liên hệ"
          style={{ flex: 1, marginLeft: 8 }}
          value={search}
          onChangeText={setSearch}
        />
      </View>

      {/* Chọn tất cả */}
      <View style={styles.selectAllRow}>
        <TouchableOpacity onPress={handleSelectAll}>
          <Text style={{ fontSize: 14 }}>🔘 Chọn tất cả</Text>
        </TouchableOpacity>
        <Text style={{ fontSize: 14, fontWeight: "500" }}>
          Đã chọn {Object.values(selected).filter(Boolean).length} liên hệ
        </Text>
      </View>

      {/* Danh sách liên hệ */}
      <FlatList
        data={filteredContacts}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => {
          const isSynced = item.name === "A Bin";
          const isChecked = selected[item.id];

          return (
            <TouchableOpacity
              style={styles.item}
              onPress={() => toggleSelect(item.id)}
              disabled={isSynced}
            >
              <View
                style={[
                  styles.circle,
                  { backgroundColor: getColor(item.name) },
                ]}
              >
                <Text style={styles.circleText}>{getInitials(item.name)}</Text>
              </View>

              <View style={{ flex: 1 }}>
                <Text style={styles.name}>{item.name}</Text>
                <Text style={styles.phone}>
                  {item.phoneNumbers?.[0]?.number}
                </Text>
              </View>

              {isSynced ? (
                <Text style={styles.synced}>Đã đồng bộ</Text>
              ) : (
                <Ionicons
                  name={isChecked ? "checkmark-circle" : "ellipse-outline"}
                  size={24}
                  color={isChecked ? "#007AFF" : "#ccc"}
                />
              )}
            </TouchableOpacity>
          );
        }}
        contentContainerStyle={{ paddingBottom: 80 }}
      />

      {/* Tiếp theo */}
      <TouchableOpacity
        style={styles.nextBtn}
        onPress={() =>
          navigation.navigate("ContactAssign", {
            selectedContacts: selectedContactsArray,
          })
        }
      >
        <Text style={styles.nextText}>Tiếp theo</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ContactSyncScreen;

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
  searchBox: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    margin: 16,
    paddingHorizontal: 12,
  },
  selectAllRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingBottom: 8,
  },
  item: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderColor: "#eee",
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
  synced: {
    fontSize: 12,
    color: "#007AFF",
    fontWeight: "500",
  },
  nextBtn: {
    position: "absolute",
    bottom: 20,
    left: 16,
    right: 16,
    backgroundColor: "#007AFF",
    borderRadius: 8,
    paddingVertical: 14,
    alignItems: "center",
  },
  nextText: {
    color: "#fff",
    fontWeight: "600",
    fontSize: 16,
  },
});
