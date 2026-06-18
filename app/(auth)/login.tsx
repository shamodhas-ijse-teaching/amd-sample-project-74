import { View, Text, TouchableOpacity } from "react-native"
import React from "react"
import { router } from "expo-router"

const Login = () => {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="text-xl font-bold text-blue-500">Login screen</Text>
      <TouchableOpacity onPress={() => router.push("/register")}>
        <Text>Got to Register</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Login
