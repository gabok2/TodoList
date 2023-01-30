import { useState } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { styles } from "./styles";

interface TodoProps {
  name: string;
  completed: boolean;
  concluida: (id: string) => void;
  task: string;
  remove: (id: string) => void;


}
export function Todos({ name, completed, concluida, task, remove }: TodoProps) {


  function handleSelect() {
    completed
    concluida(task)

  }

  function handleRemove() {
    remove(task)
  }



  return (
    <View style={styles.container}>
      <View style={styles.main}>

        <TouchableOpacity
          style={[
            styles.button,
            completed ? styles.buttonSelect : styles.buttonUnselect,
          ]}
          onPress={handleSelect}>
          {completed ? (
            <Image source={require('../../../assets/check.png')} />
          ) : (
            ''
          )}

        </TouchableOpacity>


        <Text style={[
          completed ? styles.textSelect : styles.textUnselect,
        ]}>{name} </Text>
        <TouchableOpacity onPress={handleRemove} style={styles.lixeira}>
          <Image source={require('../../../assets/lixeira.png')} />
        </TouchableOpacity>
      </View>
    </View>
  );
}