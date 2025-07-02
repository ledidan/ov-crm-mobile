import React, { useState } from 'react'
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  TextInput
} from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import DateTimePicker from '@react-native-community/datetimepicker'

const CreateSaleOrderScreen = ({ navigation }) => {
  const [selectedDate, setSelectedDate] = useState(new Date())
  const [showDatePicker, setShowDatePicker] = useState(false)

  const handleDateChange = (event, date) => {
    setShowDatePicker(false)
    if (date) {
      setSelectedDate(date)
    }
  }

  const formatDate = (date) => {
    return date.toLocaleDateString('vi-VN')
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.section}>
        <Text style={styles.label}>Người thực hiện</Text>
        <TouchableOpacity style={styles.inputRow}>
          <Ionicons name="person-circle" size={24} color="#ccc" />
          <Text style={styles.inputText}>Đan Lê</Text>
          <Ionicons name="chevron-down" size={20} color="#aaa" />
        </TouchableOpacity>
      </View>

      <View style={styles.section}>
        <Text style={styles.label}>Ngày đặt hàng</Text>
        <TouchableOpacity
          style={styles.inputRow}
          onPress={() => setShowDatePicker(true)}
        >
          <Ionicons name="calendar" size={20} color="#ccc" />
          <Text style={styles.inputText}>{formatDate(selectedDate)}</Text>
        </TouchableOpacity>
        {showDatePicker && (
          <DateTimePicker
            value={selectedDate}
            mode="date"
            display="default"
            onChange={handleDateChange}
          />
        )}
      </View>

      <View style={styles.section}>
        <Text style={styles.label}>Khách hàng</Text>
        <View style={styles.customerBox}>
          <Text style={styles.customerName}>A Bin</Text>
          <View style={styles.contactRow}>
            <Ionicons name="call-outline" size={16} color="#333" />
            <Text style={styles.contactText}>0385114940</Text>
            <Ionicons name="mail-outline" size={16} color="#ccc" style={{ marginLeft: 8 }} />
            <Text style={[styles.contactText, { color: '#ccc' }]}>Chưa cập nhật</Text>
          </View>
          <Text style={styles.address}>Địa chỉ: Chưa cập nhật</Text>
          <Text style={styles.link}>Người liên hệ: A Bin • 0385114940</Text>
        </View>
      </View>

      <View style={styles.section}>
        <TouchableOpacity style={styles.productBox}>
          <Ionicons name="add-circle-outline" size={20} color="#1976d2" />
          <Text style={styles.addProductText}>Thêm sản phẩm</Text>
        </TouchableOpacity>
      </View>

      {[
        'Thông tin thanh toán',
        'Thông tin đơn hàng',
        'Thông tin bổ trợ',
        'Tài liệu đính kèm',
        'Quà tặng & điểm',
        'Điều khoản đơn hàng'
      ].map((title, index) => (
        <TouchableOpacity key={index} style={styles.accordionRow}>
          <Text style={styles.accordionText}>{title}</Text>
          <Ionicons name="chevron-forward" size={18} color="#aaa" />
        </TouchableOpacity>
      ))}

      <TouchableOpacity style={styles.addButton}>
        <Text style={styles.addButtonText}>Thêm mới</Text>
      </TouchableOpacity>
    </ScrollView>
  )
}

export default CreateSaleOrderScreen

const styles = StyleSheet.create({
  container: {
    padding: 16,
    paddingBottom: 100,
    backgroundColor: '#fff'
  },
  section: {
    marginBottom: 16
  },
  label: {
    fontWeight: 'bold',
    marginBottom: 6,
    fontSize: 14
  },
  inputRow: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f4f4f4',
    padding: 10,
    borderRadius: 8
  },
  inputText: {
    marginLeft: 8,
    flex: 1
  },
  customerBox: {
    backgroundColor: '#f9f9f9',
    padding: 12,
    borderRadius: 8
  },
  customerName: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 6
  },
  contactRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4
  },
  contactText: {
    marginLeft: 4,
    fontSize: 13
  },
  address: {
    color: '#555',
    fontSize: 13
  },
  link: {
    color: '#1e88e5',
    marginTop: 4,
    fontSize: 13
  },
  productBox: {
    borderWidth: 1,
    borderColor: '#1976d2',
    borderStyle: 'dashed',
    padding: 12,
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  addProductText: {
    marginLeft: 6,
    color: '#1976d2'
  },
  accordionRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 14,
    borderBottomWidth: 1,
    borderColor: '#f0f0f0'
  },
  accordionText: {
    fontSize: 15
  },
  addButton: {
    marginTop: 24,
    backgroundColor: '#1976d2',
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: 'center'
  },
  addButtonText: {
    color: '#fff',
    fontWeight: 'bold'
  }
})
