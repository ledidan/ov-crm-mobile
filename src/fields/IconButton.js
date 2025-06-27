import React from 'react';
import { Pressable, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { theme } from '../theme'; // make sure you have theme.colors.primary, white, etc.

const IconButton = ({
  iconName,
  onPress,
  color,
  size = 24,
  variant = 'text', // 'contained' | 'outlined' | 'text'
  disabled = false,
  style,
  ...props
}) => {
  const variantStyle = variantStyles[variant] || variantStyles.text;
  const iconColor =
    color || (variant === 'contained' ? theme.colors.white : theme.colors.primary);

  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled}
      style={[
        styles.base,
        variantStyle.button,
        disabled && styles.disabled,
        style,
      ]}
      {...props}
    >
      <Ionicons name={iconName} size={size} color={iconColor} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  base: {
    borderRadius: 8,
    padding: 6,
    alignItems: 'center',
    justifyContent: 'center',
  },
  disabled: {
    opacity: 0.4,
  },
});

const variantStyles = {
  contained: {
    button: {
      backgroundColor: theme.colors.primary,
    },
  },
  outlined: {
    button: {
      borderWidth: 1.2,
      borderColor: theme.colors.primary,
      backgroundColor: 'transparent',
    },
  },
  text: {
    button: {
      backgroundColor: 'transparent',
    },
  },
};

export default IconButton;
