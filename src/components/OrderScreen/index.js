import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native'
import { useNavigation } from '@react-navigation/native'

const OrderScreenComponent = () => {
  const navigation = useNavigation()

  const handleCreateOrder = () => {
    navigation.navigate('Tạo đơn hàng')
  }

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        {/* Mẫu đơn hàng */}
        <View style={styles.orderCard}>
          <View style={styles.statusBadge}>
            <Text style={styles.statusText}>Đã duyệt</Text>
          </View>
          <Text style={styles.code}>DH0001</Text>
          <View style={styles.row}>
            <Text style={styles.label}>Khách hàng</Text>
            <Text>A Bin</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>Ngày đặt hàng</Text>
            <Text>29/06/2025</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>Người phụ trách</Text>
            <Text>Đan Lê</Text>
          </View>
          <View style={styles.summary}>
            <Text style={styles.summaryItem}>Tổng tiền: 200,640</Text>
            <Text style={styles.summaryItem}>Đã thanh toán: 0</Text>
            <Text style={styles.summaryItem}>Còn lại: 200,640</Text>
          </View>
        </View>
      </ScrollView>

      <TouchableOpacity style={styles.createButton} onPress={handleCreateOrder}>
        <Text style={styles.createButtonText}>Tạo đơn hàng bán</Text>
      </TouchableOpacity>
    </View>
  )
}

export default OrderScreenComponent

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  content: { padding: 16 },
  orderCard: {
    backgroundColor: '#f9f9f9',
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
  },
  statusBadge: {
    backgroundColor: '#00796b',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 4,
    alignSelf: 'flex-start',
    marginBottom: 8,
  },
  statusText: { color: '#fff', fontSize: 12 },
  code: { fontWeight: 'bold', fontSize: 16, marginBottom: 8 },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 4,
  },
  label: { color: '#666' },
  summary: { marginTop: 12 },
  summaryItem: { fontSize: 14 },
  createButton: {
    backgroundColor: '#0066ff',
    paddingVertical: 14,
    alignItems: 'center',
    borderRadius: 6,
    margin: 16,
  },
  createButtonText: { color: '#fff', fontSize: 16 },
})
