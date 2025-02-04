import { SplashScreen, Stack } from "expo-router";
import "./global.css";
import { useFonts } from "expo-font";
import { GlobalProvider } from "@/lib/global-provider";

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    Rubik_Bold: require("../assets/fonts/Rubik-Bold.ttf"),
    Rubik_ExtraBold: require("../assets/fonts/Rubik-ExtraBold.ttf"),
    Rubik_Light: require("../assets/fonts/Rubik-Light.ttf"),
    Rubik_Medium: require("../assets/fonts/Rubik-Medium.ttf"),
    Rubik_Regular: require("../assets/fonts/Rubik-Regular.ttf"),
    Rubik_SemiBold: require("../assets/fonts/Rubik-SemiBold.ttf"),
  });
  if (fontsLoaded) {
    SplashScreen.hideAsync();
  }
  if (!fontsLoaded) {
    return null;
  }

  return (
    <GlobalProvider>
      <Stack screenOptions={{ headerShown: false }} />
    </GlobalProvider>
  );
}
