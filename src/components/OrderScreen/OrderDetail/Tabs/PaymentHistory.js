import React from 'react'
import { View, Text, StyleSheet, FlatList } from 'react-native'

const PaymentHistory = ({ payment = {} }) => {
  const { total, paid = 0, list = [] } = payment
  const unpaid = total - paid

  return (
    <View style={styles.container}>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Ghi nhận doanh số</Text>
        <View style={styles.box}>
          <Row label="Doanh số" value={total} />
          <Row label="Doanh thu" value={total} />
          <Row label="Đã thanh toán" value={paid} />
          <Row
            label="Số tiền chưa thanh toán"
            value={unpaid}
            valueStyle={styles.unpaid}
          />
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Lịch sử thanh toán</Text>
        {unpaid > 0 && (
          <View style={styles.unpaidNotice}>
            <Text style={styles.unpaidText}>
              Chưa thanh toán: {formatCurrency(unpaid)}
            </Text>
          </View>
        )}
        <View style={styles.tableHeader}>
          <Text style={styles.headerText}>Ngày</Text>
          <Text style={styles.headerText}>Số tiền</Text>
        </View>

        <FlatList
          data={list}
          keyExtractor={(_, index) => index.toString()}
          renderItem={({ item }) => (
            <View style={styles.row}>
              <Text>{item.date}</Text>
              <Text>{formatCurrency(item.amount)}</Text>
            </View>
          )}
          ListEmptyComponent={<Text style={styles.empty}>Chưa có thanh toán</Text>}
        />
      </View>
    </View>
  )
}

const Row = ({ label, value, valueStyle }) => (
  <View style={styles.row}>
    <Text style={styles.label}>{label}</Text>
    <Text style={[styles.value, valueStyle]}>{formatCurrency(value)}</Text>
  </View>
)

const formatCurrency = (value) =>
  (value ?? 0).toLocaleString('vi-VN') + ' ₫'

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#fefefe',
    flex: 1,
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 10,
  },
  box: {
    borderWidth: 1,
    borderColor: '#d9d9d9',
    borderRadius: 8,
    padding: 12,
    backgroundColor: '#fff',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 6,
  },
  label: {
    color: '#555',
  },
  value: {
    fontWeight: '600',
  },
  unpaid: {
    color: 'red',
  },
  unpaidNotice: {
    backgroundColor: '#ffe5e5',
    borderRadius: 8,
    padding: 10,
    marginBottom: 12,
  },
  unpaidText: {
    color: 'red',
    fontWeight: '600',
  },
  tableHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 6,
    borderBottomWidth: 1,
    borderColor: '#eee',
  },
  headerText: {
    fontWeight: '600',
    color: '#888',
  },
  empty: {
    color: '#aaa',
    paddingTop: 12,
    textAlign: 'center',
  },
})

export default PaymentHistory
