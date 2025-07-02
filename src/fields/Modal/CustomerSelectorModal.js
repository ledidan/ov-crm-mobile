import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Modal,
  Pressable,
  FlatList,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native';
import Toast from 'react-native-toast-message';

const MOCK_CUSTOMERS = [
  { id: '1', name: 'A Bin', phone: '0385114940', contact: 'Chưa cập nhật' },
  { id: '2', name: 'B Nam', phone: '0905123456', contact: 'Đã cập nhật' },
];

const CustomerSelectorModal = ({ visible, onClose, onConfirm }) => {
  const [selectedCustomers, setSelectedCustomers] = useState([]);

  const toggleSelect = (id) => {
    setSelectedCustomers((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };

  const handleConfirm = () => {
    const selected = MOCK_CUSTOMERS.filter((c) =>
      selectedCustomers.includes(c.id)
    );
    onConfirm(selected);
    onClose();
    setSelectedCustomers([]);
    Toast.show({
      type: 'success',
      text1: 'Tạo thành công',
      text2: 'Khách hàng đã được thêm mới 🎉',
      position: "top",
      visibilityTime: 3000,
      autoHide: true,
    });
  };

  return (
    <Modal visible={visible} animationType="slide" transparent>
      <TouchableWithoutFeedback onPress={onClose}>
        <View style={styles.modalOverlay}>
          <TouchableWithoutFeedback onPress={() => {}}>
            <View style={styles.modalContent}>
              <View style={styles.modalHeader}>
                <Text style={styles.modalTitle}>Khách hàng liên quan</Text>
                <Pressable onPress={onClose}>
                  <Text style={{ color: '#2563eb', fontWeight: '500' }}>Xong</Text>
                </Pressable>
              </View>

              <View style={styles.searchBox}>
                <TextInput
                  placeholder="Tìm kiếm theo tên, email, số điện thoại"
                  placeholderTextColor="#999"
                  style={styles.searchInput}
                />
              </View>

              <Text style={styles.listLabel}>Danh sách khách hàng</Text>

              <FlatList
                data={MOCK_CUSTOMERS}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => {
                  const selected = selectedCustomers.includes(item.id);
                  return (
                    <TouchableOpacity
                      style={[styles.item, selected && styles.itemSelected]}
                      onPress={() => toggleSelect(item.id)}
                    >
                      <View style={styles.avatarPlaceholder} />
                      <View style={{ flex: 1 }}>
                        <Text style={styles.name}>{item.name}</Text>
                        <Text style={styles.sub}>{item.contact}</Text>
                        <Text style={styles.sub}>{item.phone}</Text>
                      </View>
                      {selected && <Text style={styles.check}>✓</Text>}
                    </TouchableOpacity>
                  );
                }}
              />

              {/* Confirm button */}
              {selectedCustomers.length > 0 && (
                <TouchableOpacity style={styles.confirmButton} onPress={handleConfirm}>
                  <Text style={styles.confirmText}>Thêm mới</Text>
                </TouchableOpacity>
              )}
            </View>
          </TouchableWithoutFeedback>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

export default CustomerSelectorModal;

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0,0,0,0.2)',
  },
  modalContent: {
    backgroundColor: '#fff',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    height: 700,
    maxHeight: '100%',
    padding: 20,
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: '700',
  },
  searchBox: {
    backgroundColor: '#f2f4fa',
    borderRadius: 10,
    paddingHorizontal: 12,
    paddingVertical: 8,
    marginBottom: 10,
  },
  searchInput: {
    fontSize: 14,
  },
  listLabel: {
    fontSize: 14,
    color: '#888',
    marginVertical: 8,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderColor: '#eee',
    paddingRight: 8,
  },
  itemSelected: {
    backgroundColor: '#eef4ff',
    paddingHorizontal: 6,
  },
  avatarPlaceholder: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#ccc',
    marginRight: 12,
  },
  name: {
    fontWeight: '600',
    fontSize: 14,
  },
  sub: {
    fontSize: 13,
    color: '#666',
  },
  check: {
    fontSize: 18,
    color: '#2563eb',
    fontWeight: 'bold',
  },
  confirmButton: {
    backgroundColor: '#2563eb',
    padding: 14,
    borderRadius: 12,
    marginTop: 16,
    alignItems: 'center',
  },
  confirmText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 15,
  },
});
