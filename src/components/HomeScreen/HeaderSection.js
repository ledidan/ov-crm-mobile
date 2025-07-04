import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const HeaderSection = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.header}>
      <View style={styles.left}>
        <TouchableOpacity
          style={styles.left}
          onPress={() => navigation.navigate("Tài Khoản")}
        >
          <Image
            source={require("../../../assets/avatars/user.png")}
            style={styles.avatar}
          />
          <Text style={styles.name}>Đan Lê</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity onPress={() => navigation.navigate("Chat")}>
        <Ionicons name="chatbubble-ellipses" size={26} color="#000" />
      </TouchableOpacity>
    </View>
  );
};

export default HeaderSection;

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 16,
    paddingTop: 60,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
    backgroundColor: "#FFFFFF",
  },
  left: {
    flexDirection: "row",
    alignItems: "center",
  },
  avatar: {
    width: 36,
    height: 36,
    borderRadius: 999,
    backgroundColor: "#eee",
    marginRight: 10,
  },
  name: {
    fontSize: 20,
    fontWeight: "600",
    color: "#000",
  },
});
