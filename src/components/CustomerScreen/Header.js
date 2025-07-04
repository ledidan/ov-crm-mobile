import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  Modal,
  TouchableOpacity,
} from "react-native";
import { theme } from "../../theme";
import { Ionicons } from "@expo/vector-icons";
import { IconButton } from "@/fields";
import { useNavigation } from "@react-navigation/native";

const ActionSheetModal = ({
  visible,
  onClose,
  onCreateCustomer,
  onSyncContact,
}) => {
  return (
    <Modal visible={visible} transparent animationType="slide">
      <Pressable style={styles.overlay} onPress={onClose} />
      <View style={styles.sheet}>
        <Text style={styles.title}>Hành động</Text>

        <TouchableOpacity style={styles.actionItem} onPress={onCreateCustomer}>
          <Ionicons name="add" size={20} color="#000" style={styles.icon} />
          <Text style={styles.label}>Tạo khách hàng</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.actionItem} onPress={onSyncContact}>
          <Ionicons
            name="person-circle-outline"
            size={20}
            color="#000"
            style={styles.icon}
          />
          <Text style={styles.label}>Đồng bộ danh bạ</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={onClose} style={styles.closeBtn}>
          <Ionicons name="close" size={20} color="#888" />
        </TouchableOpacity>
      </View>
    </Modal>
  );
};
const Header = () => {
  const [showModal, setShowModal] = useState(false);
  const navigation = useNavigation();

  const onAsyncContact=  () => {
    setShowModal(false)
    navigation.navigate("ContactAsync");
  }
  return (
    <View style={styles.header}>
      <Text style={theme.typography.h3}>Khách hàng</Text>
      <View style={styles.right}>
        <Pressable onPress={() => console.log("Chat pressed")}>
          <Ionicons name="search-outline" size={22} color="#000" />
        </Pressable>
        <IconButton
          onPress={() => setShowModal(true)}
          iconName={"add"}
          color={"black"}
        />
      </View>
      {showModal && (
        <ActionSheetModal
          visible={showModal}
          onClose={() => setShowModal(false)}
          onCreateCustomer={() => navigation.navigate("CreateCustomer")}
          onSyncContact={onAsyncContact}
        />
      )}
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 16,
    paddingTop: 50,
    borderBottomWidth: 1,
    borderBottomColor: "#DFDFDF",
    backgroundColor: "#FFFFFF",
  },
  right: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },

  // ** modals

  overlay: {
    flex: 1,
    backgroundColor: "#00000088",
  },
  sheet: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    backgroundColor: "#fff",
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    padding: 20,
    paddingBottom: 40,
  },
  title: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 16,
    textAlign: "center",
  },
  actionItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 14,
    backgroundColor: "#f5f6fa",
    borderRadius: 10,
    marginBottom: 10,
  },
  icon: {
    marginHorizontal: 12,
  },
  label: {
    fontSize: 14,
    fontWeight: "500",
  },
  closeBtn: {
    position: "absolute",
    top: 16,
    right: 16,
  },
});
