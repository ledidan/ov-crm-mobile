// src/screens/CustomerDetailScreen.js
import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { AppButton } from "../fields";
import { useNavigation } from "@react-navigation/native";
import CustomerTabs from "@/components/CustomerScreen/CustomerDetailScreen/CustomerTabs";

export default function CustomerDetailScreen({ route }) {
  const { customer } = route.params;
  const navigation = useNavigation();
  return (
    <ScrollView style={styles.container}>
      {/* Top card */}
      <View style={styles.card}>
        <View style={styles.headerTopBar}>
          <Image
            source={require("../../assets/favicon.png")}
            style={styles.avatar}
          />
          <View style={styles.iconColumn}>
            <Ionicons name="call-outline" size={20} color="#666" />
            <Ionicons
              name="mail-outline"
              size={20}
              color="#666"
              style={{ marginVertical: 10 }}
            />
            <AppButton
              iconName={"chevron-down-outline"}
              color="white"
              variant="contained"
              iconSize={15}
              endIcon
              title="Chốt"
              size="small"
              style={styles.button}
            />
          </View>
        </View>

        <View style={styles.mainInfo}>
          <View style={styles.topInfo}>
            <Text style={styles.name}>{customer.name}</Text>
          </View>

          <View style={styles.row}>
            <Ionicons name="call-outline" size={16} color="#555" />
            <Text style={styles.value}>{customer.phone}</Text>

            <Ionicons
              name="mail-outline"
              size={16}
              color="#555"
              style={{ marginLeft: 12 }}
            />
            <Text style={styles.value}>Chưa cập nhật</Text>
          </View>

          <View style={styles.row}>
            <Ionicons name="person-outline" size={16} color="#555" />
            <Text style={styles.value}>Người phụ trách: </Text>
            <Text style={styles.valueBold}>Chưa cập nhật</Text>

            <Ionicons
              name="time-outline"
              size={16}
              color="#555"
              style={{ marginLeft: 12 }}
            />
            <Text style={styles.value}>Chưa cập nhật</Text>
          </View>
          <View
            style={{ height: 0.7, backgroundColor: "#ccc", marginVertical: 10 }}
          />

          <View style={styles.bottomRow}>
            <View style={styles.participantRow}>
              <Ionicons name="people-outline" size={16} color="#555" />
              <Text style={styles.value}>Người tham gia</Text>
            </View>
            <TouchableOpacity onPress={() => console.log("xem chi tiet")}>
              <Text style={styles.link}>Xem chi tiết</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <CustomerTabs navigation={navigation} />
      {/* <View style={styles.tabs}>
        <Text style={[styles.tab, styles.tabActive]}>Trao đổi</Text>
        <Text style={styles.tab}>Thông tin</Text>
        <Text style={styles.tab}>KH phản hồi</Text>
        <Text style={styles.tab}>Liên quan</Text>
      </View>

      <View style={styles.filterRow}>
        <Ionicons name="filter-outline" size={20} />
        <Text style={{ marginLeft: 8 }}>Lọc nâng cao</Text>
      </View>

      <View style={styles.commentCard}>
        <Text style={styles.commentAuthor}>Đan Lê</Text>
        <Text>Good job</Text>
        <Text style={styles.commentTime}>15/06/2025 09:36:54</Text>
        <Ionicons name="thumbs-up-outline" size={16} color="#999" />
      </View>

      <View style={styles.commentCard}>
        <Text style={styles.commentAuthor}>Đan Lê</Text>
        <Text>Tạo mới khách hàng</Text>
        <Text style={styles.commentTime}>15/06/2025 09:31:45</Text>
        <Ionicons name="thumbs-up-outline" size={16} color="#999" />
      </View> */}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 12,
    padding: 12,
    margin: 10,
    shadowRadius: 4,
    elevation: 1,
  },
  headerRow: {
    flexDirection: "row",
    alignItems: "flex-start",
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: "#ddd",
    marginRight: 12,
  },
  mainInfo: {
    flex: 1,
  },
  topInfo: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 6,
  },
  name: {
    fontSize: 16,
    fontWeight: "bold",
    fontFamily: "BeVietnamPro-Bold",
  },
  statusChip: {
    backgroundColor: "#007AFF",
    paddingHorizontal: 20,
    paddingVertical: 6,
    borderRadius: 20,
  },
  statusText: {
    fontSize: 12,
    color: "#fff",
    fontWeight: "500",
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 2,
  },
  headerTopBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  bottomRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 8,
  },
  participantRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  value: {
    fontSize: 13,
    color: "#333",
    marginLeft: 4,
  },
  valueBold: {
    fontSize: 13,
    fontWeight: "600",
    color: "#333",
    marginLeft: 2,
  },
  link: {
    fontSize: 13,
    color: "#007AFF",
    fontWeight: "500",
  },
  iconColumn: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 10,
  },
  link: {
    marginTop: 10,
    color: "#007AFF",
    fontSize: 14,
    alignSelf: "flex-end",
  },
  tabs: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderColor: "#ddd",
    backgroundColor: "#fff",
  },
  tab: {
    paddingVertical: 12,
    paddingHorizontal: 16,
    fontWeight: "500",
    color: "#666",
  },
  tabActive: {
    borderBottomWidth: 2,
    borderColor: "#007AFF",
    color: "#007AFF",
  },
  filterRow: {
    flexDirection: "row",
    alignItems: "center",
    padding: 12,
    backgroundColor: "#fff",
    borderBottomWidth: 1,
    borderColor: "#eee",
  },
  commentCard: {
    backgroundColor: "#fff",
    padding: 12,
    marginVertical: 6,
    marginHorizontal: 10,
    borderRadius: 8,
  },
  commentAuthor: {
    fontWeight: "bold",
    marginBottom: 4,
  },
  commentTime: {
    fontSize: 12,
    color: "#888",
    marginTop: 6,
  },
});
