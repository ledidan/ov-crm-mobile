import React from "react";
import { Text, View, StyleSheet } from "react-native";
import NewsCard from "./NewsCard";

const NewsList = () => {
  const newsItems = [
    {
      title: "BẢN TIN CẬP NHẬT TÍNH NĂNG MỚI NGÀY 23.06.2025",
      date: "23/06/2025",
    },
    {
      title: "[HOT] PHIÊN BẢN MỚI TÀI LIỆU HƯỚNG DẪN SỬ DỤNG PHẦN MỀM Autuna",
      date: "03/10/2023",
    },
  ];

  return (
    <View style={{ paddingVertical: 30 }}>
      <Text style={styles.title}>Có gì mới?</Text>
      {newsItems.map((item, index) => (
        <NewsCard key={index} title={item.title} date={item.date} />
      ))}
    </View>
  );
};

export default NewsList;

const styles = StyleSheet.create({
  title: {
    marginTop: 12,
    marginBottom: 8,
    fontSize: 18,
    fontWeight: "700",
    marginHorizontal: 6
  },
});
