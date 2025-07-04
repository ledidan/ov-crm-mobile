import { AppInput } from "@/fields";
import React from "react";
import { ScrollView, StyleSheet } from "react-native";

export default function AdditionalInfoTab() {
  return (
    <ScrollView style={styles.container}>
      <AppInput label="Mối quan hệ" />
      <AppInput label="Người phụ trách" />
      <AppInput label="Nguồn khách hàng" />
      <AppInput label="Nhóm khách hàng" />
      <AppInput label="Ngành kinh doanh" />
      <AppInput label="Người giới thiệu" />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 16 },
});
