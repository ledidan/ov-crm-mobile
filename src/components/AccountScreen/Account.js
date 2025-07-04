import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { useNavigation } from "@react-navigation/native";

const Account = () => {
  const navigation = useNavigation();

  const menuItems = [
    { icon: "account", label: "Thông tin cá nhân", screen: "Thông tin Admin" },
    { icon: "chart-box-outline", label: "KPI cá nhân" },
    { icon: "cog-outline", label: "Thông tin hệ thống" },
    { icon: "lock-reset", label: "Đổi mật khẩu" },
    { icon: "login", label: "Thông tin đăng nhập" },
    { icon: "headset", label: "Hỗ trợ trực tuyến" },
    { icon: "file-document-outline", label: "Điều khoản sử dụng" },
    { icon: "logout", label: "Đăng xuất", onPress: () => handleLogout() },
  ];
  const handleLogout = () => {
    console.log("log out ");
  };
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Image
          source={{
            uri: "https://i.pinimg.com/736x/61/62/2e/61622ec8899cffaa687a8342a84ea525.jpg",
          }}
          style={styles.bgImage}
          resizeMode="cover"
        />
        <View style={styles.profileWrapper}>
          <View style={styles.avatar}>
            <Icon name="account" size={50} color="#ccc" />
          </View>
          <Text style={styles.name}>Đan Lê</Text>
          <Text style={styles.role}>Nhân viên</Text>
        </View>
      </View>

      <View style={styles.menu}>
        {menuItems.map((item, idx) => (
          <TouchableOpacity
            key={idx}
            style={styles.menuItem}
            onPress={() => {
              if (typeof item.onPress === "function") item.onPress();
              if (item.label === "Thông tin cá nhân") {
                navigation.navigate(item.screen);
              }
            }}
          >
            {item.label === "Đăng xuất" ? (
              <View style={styles.menuLeft}>
                <Icon name={item.icon} size={20} color="red" />
                <Text style={{ fontSize: 15, color: "red" }}>{item.label}</Text>
              </View>
            ) : (
              <View style={styles.menuLeft}>
                <Icon name={item.icon} size={20} color="#000" />
                <Text style={styles.menuText}>{item.label}</Text>
              </View>
            )}
            {item.label !== "Đăng xuất" && (
              <Icon name="chevron-right" size={20} color="#999" />
            )}
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
};

export default Account;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    alignItems: "center",
    paddingBottom: 20,
    backgroundColor: "#f5f7fa",
  },
  bgImage: {
    width: "100%",
    height: 100,
  },
  profileWrapper: {
    alignItems: "center",
    marginTop: -40,
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    elevation: 4,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  name: {
    marginTop: 10,
    fontSize: 16,
    fontWeight: "600",
    color: "#111",
  },
  role: {
    fontSize: 13,
    color: "#777",
  },
  menu: {
    marginTop: 10,
  },
  menuItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 14,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  menuLeft: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  menuText: {
    fontSize: 15,
    color: "#000",
  },
});
