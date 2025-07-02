import React from 'react';
import { View, StyleSheet } from 'react-native';

const VerticalDivider = ({ color = '#ccc', width = 1, height = '100%', style }) => {
  return (
    <View
      style={[
        styles.divider,
        { backgroundColor: color, width: width, height: height },
        style,
      ]}
    />
  );
};

const styles = StyleSheet.create({
  divider: {
  },
});

export default VerticalDivider;