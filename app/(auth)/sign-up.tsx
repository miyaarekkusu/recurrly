import { Link } from "expo-router";
import React from "react";
import { Text, View } from "react-native";

const SignUp = () => {
  return (
    <View>
      <Text>Sign Up</Text>
      <Link href="/(auth)/sign-up">Sign Up</Link>
    </View>
  );
};

export default SignUp;
