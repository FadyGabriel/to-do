import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

interface TaskProps {
    text: string;
    onDelete: () => void;
    onDone: () => void;
}

export default function Task(props: TaskProps) {
    return (
        <View style={styles.item}>
            <View style={styles.left}>
                <Pressable style={styles.square}></Pressable>
                <Text style={styles.itemText}>{props.text}</Text>
            </View>
            <View style={{ flexDirection: "row" }}>
                <Pressable style={styles.edit} onPress={props.onDone}>
                    <Text style={{ color: "#fff" }}>Done</Text>
                </Pressable>
                <Pressable style={styles.delete} onPress={props.onDelete}>
                    <Text style={{ color: "#fff" }}>Delete</Text>
                </Pressable>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    item: {
        backgroundColor: "#fff",
        padding: 15,
        borderRadius: 10,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        margin: 20,
    },
    left: {
        flexDirection: "row",
        alignItems: "center",
        flexWrap: "wrap",
    },
    square:{
        width: 24,
        height: 24,
        backgroundColor: "#55BCF6",
        borderRadius: 5,
        opacity: 0.4,
        marginRight: 15,
    },
    itemText: {
        maxWidth: "80%",
    },
    edit: {
        backgroundColor: "#55BCF6",
        padding: 10,
        borderRadius: 5,
        marginRight: 10,
    },
    delete: {
        backgroundColor: "#F55B5B",
        padding: 10,
        borderRadius: 5,
    },

})
