import React, { useState } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { IconButton } from "@/fields";
import CustomerSelectorModal from "@/fields/Modal/CustomerSelectorModal";
import { useNavigation } from "@react-navigation/native";

const Customer = () => {
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);
  const [customers, setCustomers] = useState([]);

  const handleSelectCustomers = (selectedList) => {
    setCustomers(selectedList);
    setModalVisible(false);
  };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Khách hàng liên quan</Text>
        <IconButton
          iconName="add"
          size={20}
          color="#2563eb"
          onPress={() => setModalVisible(true)}
        />
      </View>

      {customers && customers.length > 0 ?
        customers.map((c) => (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("CustomerDetail", {
                customer: c,
              })
            }
            key={c.id}
          >
            <View style={styles.card}>
              <Image
                source={require("assets/adaptive-icon.png")}
                style={styles.avatar}
              />
              <View style={styles.info}>
                <Text style={styles.name}>{c.name}</Text>
                <Text style={styles.subText}>
                  {c.name} - {c.phone}
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        )) : (
            <Text>
                Không có khách hàng nào được chọn
            </Text>
        )}

      <CustomerSelectorModal
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
        onConfirm={handleSelectCustomers}
        onSelect={setCustomers}
      />
    </View>
  );
};

export default Customer;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f7f8fc",
    padding: 16,
    flex: 1,
  },
  header: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 16,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    fontSize: 16,
    fontWeight: "600",
  },
  card: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f4f6fd",
    borderRadius: 12,
    borderWidth: 0.7,
    borderStyle: "dashed",
    borderColor: "#d0d4e0",
    padding: 12,
    marginTop: 12,
  },
  avatar: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: "#ccc",
    marginRight: 12,
  },
  info: {
    flex: 1,
  },
  name: {
    fontWeight: "600",
    fontSize: 14,
    marginBottom: 2,
  },
  subText: {
    color: "#888",
    fontSize: 13,
  },
});
