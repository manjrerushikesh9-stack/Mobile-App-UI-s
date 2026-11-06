import { View, Text } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function ClinicianSearch() {
  // Top aur bottom ke safe area ki padding nikal lo
  const insets = useSafeAreaInsets();

  return (
    // Poora page gray background ka rahega, camera notch ke upar bhi!
    <View className="flex-1 bg-gray-200" style={{ paddingTop: insets.top }}>
      
      {/* Aapka asli content yahan rahega jo notch ke niche safe rahega */}
      <View className="p-4">
        <Text className="text-xl font-bold">ClinicianSearch</Text>
      </View>

    </View>
  );
}