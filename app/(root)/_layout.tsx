import { View, Text } from "react-native";
import React from "react";
import { useGlobalContext } from "@/lib/global-provider";
import { ActivityIndicator } from "react-native";
import { Redirect, Slot } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

const AppLayout = () => {
  const { loading, isLogged } = useGlobalContext();

  if (loading)
    return (
      <SafeAreaView className="bg-white flex-1 items-center justify-center">
        <ActivityIndicator size="large" className="text-black" />
      </SafeAreaView>
    );

  if (!isLogged) return <Redirect href="/sign-in" />;

  return <Slot />;
};

export default AppLayout;
