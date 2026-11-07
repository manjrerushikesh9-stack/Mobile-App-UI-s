import { View, Text, TextInput, ScrollView, Pressable } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Feather from "@expo/vector-icons/Feather";
import { useState } from "react";

export default function ClinicianSearch() {
  const insets = useSafeAreaInsets();

  const [activeFilter, setActiveFilter] = useState("Primary care");

  const filters = ["Primary care", "Visit type", "Maple Ridge"];

  return (
    <View
      className="flex-1 px-2 bg-[#FAF8F5]"
      style={{ paddingTop: insets.top }}
    >
      <View className="p-4">
        <Text className="text-4xl font-bold">Find a clinician</Text>
        <Text className="text-[#65635e] text-[15px] mt-2">
          Patients near Maple Ridge
        </Text>
        <View className="relative mt-5">
          <TextInput
            placeholder="Search speciality or clinician"
            className="w-full px-10 bg-[#FDFBFA] text-[#65635e] border-[1px] border-[#e5e7eb] h-[44px] rounded-xl text-[16px] font-medium"
          />
          <Feather
            name="search"
            size={16}
            color="#27251e"
            className="absolute top-1/2 -translate-y-1/2 left-3"
          />
        </View>
        <ScrollView
          horizontal
          contentContainerStyle={{ gap: 10 }}
          className="mt-5"
        >
          {filters.map((item, index) => {
            const isSelected = activeFilter === item;

            return (
              <Pressable
                key={index}
                onPress={() => setActiveFilter(item)}
                className={`px-[16px] py-4 rounded-full border-[1px] 
                    ${
                      isSelected
                        ? "bg-[#016a71] border-[#016a71]"
                        : "bg-[#FDFBFA] border-[#e5e7eb]"
                    }
                  `}
              >
                <Text
                  className={`text-[15px] font-semibold ${
                    isSelected ? "text-white" : "text-[#65635e]"
                  }`}
                >
                  {item}
                </Text>
              </Pressable>
            );
          })}
        </ScrollView>
      </View>
    </View>
  );
}
