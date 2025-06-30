import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const CustomerInfo = ({ customer }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>{customer.name}</Text>
      <View style={styles.row}>
        <Text style={styles.label}>📞</Text>
        <Text style={styles.text}>{customer.phone || 'Chưa cập nhật'}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.label}>✉️</Text>
        <Text style={styles.text}>{customer.email || 'Chưa cập nhật'}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.label}>📍</Text>
        <Text style={styles.text}>{customer.address || 'Chưa cập nhật'}</Text>
      </View>
    </View>
  )
}

export default CustomerInfo

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    padding: 16,
    borderRadius: 10,
    borderTopWidth: 1,
    borderColor: '#eee',
    paddingTop: 10,
    marginBottom: 20,
  },
  name: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  row: {
    flexDirection: 'row',
    marginTop: 6,
  },
  label: {
    marginRight: 6,
    color: '#888',
  },
  text: {
    color: '#333',
  },
})
