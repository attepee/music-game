import { Link } from "expo-router";
import { Pressable, Text, View } from "react-native";
import { Styles } from "@/constants/Styles"
import { STRINGS } from "@/constants/Strings";

export default function Index() {
  return (
    <View style={Styles.root}>
      <View style={Styles.container}>
        <Text style={Styles.titleText}>{STRINGS.MUSIC_GAME.fi}</Text>
        <Text style={Styles.noticeText}>This app is deprecated! Click <Link href="https://attepee.github.io/task-randomizer/" style={Styles.link}>here</Link> to use the new app instead</Text>
        <Link href="/game" style={Styles.linkButton}>{STRINGS.START_BUTTON.fi}</Link>
        <Link href="/info" style={Styles.linkButton}>Info</Link>
        {/*<View style={Styles.languageContainer}>
          <Pressable style={[Styles.languageButton, Styles.languageButtonLeft]}>Fin</Pressable>
          <Pressable style={[Styles.languageButton, Styles.languageButtonRight]}>Eng</Pressable>
        </View>*/}
      </View>
    </View>
  );
}
