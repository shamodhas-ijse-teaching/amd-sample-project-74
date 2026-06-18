import { View, Text, TouchableOpacity } from "react-native"
import React from "react"
import { router } from "expo-router"

const Register = () => {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="text-xl font-bold text-blue-500">Register screen</Text>

      <TouchableOpacity onPress={() => router.push("/login")}>
        <Text>Got to Login</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Register
