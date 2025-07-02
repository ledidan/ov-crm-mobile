import React, { useState } from 'react'
import {
  FlatList,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
} from 'react-native'
import { Ionicons } from '@expo/vector-icons'

const Conversation = ({ logs = [] }) => {
  const [comment, setComment] = useState('')

  const handleSend = () => {
    if (!comment.trim()) return
    console.log('Send:', comment)
    setComment('')
  }

  const renderItem = ({ item }) => (
    <View style={styles.commentItem}>
      <View style={styles.avatar} />
      <View style={styles.content}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.action}>
          {item.action} <Text style={styles.link}>{item.orderCode}</Text>
        </Text>
        <Text style={styles.timestamp}>{item.timestamp}</Text>
      </View>
      <Ionicons name="thumbs-up-outline" size={18} color="#aaa" />
    </View>
  )

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 , backgroundColor: '#fff'}}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      keyboardVerticalOffset={80}
    >
      <FlatList
        data={logs}
        keyExtractor={(_, index) => index.toString()}
        renderItem={renderItem}
        contentContainerStyle={styles.list}
      />
      <View style={styles.inputBox}>
        <TouchableOpacity style={styles.plus}>
          <Ionicons name="add" size={20} color="#999" />
        </TouchableOpacity>
        <TextInput
          style={styles.input}
          placeholder="Để lại bình luận của bạn"
          value={comment}
          onChangeText={setComment}
        />
        <TouchableOpacity onPress={handleSend}>
          <Ionicons name="send" size={20} color="#007bff" />
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  )
}

export default Conversation
const styles = StyleSheet.create({
  list: {
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 90, 
  },
  commentItem: {
    flexDirection: 'row',
    marginBottom: 16,
    alignItems: 'flex-start',
  },
  avatar: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#eee',
    marginRight: 10,
  },
  content: { flex: 1 },
  name: { fontWeight: 'bold', marginBottom: 2 },
  action: { color: '#333' },
  link: { color: '#1e88e5', textDecorationLine: 'underline' },
  timestamp: { fontSize: 12, color: '#aaa', marginTop: 4 },

  inputBox: {
    position: 'absolute',
    bottom: 10,
    left: 0,
    right: 0,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderColor: '#eee',
    paddingHorizontal: 10,
    paddingBottom: 40,
    paddingTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  plus: {
    marginRight: 6,
    padding: 4,
  },
  input: {
    flex: 1,
    height: 36,
    borderRadius: 18,
    paddingHorizontal: 12,
    backgroundColor: '#f1f1f1',
    marginRight: 6,
  },
})
