import { Stack } from "expo-router";
import { STRINGS } from "@/constants/Strings";

export default function RootLayout() {
  return (
    <Stack screenOptions={{
      title: STRINGS.MUSIC_GAME.fi
    }}>
      <Stack.Screen name="index" />
      <Stack.Screen name="game" />
    </Stack>
  );
}
