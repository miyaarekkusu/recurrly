import React from "react";
import { Text, View } from "react-native";
import { SafeAreaView as RNSafeArearView } from "react-native-safe-area-context";
import { styled } from "nativewind";

const SafeAreaView = styled(RNSafeArearView);

const Settings = () => {
  return (
    <SafeAreaView className="flex-1 bg background p-5">
      <Text>Settings</Text>
    </SafeAreaView>
  );
};

export default Settings;
