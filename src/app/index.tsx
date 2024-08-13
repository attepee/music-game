import { Link } from "expo-router";
import { Text, View } from "react-native";
import { Styles } from "@/constants/Styles"

export default function Index() {
  return (
    <View style={Styles.root}>
      <View style={Styles.container}>
        <Text style={Styles.titleText}>Music game</Text>
        <Link href="/game" style={Styles.linkButton}>Play</Link>
        <Link href="/info" style={Styles.linkButton}>Info</Link>
      </View>
    </View>
  );
}
