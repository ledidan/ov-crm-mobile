import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import Header from "./Header";
import StatusTabs from "./StatusTabs";
import CustomerList from "./CustomerList";

const CustomerScreenComponent = () => {
  const [selectMode, setSelectMode] = useState(false);
  const [selectedCustomers, setSelectedCustomers] = useState([]);

  return (
    <View style={styles.container}>
      <Header />
      <StatusTabs setSelectMode={setSelectMode} />
      <CustomerList
        selectMode={selectMode}
        selectedCustomers={selectedCustomers}
        setSelectedCustomers={setSelectedCustomers}
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
