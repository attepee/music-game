import { Link } from "expo-router";
import { Text, View } from "react-native";
import { Styles } from "@/constants/Styles"
import { STRINGS } from "@/constants/Strings";

export default function Index() {
  return (
    <View style={Styles.root}>
      <View style={Styles.container}>
        <Text style={Styles.titleText}>{STRINGS.MUSIC_GAME.fi}</Text>
        <Link href="/game" style={Styles.linkButton}>{STRINGS.START_BUTTON.fi}</Link>
        <Link href="/info" style={Styles.linkButton}>Info</Link>
      </View>
    </View>
  );
}
