import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const Attachments = () => {
  const file = {
    uri: 'https://placehold.jp/100x100.png', 
    name: '5A1912FB-0A42-46A9-87B7-5FABC214E41C.jpg',
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tài liệu đính kèm</Text>

      <View style={styles.attachmentBox}>
        <Image source={{ uri: file.uri }} style={styles.image} />
        <Text style={styles.fileName} numberOfLines={1}>{file.name}</Text>
      </View>
    </View>
  );
};

export default Attachments;

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
  attachmentBox: {
    backgroundColor: '#f4f6fd',
    borderRadius: 12,
    padding: 8,
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    width: 36,
    height: 36,
    borderRadius: 6,
    marginRight: 12,
  },
  fileName: {
    flex: 1,
    fontSize: 13,
    color: '#1e1e1e',
  },
});
