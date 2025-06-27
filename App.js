import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import StackNavigator from "./src/navigation/StackNavigator";
import { ActivityIndicator, View } from "react-native";
import { useFonts } from "expo-font";

export default function App() {
  const [fontsLoaded] = useFonts({
    "BeVietnamPro-Regular": require("./assets/fonts/Be_Vietnam_Pro/BeVietnamPro-Regular.ttf"),
    "BeVietnamPro-Bold": require("./assets/fonts/Be_Vietnam_Pro/BeVietnamPro-Bold.ttf"),
    "BeVietnamPro-SemiBold": require("./assets/fonts/Be_Vietnam_Pro/BeVietnamPro-SemiBold.ttf"),
  });
  if (!fontsLoaded) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size={"large"} />
      </View>
    );
  }
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
}
