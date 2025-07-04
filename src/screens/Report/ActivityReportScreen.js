import React from "react";
import { View, Text, StyleSheet } from "react-native";

const ActivityReportScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hoạt động</Text>
      <View style={styles.row}>
        <Text>Theo dự án</Text>
        <Text>0</Text>
      </View>
      <View style={styles.row}>
        <Text>Theo loại công việc</Text>
        <Text>0</Text>
      </View>
    </View>
  );
};

export default ActivityReportScreen;

const styles = StyleSheet.create({
  container: { padding: 16 },
  title: { fontWeight: "bold", fontSize: 16, marginBottom: 12 },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 4,
  },
});
