import { Pressable, Text, View } from "react-native";
import { useEffect, useState } from "react";
import { Feather } from "@expo/vector-icons";
import { Prompts } from "@/constants/Prompts";
import { Styles } from "@/constants/Styles";


export default function Game() {
  const [prompts, setPrompts] = useState(Array<object>);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if(prompts === undefined || prompts.length == 0) {
      shuffleArray(Prompts);
    }
  });

  const shuffleArray = (array: Array<object>) => {
    for(let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }

    setPrompts(array);
  }

  const decreaseIndex = () => {
    index > 0 ? setIndex(index - 1) : setIndex(index);
  }

  const increaseIndex = () => {
    index < prompts.length - 1 ? setIndex(index + 1) : setIndex(index);
  }

  return (
    <View style={Styles.root}>
      <Text>
        {index + 1}/{prompts != undefined && prompts.length != 0 ? prompts.length : null}
      </Text>
      <Text>
        {prompts != undefined && prompts.length != 0 ? Object.values(prompts[index])[1] : null}
      </Text>
      <View style={Styles.gameNavButtonContainer}>
        <Feather name="arrow-left-circle" size={24} color="black" onPress={() => decreaseIndex()} />
        <Feather name="arrow-right-circle" size={24} color="black" onPress={() => increaseIndex()} />
      </View>
    </View>
  );
}
