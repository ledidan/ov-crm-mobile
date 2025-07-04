import React, { useState } from "react";
import { AppInput } from "@/fields";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import { Ionicons } from "@expo/vector-icons";

export default function CustomerInfoTab() {
  const [imageUri, setImageUri] = useState(null);

  const pickImage = async () => {
    const permissionResult =
      await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permissionResult.status !== "granted") {
      Alert.alert(
        "Quyền bị từ chối",
        "App cần quyền truy cập ảnh để tiếp tục."
      );
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 0.5,
      allowsEditing: true,
    });

    if (!result.canceled && result.assets.length > 0) {
      setImageUri(result.assets[0].uri);
    }
  };
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.placeholderText}>Chọn ảnh KH</Text>
      <TouchableOpacity style={styles.imagePicker} onPress={pickImage}>
        {imageUri ? (
          <Image source={{ uri: imageUri }} style={styles.image} />
        ) : (
          <View style={styles.placeholder}>
            <Ionicons name="camera" size={26} color="#ccc" />
          </View>
        )}
      </TouchableOpacity>
      <AppInput label="Mã KH" />
      <AppInput label="Tên khách hàng" required />
      <AppInput label="Địa chỉ" />
      <AppInput label="Điện thoại" />
      <AppInput label="Email" />
      <AppInput label="Website" />
      <AppInput label="Ghi chú" multiline />
      <AppInput label="Giới tính" placeholder="Vui lòng chọn" />
      <AppInput label="Mô tả" multiline />
      <AppInput label="Mã số thuế" />
      <AppInput label="Kinh độ" />
      <AppInput label="Vĩ độ" />
      <AppInput label="Phường/Xã" placeholder="Vui lòng chọn" />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 16 },

  imagePicker: {
    alignItems: "left",
    marginBottom: 20,
  },
  image: {
    width: 76,
    height: 76,
    borderRadius: 48,
  },
  placeholder: {
    width: 76,
    height: 76,
    borderRadius: 48,
    borderWidth: 1,
    borderColor: "#ccc",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5F5F5",
  },
  placeholderText: {
    fontSize: 14,
    fontWeight: "600",
    marginVertical: 10,
  },
});
