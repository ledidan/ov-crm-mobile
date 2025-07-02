import React from 'react'
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native'

const Ticket = () => {
  const handleCreateTicket = () => {
    console.log('Tạo ticket mới')
    // Ví dụ: navigation.navigate('CreateTicketScreen')
  }

  return (
    <View style={styles.container}>
      <View style={styles.searchRow}>
        <View style={styles.searchInput}>
          <Text style={styles.placeholder}>🔍 Nhập mã phiếu</Text>
        </View>
        <View style={styles.searchInput}>
          <Text style={styles.placeholder}>🔍 Nhập tên phiếu</Text>
        </View>
      </View>

      <View style={styles.emptyBox}>
        <Image
          source={require('assets/adaptive-icon.png')} 
          style={styles.image}
          resizeMode="contain"
        />
        <Text style={styles.emptyTitle}>Chưa có ticket nào</Text>
        <Text style={styles.emptyDesc}>Hiện tại bạn chưa có ticket nào cả</Text>
      </View>

      <TouchableOpacity style={styles.button} onPress={handleCreateTicket}>
        <Text style={styles.buttonText}>Tạo ticket</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Ticket

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 16,
  },
  searchRow: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    gap: 8,
    marginBottom: 16,
  },
  searchInput: {
    flex: 1,
    backgroundColor: '#f1f1f1',
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 12,
  },
  placeholder: {
    color: '#888',
    fontSize: 14,
  },
  emptyBox: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 120,
    height: 120,
    marginBottom: 16,
  },
  emptyTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 6,
  },
  emptyDesc: {
    fontSize: 14,
    color: '#888',
  },
  button: {
    backgroundColor: '#0066ff',
    paddingVertical: 14,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 6,
    margin: 16,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
})
