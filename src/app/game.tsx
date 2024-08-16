import { Pressable, Text, View } from "react-native";
import { useEffect, useState } from "react";
import { Prompts } from "@/constants/Prompts";
import { Styles } from "@/constants/Styles";
import { STRINGS } from "@/constants/Strings"

export default function Game() {
  const [showGameStartPrompt, setShowGameStartPrompt] = useState(true);
  const [showGameEndText, setShowGameEndText] = useState(false);
  const [prompts, setPrompts] = useState(Array<object>);
  const [index, setIndex] = useState(0);

  console.log(index);

  useEffect(() => {
    if(prompts === undefined || prompts.length == 0) {
      shuffleArray(Prompts);
    }
  })

  const shuffleArray = (array: Array<object>) => {
    for(let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }

    setPrompts(array);
  }

  const increaseIndex = () => {
    index < prompts.length - 1 ? setIndex(index + 1) : setShowGameEndText(true);
  }

  return (
    <View style={Styles.root}>
      {
        showGameStartPrompt &&
        <Pressable  style={Styles.gameButton} onPress={() => setShowGameStartPrompt(false)}>
          <Text style={Styles.gameText}>{STRINGS.START_GAME_PROMPT.fi}</Text>
        </Pressable>
      }
      {
        !showGameStartPrompt && !showGameEndText &&
        <Pressable style={Styles.gameButton} onPress={() => increaseIndex()}>
          <Text style={Styles.gameText}>{prompts != undefined && prompts.length != 0 ? Object.values(prompts[index])[0] : null}</Text>
        </Pressable>
      }
      {
        showGameEndText &&
        <Pressable style={Styles.gameButton}>
          <Text style={Styles.gameText}>{STRINGS.END_GAME_PROMPT.fi}</Text>
        </Pressable>
      }
    </View>
  );
}
