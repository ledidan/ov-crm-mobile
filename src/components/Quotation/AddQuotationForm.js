import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { Ionicons, MaterialIcons, FontAwesome5 } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import Collapsible from "react-native-collapsible";
import PaymentInfoSection from "./PaymentInfoSection"; // import đúng component
import { theme } from "../../theme";
import AttachmentSection from "./AttachmentSection";
import QuotationInfoSection from "./QuotationInfoSection";

const AddQuotationForm = () => {
  const navigation = useNavigation();
  const [activeSection, setActiveSection] = useState(null);

  const toggleSection = (section) => {
    setActiveSection((prev) => (prev === section ? null : section));
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Thêm mới báo giá</Text>
      </View>

      <ScrollView style={styles.scrollArea}>
        {/* User & Date */}
        <View style={styles.infoRow}>
          <Ionicons name="person" size={16} color="#888" />
          <Text style={styles.infoText}>Người thực hiện: Dan Lê</Text>
        </View>
        <View style={styles.infoRow}>
          <Ionicons name="calendar" size={16} color="#888" />
          <Text style={styles.infoText}>Ngày tạo: 27/06/2025</Text>
        </View>

        {/* Thêm khách hàng */}
        <Text style={styles.requiredLabel}>
          Khách hàng <Text style={{ color: "red" }}>*</Text>
        </Text>
        <TouchableOpacity style={styles.cardButton}>
          <Ionicons name="person-add" size={20} color={theme.colors.primary} />
          <Text style={styles.cardButtonText}>Thêm mới khách hàng</Text>
        </TouchableOpacity>

        {/* Thêm sản phẩm */}
        <Text style={styles.requiredLabel}>
          Sản phẩm <Text style={{ color: "red" }}>*</Text>
        </Text>
        <TouchableOpacity style={styles.cardButton}>
          <FontAwesome5 name="box" size={20} color={theme.colors.primary} />
          <Text style={styles.cardButtonText}>Thêm sản phẩm</Text>
        </TouchableOpacity>

        {/* Collapsible Sections */}
        {[
          { key: "payment", label: "Thông tin thanh toán", component: <PaymentInfoSection /> },
          { key: "attachment", label: "Tài liệu đính kèm", component: <AttachmentSection /> },
          { key: "quote", label: "Thông tin báo giá", component: <QuotationInfoSection /> },
          { key: "support", label: "Thông tin bổ trợ", component: <Text>Bổ trợ</Text> },
        ].map(({ key, label, component }) => (
          <View key={key}>
            <TouchableOpacity onPress={() => toggleSection(key)} style={styles.expandItem}>
              <Text style={styles.expandText}>{label}</Text>
              <MaterialIcons
                name={activeSection === key ? "keyboard-arrow-down" : "keyboard-arrow-right"}
                size={24}
                color="#999"
              />
            </TouchableOpacity>
            <Collapsible collapsed={activeSection !== key}>
              <View style={styles.collapseContent}>
                {component}
              </View>
            </Collapsible>
          </View>
        ))}
      </ScrollView>

      <TouchableOpacity style={styles.submitBtn}>
        <Text style={styles.submitText}>Thêm mới</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AddQuotationForm;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8F9FB",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingTop: 50,
    paddingHorizontal: 16,
    paddingBottom: 16,
    backgroundColor: "#fff",
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 10,
  },
  scrollArea: {
    flex: 1,
    paddingHorizontal: 16,
    marginTop: 8,
  },
  infoRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 6,
  },
  infoText: {
    marginLeft: 6,
    color: "#666",
  },
  requiredLabel: {
    marginTop: 16,
    marginBottom: 4,
    fontWeight: "600",
  },
  cardButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 14,
    borderRadius: 10,
    borderWidth: 1,
    borderStyle: "dashed",
    borderColor: "#ccc",
    marginBottom: 16,
  },
  cardButtonText: {
    marginLeft: 10,
    fontSize: 15,
    color: theme.colors.primary,
    fontWeight: "500",
  },
  expandItem: {
    backgroundColor: "#fff",
    paddingVertical: 14,
    paddingHorizontal: 10,
    borderBottomWidth: 1,
    borderColor: "#eee",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  expandText: {
    fontSize: 16,
    color: "#333",
  },
  collapseContent: {
    padding: 10,
    backgroundColor: "#fff",
  },
  submitBtn: {
    backgroundColor: "#000",
    padding: 14,
    borderRadius: 10,
    margin: 16,
    alignItems: "center",
  },
  submitText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
