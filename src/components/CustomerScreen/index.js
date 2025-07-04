import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import Header from "./Header";
import StatusTabs from "./StatusTabs";
import CustomerList from "./CustomerList";
import { useNavigation } from "@react-navigation/native";

const MOCK_CUSTOMERS = [
  { id: "1", name: "A Chương AMZ", phone: "0977025374", assignedTo: "Chưa cập nhật", lastContact: 0 },
  { id: "2", name: "A Chip", phone: "0986923714", assignedTo: "Chưa cập nhật", lastContact: 0 },
  { id: "3", name: "A Bin", phone: "0385114940", assignedTo: "Chưa cập nhật", lastContact: 2 },
];

const CustomerScreenComponent = () => {
  const [selectMode, setSelectMode] = useState(false);
  const [selectedCustomers, setSelectedCustomers] = useState([]);
  const navigation = useNavigation()
  return (
    <View style={styles.container}>
      <Header />
      <StatusTabs setSelectMode={setSelectMode} selectMode={selectMode} />
      <CustomerList
        customers={MOCK_CUSTOMERS}
        selectMode={selectMode}
        selectedCustomers={selectedCustomers}
        setSelectedCustomers={setSelectedCustomers}
        navigation={navigation}
      />
    </View>
  );
};

export default CustomerScreenComponent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
