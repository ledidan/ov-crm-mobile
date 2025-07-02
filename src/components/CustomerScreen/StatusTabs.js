import React from "react";
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  TouchableOpacity,
} from "react-native";
import { AppButton, IconButton } from "../../fields";
import VerticalDivider from "@/fields/VerticalDivider";

const statuses = [
  { label: "Tất cả", color: "", emoji: "🧐", count: 2 },
  { label: "Mới", color: "#525f7e", emoji: "🧐", count: 2 },
  { label: "Nóng", color: "#eb1600", emoji: "🧐", count: 2 },
  { label: "Tiềm năng", color: "#007AFF", emoji: "🧐", count: 2 },
  { label: "Mất", color: "#1a1a1a", emoji: "🧐", count: 2 },
  { label: "Chốt", color: "#28a745", emoji: "🧐", count: 2 },
];
const StatusTabs = ({ setSelectMode }) => {


  const toggleSelectMode = () => {
    setSelectMode((prev) => !prev)
  }
  return (
    <View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.row}
      >
        <AppButton
          iconName={"filter-outline"}
          iconColor="blue"
          variant="outlined"
          iconSize={18}
          title="Bộ lọc"
          size="small"
          startIcon={true}
          style={styles.button}
        />
        <AppButton
          iconName={"checkbox-outline"}
          color="blue"
          startIcon={true}
          iconSize={18}
          iconColor="blue"
          variant="outlined"
          title="Chọn"
          size="small"
          style={styles.button}
          onPress={toggleSelectMode}
        />
        <AppButton
          variant="outlined"
          iconName={"people-outline"}
          iconColor="blue"
          iconSize={18}
          startIcon={true}
          title="Nhóm khách hàng"
          size="small"
          style={styles.button}
        />
      </ScrollView>
      <View style={styles.viewScrollContent}>
        <IconButton
          iconName={"list-outline"}
          variant="outlined"
          onPress={() => console.log("List tags")}
          size={20}
          style={styles.iconButton}
        />
        <VerticalDivider />
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.scrollContent}
        >
          {statuses.map((item, index) => (
            <TouchableOpacity key={index} style={styles.tagButton}>
              {item.color && (
                <View style={[styles.dot, { backgroundColor: item.color }]} />
              )}
              <Text style={styles.tagText}>
                {item.label}
                {item.count !== undefined ? ` (${item.count})` : ""}
              </Text>
            </TouchableOpacity>
          ))}

          <AppButton
            onPress={() => console.log("Add tag")}
            title="Thêm"
            variant="text"
            iconSize={14}
            size="small"
            iconName={"add"}
            startIcon={true}
            iconColor="blue"
          />
        </ScrollView>
      </View>
    </View>
  );
};

export default StatusTabs;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    paddingVertical: 8,
    paddingHorizontal: 10,
    gap: 8,
  },
  tab: {
    borderRadius: 16,
    paddingHorizontal: 12,
    paddingVertical: 6,
  },
  label: {
    fontSize: 14,
    fontFamily: "BeVietnamPro-SemiBold",
  },
  row: {
    maxHeight: 50,
    paddingHorizontal: 10,
    paddingTop: 8,
    flexDirection: "row",
    gap: 8,
  },
  viewScrollContent: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
    paddingVertical: 8,
    gap: 8,
    flexDirection: "row",
    borderTopColor: "#DFDFDF",
    borderTopWidth: 1,
    borderBottomColor: "#DFDFDF",
    borderBottomWidth: 1,
    marginTop: 10,
  },
  scrollContent: {
    flexDirection: "row",
    alignItems: "center",
  },
  button: {
    marginRight: 8,
  },
  tagButton: {
    flexDirection: "row",
    alignItems: "center",
    borderColor: "#dededc",
    paddingVertical: 6,
    borderWidth: 1,
    paddingHorizontal: 12,
    borderRadius: 8,
    gap: 8,
    marginLeft: 10,
  },
  dot: {
    width: 12,
    height: 12,
    borderRadius: 4,
    marginRight: 6,
  },
  tagText: {
    fontSize: 14,
    fontFamily: "BeVietnamPro-SemiBold",
    color: "#1C1C1E",
  },
  iconButton: {
    borderColor: "#DFDFDF",
  },
});
