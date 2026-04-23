import React from "react";
import { Text, View } from "react-native";
import { SafeAreaView as RNSafeArearView } from "react-native-safe-area-context";
import { styled } from "nativewind";

const SafeAreaView = styled(RNSafeArearView);

const Insights = () => {
  return (
    <SafeAreaView className="flex-1 bg background p-5">
      <Text>Insights</Text>
    </SafeAreaView>
  );
};

export default Insights;
