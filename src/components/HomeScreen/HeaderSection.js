import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Pressable,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const HeaderSection = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.header}>
      <TouchableOpacity
        style={styles.left}
        onPress={() => navigation.navigate("Tài Khoản")}
      >
        <Image
          source={require("../../../assets/favicon.png")}
          style={styles.avatar}
        />
        <Text style={styles.name}>Đan Lê</Text>
      </TouchableOpacity>
      <Pressable onPress={() => console.log("Chat pressed")}>
        <Ionicons name="chatbubble-ellipses" size={26} color="#000" />
      </Pressable>
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
    paddingTop: 50,
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
    fontSize: 16,
    fontWeight: "600",
    color: "#000",
  },
});
