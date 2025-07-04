import React from "react";
import { View, Text, StyleSheet } from "react-native";

const InteractionReportScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tương tác</Text>
      {["Email", "Tin nhắn", "Zns", "Cuộc gọi", "Công việc", "Trao đổi"].map((item) => (
        <View style={styles.row} key={item}>
          <Text>{item}</Text>
          <Text>0</Text>
        </View>
      ))}
    </View>
  );
};

export default InteractionReportScreen;

const styles = StyleSheet.create({
  container: { padding: 16 },
  title: { fontWeight: "bold", fontSize: 16, marginBottom: 12 },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 4,
  },
});
