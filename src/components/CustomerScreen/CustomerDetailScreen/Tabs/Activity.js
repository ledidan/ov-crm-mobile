import React from "react";
import { Image, ScrollView, StyleSheet } from "react-native";
import { Text } from "react-native";
import { View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import TaskListItem from "@/components/ActivityScreen/TaskListItem";
const tasks = [
  {
    id: 1,
    title: "Demo",
    startDate: "15/06/2025",
    endDate: "15/06/2025",
    progress: 0.8,
  },
  {
    id: 2,
    title: "Họp nội bộ",
    startDate: "14/06/2025",
    endDate: "18/06/2025",
    progress: 0.6,
  },
];
const Activity = () => {
  const navigation = useNavigation()
  return (
    <View>
      {tasks.length > 0 ? (
        <ScrollView style={{ flex: 1 }}>
          {tasks.map((task) => (
            <TaskListItem key={task.id} task={task} navigation={navigation} />
          ))}
        </ScrollView>
      ) : (
        <View style={styles.emptyBox}>
          <Image
            source={require("@/assets/favicon.png")}
            style={{ width: 100, height: 100, marginBottom: 16 }}
            resizeMode="contain"
          />
          <Text style={styles.emptyText}>Bạn chưa có công việc nào</Text>
          <Text style={styles.emptySubText}>
            Bạn có thể bắt đầu tạo công việc đầu tiên để làm việc cùng Autuna
          </Text>
        </View>
      )}
    </View>
  );
};

export default Activity;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  emptyBox: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 32,
  },
  emptyText: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 6,
  },
  emptySubText: {
    fontSize: 14,
    textAlign: "center",
    color: "#666",
  },
});
