import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const Ticket = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Ticket liên quan</Text>
      <View style={styles.card}>
        <Image
          source={require('assets/adaptive-icon.png')}
          style={styles.image}
          resizeMode="contain"
        />
        <Text style={styles.noTicketText}>Chưa có ticket</Text>
        <Text style={styles.subText}>Chưa có dữ liệu</Text>
      </View>
    </View>
  );
};

export default Ticket;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f7f8fc',
    padding: 16,
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 12,
    marginLeft: 4,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    paddingVertical: 32,
    paddingHorizontal: 16,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 16,
  },
  noTicketText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1e1e1e',
    marginBottom: 4,
  },
  subText: {
    fontSize: 14,
    color: '#888',
  },
});
