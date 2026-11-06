import { View, Text } from 'react-native'
import React from 'react'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

const Profile = () => {

  const insets = useSafeAreaInsets();

  return (
    <View className="flex-1 bg-gray-200" style={{ paddingTop: insets.top }}>
      <Text>Profile</Text>
    </View>
  )
}

export default Profile