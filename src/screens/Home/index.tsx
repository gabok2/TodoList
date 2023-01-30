import { useState } from "react";
import { View, Text, Image, TextInput, TouchableOpacity, FlatList } from "react-native";
import { Todos } from "../../components/Todos";

import { styles } from "./styles";

interface TodoProps {
  name: string;
  id: string;
  completed: boolean;
}

export function Home() {
  const [todos, setTodos] = useState<TodoProps[]>([]);
  const [newTodos, setNewTodos] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  const [countCriadas, setCountCriadas] = useState(0);
  const [countConcluidas, setCountConcluidas] = useState(0);

  function handleAddNewTodo() {
    if (newTodos.trim() === '') {
      return;
    }

    const newTodo = {
      id: Math.random().toString(),
      name: newTodos,
      completed: false,
    }

    setTodos(oldState => [...oldState, newTodo]);
    setCountCriadas(oldState => oldState + 1);
    setNewTodos('');
  }

  function handleCompleted(id: string) {
    const newTasks = todos.map(task => task.id === id ? {
      ...task,
      completed: !task.completed,
    } : task);
    setTodos(newTasks);

    const completedTasks = newTasks.filter(task => task.completed === true);
    setCountConcluidas(completedTasks.length);
  }

  function handleRemove(id: string) {
    const newTasks = todos.filter(task => task.id !== id);
    setTodos(newTasks);
    setCountCriadas(oldState => oldState - 1);

    const completedTasks = newTasks.filter(task => task.completed === true);
    setCountConcluidas(completedTasks.length);

  }

  function handleFocus() {
    setIsFocused(true);
  }

  function handleBlur() {
    setIsFocused(false);
  }

  return (
    <View style={styles.container} >
      <View style={styles.form}>
        <TextInput
          placeholder="Adicione uma nova tarefa"
          placeholderTextColor="#808080"
          onFocus={handleFocus}
          onBlur={handleBlur}
          value={newTodos}
          onChangeText={setNewTodos}
          style={[
            styles.input,
            (isFocused) && { borderColor: '#5E60CE' }
          ]}

        />

        <TouchableOpacity
          style={styles.button}
          activeOpacity={0.7}
          onPress={handleAddNewTodo}
        >
          <Image source={require('../../../assets/plus.png')} />
        </TouchableOpacity>
      </View>

      <View style={styles.count}>
        <View style={styles.countCriadas}>
          <Text style={styles.criadas}>Criadas</Text>
          <View style={styles.countCriadasNumber}>
            <Text style={styles.criadasNumber}>{countCriadas}</Text>
          </View>
        </View>

        <View style={styles.countConcluidas}>
          <Text style={styles.concluidas}>Concluídas</Text>
          <View style={styles.countConcluidasNumber}>
            <Text style={styles.concluidasNumber}>{countConcluidas}</Text>
          </View>

        </View>
      </View>


      <FlatList
        data={todos}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <Todos
            key={item.id}
            name={item.name}
            completed={item.completed}
            concluida={() => handleCompleted(item.id)}
            task={item.id}
            remove={() => handleRemove(item.id)}



          />
        )}
        ListEmptyComponent={() => (
          <>
            <View style={styles.linha} />
            <View style={styles.main}>
              <Image source={require('../../../assets/clipboard.png')} />
              <Text style={styles.emptyText}>Você ainda não tem tarefas cadastradas</Text>
              <Text style={styles.emptyTextSecond}>Crie tarefas e organize seus itens a fazer</Text>
            </View>
          </>

        )}


      />
    </View>
  );
}