import { Stack } from "expo-router";
import images from "../../assets";
import { ImageBackground } from "react-native";

// Author: Trieu
// This component is used to display the stack layout of the Profile module include Account, Beneficiary, Chat
const StackLayout = () => {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          headerShown: false,
        }}
      ></Stack.Screen>
      <Stack.Screen
        name="Account"
        options={{
          headerShown: true,
          headerTitleAlign: "center",
          headerTitle: "Change Password",
          headerTitleStyle: { fontSize: 13, color: "#fff" },
          headerTintColor: "#fff",
          headerBackground: () => (
            <ImageBackground
              source={images.bglinear}
              style={{ width: "100%", height: "100%" }}
            />
          ),
        }}
      ></Stack.Screen>
      <Stack.Screen
        name="Beneficiary"
        options={{
          headerShown: true,
          headerTitleAlign: "center",
          headerTitleStyle: { fontSize: 13, color: "#fff" },
          headerTintColor: "#fff",
          headerBackground: () => (
            <ImageBackground
              source={images.bglinear}
              style={{ width: "100%", height: "100%" }}
            />
          ),
        }}
      ></Stack.Screen>
      <Stack.Screen
        name="Chat"
        options={{
          headerShown: true,
          headerTitleAlign: "center",
          headerTitle: "Chat GPT",
          headerTitleStyle: { fontSize: 13, color: "#fff" },
          headerTintColor: "#fff",
          headerBackground: () => (
            <ImageBackground
              source={images.bglinear}
              style={{ width: "100%", height: "100%" }}
            />
          ),
        }}
      ></Stack.Screen>
    </Stack>
  );
};

export default StackLayout;
