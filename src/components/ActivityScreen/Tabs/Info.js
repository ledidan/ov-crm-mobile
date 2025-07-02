import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const Info = () => {
  return (
    <View style={styles.container}>
      {/* Box thông tin công việc */}
      <View style={styles.infoBox}>
        {/* Trạng thái */}
        <View style={styles.row}>
          <Text style={styles.label}>Trạng thái</Text>
          <TouchableOpacity style={styles.statusButton}>
            <Text style={styles.statusText}>Đang tiến hành</Text>
            <Ionicons name="chevron-down" size={16} color="#fff" />
          </TouchableOpacity>
        </View>

        {/* Quan trọng */}
        <View style={styles.row}>
          <Text style={styles.label}>Quan trọng</Text>
          <View style={styles.flagRow}>
            <Ionicons name="flag-outline" size={16} color="#1e1e1e" />
            <Text style={styles.flagText}>Đánh giá quan trọng</Text>
          </View>
        </View>

        {/* Khối lượng công việc */}
        <View style={styles.row}>
          <Text style={styles.label}>Khối lượng công việc</Text>
          <Text style={styles.value}>1</Text>
        </View>

        {/* Loại công việc */}
        <View style={styles.row}>
          <Text style={styles.label}>Loại công việc</Text>
          <Text style={styles.value}>Công việc</Text>
        </View>

        {/* Mã công việc */}
        <View style={styles.row}>
          <Text style={styles.label}>Mã công việc</Text>
          <Text style={[styles.value, { fontWeight: '500' }]}>CVI/2025-06/0001</Text>
        </View>
      </View>

      {/* Tiêu đề "Các thông tin bổ trợ" */}
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionText}>Các thông tin bổ trợ</Text>
      </View>
    </View>
  );
};

export default Info;

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#f7f8fc',
    flex: 1,
  },
  infoBox: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 3,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 8,
  },
  label: {
    color: '#555',
    fontSize: 14,
  },
  value: {
    fontSize: 14,
    color: '#111',
  },
  statusButton: {
    flexDirection: 'row',
    backgroundColor: '#2563eb',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
    alignItems: 'center',
  },
  statusText: {
    color: '#fff',
    marginRight: 4,
    fontSize: 14,
  },
  flagRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  flagText: {
    marginLeft: 6,
    fontSize: 14,
    color: '#111',
  },
  sectionHeader: {
    backgroundColor: '#fff',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 12,
  },
  sectionText: {
    fontSize: 16,
    fontWeight: '600',
  },
});
