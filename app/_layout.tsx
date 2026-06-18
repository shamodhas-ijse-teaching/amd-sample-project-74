import { View, Text } from "react-native"
import React from "react"
import { Slot } from "expo-router"
import { SafeAreaView, useSafeAreaInsets } from "react-native-safe-area-context"
import "../global.css"
import { LoaderProvider } from "@/context/LoaderContext"
import { AuthProvider } from "@/context/AuthContext"

// This file same like react App.tsx
const RootLayout = () => {
  const insets = useSafeAreaInsets()
  return (
    <LoaderProvider>
      <AuthProvider>
        <View className="flex-1" style={{ marginTop: insets.top }}>
          <Slot />
        </View>
      </AuthProvider>
    </LoaderProvider>
  )
}

export default RootLayout
