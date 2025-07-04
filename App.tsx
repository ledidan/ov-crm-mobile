import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import StackNavigator from "./src/navigation/StackNavigator";
import { ActivityIndicator, View } from "react-native";
import { useFonts } from "expo-font";
import Toast from "react-native-toast-message";
import { toastConfig } from "@/utils/toastConfig";
import AnimatedSplashScreen from "@/screens/Animation/AnimatedSplashScreen";

export default function App() {
  const [fontsLoaded] = useFonts({
    "BeVietnamPro-Regular": require("./assets/fonts/Be_Vietnam_Pro/BeVietnamPro-Regular.ttf"),
    "BeVietnamPro-Bold": require("./assets/fonts/Be_Vietnam_Pro/BeVietnamPro-Bold.ttf"),
    "BeVietnamPro-SemiBold": require("./assets/fonts/Be_Vietnam_Pro/BeVietnamPro-SemiBold.ttf"),
  });
  // const [showSplash, setShowSplash] = useState(true);

  if (!fontsLoaded) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size={"large"} />
      </View>
    );
  }
  // if (showSplash) {
  //   return <AnimatedSplashScreen onAnimationFinish={() => setShowSplash(false)} />;
  // }
  return (
    <NavigationContainer>
      <StackNavigator />
      <Toast config={toastConfig}/>
    </NavigationContainer>
  );
}
