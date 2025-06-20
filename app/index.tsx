import { Keyboard, KeyboardAvoidingView, Platform, Pressable, ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Task from "./Task";
import { useState } from "react";

export default function Index() {

  const [task, setTask] = useState<string>("");
  const [taskItems, setTaskItems] = useState<string[]>([]);

  function handleAddTask() {
    if (!task.trim()) return;
    Keyboard.dismiss();
    setTaskItems([...taskItems, task]);
    setTask("");
  }

  const handleDeleteTask = (index: number) => {
    const newTaskItems = [...taskItems];
    newTaskItems.splice(index, 1);
    setTaskItems(newTaskItems);
  };

  const handleDoneTask = (index: number) => {
    const newTaskItems = [...taskItems];
    newTaskItems[index] = newTaskItems[index] + " ✅";
    setTaskItems(newTaskItems);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={ styles.tasksWrapper }>
          <Text style={styles.sectionTitle}>today task</Text>
          <View style={styles.items}>
            {taskItems.map((item, index) => (
              <Task key={index} text={item} onDelete={() => handleDeleteTask(index)} onDone={() => handleDoneTask(index)} />
            ))}
          </View>
        </View>
      </ScrollView>

      <KeyboardAvoidingView
        style={styles.writeTastWrapper}
      >
        <TextInput style={styles.input} value={task} onChangeText={text => setTask(text)} placeholder={'write a task'} />
        <Pressable onPress={handleAddTask}>
          <View style={styles.addWrapper}>
            <Text style={{ color: "#fff" }}>➕</Text>
          </View>
        </Pressable>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ddd",
  },
  tasksWrapper: {
    padding: 20,
    borderWidth: 3,
    borderColor: "#000",
    borderRadius: 15,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "bold",
  },
  items: {
    marginTop: 30,
  },
  writeTastWrapper: {
    position: "absolute",
    bottom: 40,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#a7a0a0",
    padding: 5,
  },
  input: {
    padding: 15,
    width: "60%",
    backgroundColor: "#fff",
    borderRadius: 50,
    borderColor: "#C0C0C0",
    borderWidth: 1,
    fontSize: 20,
  },
  addWrapper: {
    width: 50,
    height: 50,
    backgroundColor: "#FFF",
    borderRadius: "50%",
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#C0C0C0",
    borderWidth: 1,
  }
});