import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'

const Attachments = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Danh sách tài liệu</Text>
      <View style={styles.emptyBox}>
        <Image
          source={require('assets/favicon.png')} // ⚠️ Thay thế bằng đường dẫn ảnh thực tế của bạn
          style={styles.image}
          resizeMode="contain"
        />
        <Text style={styles.emptyTitle}>Không có tài liệu nào</Text>
        <Text style={styles.emptyDesc}>
          Không tìm thấy tệp đính kèm nào phù hợp
        </Text>
      </View>
    </View>
  )
}

export default Attachments

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fafafa',
  },
  title: {
    fontWeight: '600',
    fontSize: 16,
    marginBottom: 16,
  },
  emptyBox: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 60,
  },
  image: {
    width: 150,
    height: 150,
    marginBottom: 16,
  },
  emptyTitle: {
    fontWeight: '600',
    fontSize: 16,
    marginBottom: 8,
  },
  emptyDesc: {
    color: '#888',
    fontSize: 14,
  },
})
