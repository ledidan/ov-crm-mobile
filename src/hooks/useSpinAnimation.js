import { Animated, Easing, StyleSheet } from "react-native";
import React, { useRef, useEffect } from "react";

const useSpinAnimation = (start = false) => {
  const spinAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (start) {
      Animated.loop(
        Animated.timing(spinAnim, {
          toValue: 1,
          duration: 1000,
          easing: Easing.linear,
          useNativeDriver: true,
        })
      ).start();
    } else {
      spinAnim.setValue(0);
    }
  }, [start]);

  const spin = spinAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  return spin;
};

export const showLoadingOverlay = () => {
  const spin = useSpinAnimation(true);

  return (
    <View style={styles.overlay}>
      <Animated.View style={{ transform: [{ rotate: spin }] }}>
        <Ionicons name="sync" size={40} color="#007AFF" />
      </Animated.View>
      <Text style={styles.loadingText}>Đang đồng bộ...</Text>
    </View>
  );
};


const styles = StyleSheet.create({
    overlay: {
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: "rgba(0,0,0,0.2)",
      justifyContent: "center",
      alignItems: "center",
      zIndex: 999,
    },
    loadingText: {
      marginTop: 12,
      fontSize: 16,
      fontWeight: "500",
      color: "#007AFF",
    },
  });
  