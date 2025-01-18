import {
  Text,
  ScrollView,
  Image,
  View,
  TouchableOpacity,
  Alert,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import images from "@/constants/images";
import icons from "@/constants/icons";
import { login } from "@/lib/appwrite";
import { useAppwrite } from "@/lib/useAppwrite";
import { Redirect } from "expo-router";
import { useGlobalContext } from "@/lib/global-provider";

const SignIn = () => {

  const { refetch, loading, isLogged } = useGlobalContext();

  if (!loading && isLogged) return <Redirect href="/" />;

  const handleLogin = async () => {
    const result = await login();
    if (result) {
      console.log("login success", result);
      refetch();
    } else {
      Alert.alert("Error", "Failed to login");
    }
  };
  return (
    <SafeAreaView className="bg-white h-full">
      <ScrollView contentContainerClassName="h-full">
        <Image
          source={images.onboarding}
          className="w-full h-4/6"
          resizeMode="contain"
        />
        <View className="px-10">
          <Text className="text-black text-center uppercase text-xl font-Rubik_Light mb-2">
            Welcome Back!
          </Text>
          <Text className="text-zinc-900 text-center font-Rubik_Bold text-3xl">
            Let's get you closer to
          </Text>
          <Text className="text-orange-500 text-center font-Rubik_Bold text-3xl">
            Your dream home
          </Text>
        </View>

        <View className="mt-10">
          <Text className="text-zinc-700 text-center font-Rubik_Regular text-md mb-3">
            Login securely with Google
          </Text>
          <TouchableOpacity
            onPress={handleLogin}
            className="bg-white shadow-md py-4 rounded-full mx-6 border border-zinc-200"
          >
            <View className="flex-row items-center justify-center gap-2">
              <Image
                source={icons.google}
                className="w-6 h-6"
                resizeMode="contain"
              />
              <Text className="text-black text-center font-Rubik_Medium text-xl">
                Continue with Google
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignIn;
