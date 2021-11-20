import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet, Button } from "react-native";
import "react-native-get-random-values";
import { v4 } from "uuid";

const CreateTask = ({ navigation }) => {
	let date = new Date();
	let dateString = `${date.getDate()}-${date.getMonth()}-${date.getFullYear()}`;
	const [newTask, setNewTask] = useState({
		id: v4(),
		taskName: "",
		taskDetails: "",
		createdOn: dateString,
		dueOn: "",
		asssignedTo: "",
		createdBy: "",
		taskDone: false,
	});

	const handleChange = (key, value) => {
		setNewTask({ ...newTask, [key]: value });
	};
	const creaTaskHandle = () => {
		// if (
		// 	newTask.taskName === "" ||
		// 	newTask.taskDetails === "" ||
		// 	newTask.dueOn.length !== 10 ||
		// 	newTask.asssignedTo === "" ||
		// 	newTask.createdBy === ""
		// ) {
		// 	alert("Invalid input");
		// 	return;
		// }
		// setNewTask({ ...newTask, id: v4(), createdOn: dateString });
		navigation.navigate({
			name: "Home",
			params: { newTask: newTask },
			merge: true,
		});
	};
	return (
		<View>
			<TextInput
				style={styles.textInput}
				value={newTask.taskName}
				placeholder="Name"
				onChangeText={(text) => handleChange("taskName", text)}
			/>
			<TextInput
				style={styles.textInput}
				value={newTask.taskDetails}
				placeholder="Details"
				onChangeText={(text) => handleChange("taskDetails", text)}
			/>
			<TextInput
				style={styles.textInput}
				value={newTask.dueOn}
				keyboardType="number-pad"
				maxLength={10}
				placeholder="Due date (DD-MM-YYYY)"
				onChangeText={(text) => handleChange("dueOn", text)}
			/>
			<TextInput
				style={styles.textInput}
				value={newTask.asssignedTo}
				placeholder="Assign to"
				onChangeText={(text) => handleChange("asssignedTo", text)}
			/>
			<TextInput
				style={styles.textInput}
				value={newTask.createdBy}
				placeholder="Author"
				onChangeText={(text) => handleChange("createdBy", text)}
			/>

			<View style={{ alignItems: "center" }}>
				<View style={styles.btnContainer}>
					<Button onPress={creaTaskHandle} title="Add" />
				</View>
			</View>
		</View>
	);
};
const styles = StyleSheet.create({
	textInput: {
		borderWidth: 1,
		marginHorizontal: 20,
		marginVertical: 10,
		padding: 3,
		paddingHorizontal: 8,
		fontSize: 18,
	},
	btnContainer: {
		marginTop: 20,
		width: 70,
	},
});

export default CreateTask;
