import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { AppInput } from "../../fields";

const QuotationInfoSection = () => {
  const [quoteNote, setQuoteNote] = useState("");
  const [quoteContent, setQuoteContent] = useState("");
  const [renewalNote, setRenewalNote] = useState("");
  const [validDate, setValidDate] = useState("");
  const [content, setContent] = useState("");
  const [note, setNote] = useState("");
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Nội dung</Text>
      <AppInput
        value={content}
        onChangeText={setContent}
        placeholder="Nhập nội dung"
        multiline
        style={{ minHeight: 80 }}
      />

      <Text style={styles.label}>Nhập nội dung</Text>
      <AppInput
        value={note}
        onChangeText={setNote}
        placeholder="Nhập nội dung"
        multiline
        style={{ minHeight: 80 }}
      />
      <Text style={styles.label}>Mã báo giá</Text>
      <AppInput
        value={quoteNote}
        onChangeText={setQuoteNote}
        placeholder="Nhập mã báo giá"
      />

      <Text style={styles.label}>Lần báo giá</Text>
      <AppInput
        value={quoteContent}
        onChangeText={setQuoteContent}
        placeholder="Nhập lần báo giá"
      />

      <Text style={styles.label}>Nhập lần báo giá</Text>
      <AppInput
        value={renewalNote}
        onChangeText={setRenewalNote}
        placeholder="Nhập lần báo giá"
      />

      <Text style={styles.label}>Ngày hiệu lực</Text>
      <AppInput
        value={validDate}
        onChangeText={setValidDate}
        placeholder="Nhập ngày hiệu lực"
      />
    </View>
  );
};

export default QuotationInfoSection;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8F9FB",
    padding: 10,
  },
  label: {
    fontSize: 14,
    fontWeight: "500",
    marginTop: 10,
    marginBottom: 5,
  },
});
