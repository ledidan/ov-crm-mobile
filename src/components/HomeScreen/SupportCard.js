import React, { useRef, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  Pressable,
  Dimensions,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const { width } = Dimensions.get("window");
const SLIDE_WIDTH = width - 40; 

const supportChannels = [
  {
    id: "1",
    title: "C3S Autuna",
    description:
      "Là một công cụ giúp kết nối trực tiếp giữa khách hàng/ đối tác với hệ thống Autuna",
    image: require("../../../assets/favicon.png"),
  },
  {
    id: "2",
    title: "Invoice Autuna",
    description:
      "Là một công cụ giúp xử lý hóa đơn, theo dõi và kết nối với hệ thống kế toán một cách mượt mà",
    image: require("../../../assets/favicon.png"),
  },
  {
    id: "3",
    title: "Help Center",
    description:
      "Kho tài liệu và video hướng dẫn chi tiết cách sử dụng hệ thống",
    image: require("../../../assets/favicon.png"),
  },
];

const SupportSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const flatListRef = useRef();

  const handleScroll = (event) => {
    const offsetX = event.nativeEvent.contentOffset.x;
    const index = Math.floor((offsetX + SLIDE_WIDTH / 2) / SLIDE_WIDTH);
    setActiveIndex(index);
  };

  const renderItem = ({ item }) => (
    <View style={[styles.card, { width: SLIDE_WIDTH }]}>
      <Image source={item.image} style={styles.image} resizeMode="cover" />
      <View style={styles.textContainer}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.description}>{item.description}</Text>
        <Pressable style={styles.link}>
          <Text style={styles.linkText}>Tìm hiểu thêm</Text>
          <Ionicons name="chevron-forward" size={14} color="#2F80ED" />
        </Pressable>
      </View>
    </View>
  );

  return (
    <View style={styles.wrapper}>
      <Text style={styles.sectionTitle}>Các kênh hỗ trợ</Text>
      <FlatList
        data={supportChannels}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={handleScroll}
        scrollEventThrottle={16}
        ref={flatListRef}
        snapToAlignment="center"
        decelerationRate="fast"
        contentContainerStyle={{ paddingHorizontal: 20 }}
      />

      <View style={styles.dots}>
        {supportChannels.map((_, index) => (
          <View
            key={index}
            style={[styles.dot, activeIndex === index && styles.activeDot]}
          />
        ))}
      </View>
    </View>
  );
};

export default SupportSlider;

const styles = StyleSheet.create({
  wrapper: {
    paddingVertical: 20
  },
  sectionTitle: {
    marginBottom: 8,
    fontSize: 18,
    fontWeight: "700",
    marginHorizontal: 6
  },
  card: {
    backgroundColor: "#F5F8FF",
    borderRadius: 12,
    padding: 12,
    marginRight: 16,
  },
  image: {
    width: "100%",
    height: 140,
    borderRadius: 8,
    marginBottom: 8,
  },
  textContainer: {
    gap: 6,
  },
  title: {
    fontWeight: "bold",
    fontSize: 16,
    color: "#1E1E1E",
  },
  description: {
    fontSize: 13,
    color: "#444",
  },
  link: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 4,
  },
  linkText: {
    color: "#2F80ED",
    fontSize: 13,
    fontWeight: "600",
    marginRight: 4,
  },
  dots: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 10,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#ccc",
    marginHorizontal: 4,
  },
  activeDot: {
    backgroundColor: "#2F80ED",
  },
});
