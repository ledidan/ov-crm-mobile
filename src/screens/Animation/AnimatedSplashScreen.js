import React, { useEffect } from "react";
import { View, StyleSheet } from "react-native";
import LottieView from "lottie-react-native";

const AnimatedSplashScreen = ({ onAnimationFinish }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onAnimationFinish(); 
    }, 2500); 

    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={styles.container}>
      <LottieView
        source={require("assets/animations/hello-autuna.json")}
        autoPlay
        loop={false}
        resizeMode={"cover"}
        style={{ width: '100%', height: '100%' }}
      />
    </View>
  );
};

export default AnimatedSplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
});
