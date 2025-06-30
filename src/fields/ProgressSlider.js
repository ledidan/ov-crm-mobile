import React from "react";
import {
  View,
  Text,
  StyleSheet,
  PanResponder,
  Animated,
  Dimensions,
} from "react-native";

const { width } = Dimensions.get("window");
const SLIDER_WIDTH = width - 80;

export default function ProgressSlider({ value, onChange }) {
  const pan = React.useRef(new Animated.Value(value * SLIDER_WIDTH)).current;

  const panResponder = PanResponder.create({
    onMoveShouldSetPanResponder: () => true,
    onPanResponderMove: (_, gestureState) => {
      let newX = Math.max(
        0,
        Math.min(gestureState.dx + pan.__getValue(), SLIDER_WIDTH)
      );
      pan.setValue(newX);
      onChange(newX / SLIDER_WIDTH);
    },
  });

  return (
    <View style={styles.sliderWrapper}>
      <View style={styles.track}>
        <View style={[styles.trackFill, { width: pan.__getValue() }]} />
      </View>
      <Animated.View
        style={[
          styles.thumb,
          {
            transform: [{ translateX: pan }],
          },
        ]}
        {...panResponder.panHandlers}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  sliderWrapper: {
    height: 40,
    justifyContent: "center",
    position: "relative",
  },
  track: {
    height: 12,
    width: SLIDER_WIDTH,
    backgroundColor: "#eee",
    borderRadius: 50,
    overflow: "hidden",
    alignSelf: "center",
    justifyContent: "center",
  },
  trackFill: {
    position: "absolute",
    left: 0,
    top: 0,
    bottom: 0,
    backgroundColor: "#4CAF50",
    borderRadius: 50,
  },
  thumb: {
    position: "absolute",
    top: 10,
    left: -4,
    width: 20,
    height: 20,
    borderRadius: 20,
    backgroundColor: "#fff",
    borderWidth: 4,
    borderColor: "#4CAF50",
  },
});
