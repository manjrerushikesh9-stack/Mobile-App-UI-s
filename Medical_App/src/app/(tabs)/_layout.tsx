import { Tabs } from "expo-router";
import "../../../global.css";
import { Ionicons } from "@expo/vector-icons";
import { View } from "react-native";
import Entypo from "@expo/vector-icons/Entypo";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";

const RootLayout = () => {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "#016A71",
        tabBarInactiveTintColor: "#27251e",
        tabBarStyle: {
          height: 70,
          paddingBottom: 10,
          paddingTop: 2,
          backgroundColor: "#FAF8F5",
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Search",
          headerShown: false,
          tabBarLabelStyle: {
            fontSize: 12,
            fontWeight: "bold",
          },
          tabBarIcon: ({ color, focused }) => (
            <View className="items-center justify-center">
              {focused && (
                <View className="absolute -top-[8px] w-10 h-1 bg-[#016A71] rounded-full" />
              )}

              <Ionicons
                name={focused ? "search" : "search"}
                size={24}
                color={color as string}
              />
            </View>
          ),
        }}
      />

      <Tabs.Screen
        name="appoinments"
        options={{
          title: "Appoinments",
          headerShown: false,
          tabBarLabelStyle: {
            fontSize: 12,
            fontWeight: "bold",
          },
          tabBarIcon: ({ color, focused }) => (
            <View className="items-center justify-center">
              {focused && (
                <View className="absolute -top-[8px] w-10 h-1 bg-[#016A71] rounded-full" />
              )}

              <Entypo
                name={focused ? "calendar" : "calendar"}
                size={24}
                color={color as string}
              />
            </View>
          ),
        }}
      />

      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          headerShown: false,
          tabBarLabelStyle: {
            fontSize: 12,
            fontWeight: "bold",
          },
          tabBarIcon: ({ color, focused }) => (
            <View className="items-center justify-center">
              {focused && (
                <View className="absolute -top-[8px] w-10 h-1 bg-[#016A71] rounded-full" />
              )}

              <FontAwesome5
                name={focused ? "user" : "user"}
                size={24}
                color={color as string}
              />
            </View>
          ),
        }}
      />
    </Tabs>
  );
};

export default RootLayout;
