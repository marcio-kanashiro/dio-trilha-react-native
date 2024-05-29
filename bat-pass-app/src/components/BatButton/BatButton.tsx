import { Pressable, Text, View } from "react-native";
import { styles } from "./BatButtonStyle";
import { BatTextInput } from "../BatTextInput/BatTextInput";
import { useState } from "react";
import generatePassword from "../../services/passwordServices";
import * as Clipboard from 'expo-clipboard';

export function BatButton() {
  const [password, setPassword] = useState('');

  function handleGenerateButton() {
    let generatedPassword = generatePassword();
    setPassword(generatedPassword);
  }

  function handleCopyButton() {
    Clipboard.setStringAsync(password)
  }

  return (
    <>
      <BatTextInput password={password}/>

      <Pressable
        style={styles.button}
        onPress={handleGenerateButton}
      >
        <Text style={styles.text}>GENERATE</Text>
      </Pressable>

      <Pressable 
        style={styles.button}
        onPress={handleCopyButton}
      >
        <Text style={styles.text}>⚡ COPY</Text>
      </Pressable>
    </>
  )
}