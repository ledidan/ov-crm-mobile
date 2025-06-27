import React from "react";
import { View, StyleSheet } from "react-native";
import Header from "./Header";
import StatusTabs from "./StatusTabs";
import CustomerList from "./CustomerList";

const CustomerScreenComponent = () => {
  return (
    <View style={styles.container}>
      <Header />
      <StatusTabs /> 
      <CustomerList />
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
