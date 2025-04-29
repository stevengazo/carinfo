import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";

const ImagesScreen = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontSize: 24 }}>Manage Images</Text>
      <Text style={{ fontSize: 16, marginTop: 10 }}>
        This is the Images screen.
      </Text>
    </View>
  );
};

export default ImagesScreen;
