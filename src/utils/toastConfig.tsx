// toastConfig.ts
import { theme } from '@/theme';
import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { BaseToast, ErrorToast } from 'react-native-toast-message';

export const toastConfig = {
  success: (props: any) => (
    <BaseToast
      {...props}
      style={[styles.base, { borderLeftColor: theme.colors.success }]}
      contentContainerStyle={styles.content}
      text1Style={styles.title}
      text2Style={styles.message}
    />
  ),
  error: (props: any) => (
    <ErrorToast
      {...props}
      style={[styles.base, { borderLeftColor: '#f87171' }]}
      contentContainerStyle={styles.content}
      text1Style={[styles.title, { color: '#dc2626' }]}
      text2Style={styles.message}
    />
  ),
  info: (props: any) => (
    <BaseToast
      {...props}
      style={[styles.base, { borderLeftColor: '#3b82f6' }]}
      contentContainerStyle={styles.content}
      text1Style={styles.title}
      text2Style={styles.message}
    />
  ),
};

const styles = StyleSheet.create({
  base: {
    borderLeftWidth: 6,
    borderRadius: 10,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 3,
    paddingHorizontal: 12,
    paddingVertical: 10,
    minHeight: 60,
  },
  content: {
    paddingHorizontal: 10,
  },
  title: {
    fontSize: 15,
    fontWeight: '600',
    color: '#000',
  },
  message: {
    fontSize: 13,
    color: '#666',
  },
});
