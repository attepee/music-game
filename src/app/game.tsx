import { Text, View } from "react-native";
import { Prompts } from "@/constants/prompts";
import { Link } from "expo-router";

export default function Game() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Game</Text>
    </View>
  );
}
