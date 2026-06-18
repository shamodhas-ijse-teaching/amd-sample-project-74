import { View, Text } from "react-native"
import React from "react"
import { Tabs } from "expo-router"

import { MaterialIcons } from "@expo/vector-icons"

const tabs = [
  { name: "home", title: "Home", icon: "home" },
  { name: "tasks", title: "Tasks", icon: "list" },
  { name: "news", title: "News", icon: "article" },
  { name: "profile", title: "Profile", icon: "person" }
] as const

// DRY - don't Repeat Yourself
const DashboardLayout = () => {
  return (
    <Tabs
      screenOptions={{ headerShown: false }}
      // tabBar={() => <></>}
    >
      {tabs.map((tab) => (
        <Tabs.Screen
          name={tab?.name}
          options={{
            title: tab?.title,
            tabBarIcon: ({ color, size }) => (
              <MaterialIcons name={tab?.icon} size={size} color={color} />
            )
          }}
        />
      ))}
    </Tabs>
  )
}

export default DashboardLayout
