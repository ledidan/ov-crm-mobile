import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { AppInput, ToggleSwitch } from "../../fields";

const PaymentInfoSection = () => {
  const [shipping, setShipping] = useState("");
  const [shippingType, setShippingType] = useState("pre_tax");
  const [discount, setDiscount] = useState("");
  const [discountType, setDiscountType] = useState("pre_tax");
  const [vat, setVat] = useState("");
  const [installation, setInstallation] = useState("");
  const [installationType, setInstallationType] = useState("pre_discount");

  const toggleOptions = {
    tax: [
      { key: "pre_tax", label: "Trước thuế" },
      { key: "post_tax", label: "Sau thuế" },
    ],
    discount: [
      { key: "pre_discount", label: "Trước CK" },
      { key: "post_discount", label: "Sau CK" },
    ],
  };

  return (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>Thông tin thanh toán</Text>

      <View style={styles.row}>
        <Text style={styles.boldLabel}>Tổng</Text>
        <Text style={styles.amountText}>0 đ</Text>
      </View>

      <Text style={styles.subLabel}>Phí vận chuyển</Text>
      <View style={styles.inlineInput}>
        <AppInput
          value={shipping}
          onChangeText={setShipping}
          placeholder="0"
          keyboardType="numeric"
          style={{ flex: 1 }}
        />
        <ToggleSwitch
          options={toggleOptions.tax}
          selected={shippingType}
          onSelect={setShippingType}
        />
      </View>

      <Text style={styles.subLabel}>Chiết khấu</Text>
      <View style={styles.inlineInput}>
        <AppInput
          value={discount}
          onChangeText={setDiscount}
          placeholder="0"
          keyboardType="numeric"
          style={{ flex: 1 }}
        />
        <ToggleSwitch
          options={toggleOptions.tax}
          selected={discountType}
          onSelect={setDiscountType}
        />
      </View>

      <Text style={styles.subLabel}>Thuế VAT</Text>
      <View style={styles.inlineInput}>
        <AppInput
          value={vat}
          onChangeText={setVat}
          placeholder="0"
          keyboardType="numeric"
          style={{ flex: 1 }}
        />
        <View style={{ width: 60 }} />
      </View>

      <Text style={styles.subLabel}>Phí lắp đặt</Text>
      <View style={styles.inlineInput}>
        <AppInput
          value={installation}
          onChangeText={setInstallation}
          placeholder="0"
          keyboardType="numeric"
          style={{ flex: 1 }}
        />
        <ToggleSwitch
          options={toggleOptions.discount}
          selected={installationType}
          onSelect={setInstallationType}
        />
      </View>

      <View style={styles.row}>
        <Text style={styles.boldLabel}>Tổng tiền</Text>
        <Text style={styles.amountText}>0 đ</Text>
      </View>
    </View>
  );
};

export default PaymentInfoSection;

const styles = StyleSheet.create({
  section: {
    backgroundColor: "#F5F7FA",
    borderRadius: 10,
    padding: 12,
    marginVertical: 8,
  },
  sectionTitle: {
    fontWeight: "bold",
    marginBottom: 10,
    fontSize: 16,
  },
  subLabel: {
    fontSize: 14,
    marginTop: 12,
    marginBottom: 4,
    fontWeight: "500",
  },
  inlineInput: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 16,
  },
  boldLabel: {
    fontWeight: "bold",
    fontSize: 15,
  },
  amountText: {
    fontWeight: "bold",
    color: "#000",
    fontSize: 15,
  },
});
