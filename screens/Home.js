import React, { useState, useEffect } from "react";
import { View, Text, Button, TouchableOpacity, StyleSheet } from "react-native";
import Tasks from "../components/Tasks";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";

const Home = ({ navigation, route }) => {
	const [tasks, setTasks] = useState([
		{
			id: 1,
			taskName: "Create app",
			taskDetails: "Create task app as assignment for App development training",
			createdOn: "19-11-21",
			dueOn: "23-11-21",
			asssignedTo: "Ashish",
			createdBy: "Ashish",
			taskDone: false,
		},
		{
			id: 2,
			taskName: "Create 3 screens in app",
			taskDetails: "Create task app as assignment for App development training",
			createdOn: "19-11-21",
			dueOn: "23-11-21",
			asssignedTo: "Ashish",
			createdBy: "Ashish",
			taskDone: false,
		},
	]);
	useEffect(() => {
		if (route.params?.newTask) {
			setTasks([...tasks, route.params.newTask]);
		}
	}, [route.params?.newTask]);
	const taskDoneHandler = (index) => {
		let temp = tasks;
		temp[index].taskDone = !temp[index].taskDone;
		setTasks(temp);
	};
	const addTaskBtnHandle = () => {
		navigation.navigate("Create");
	};

	return (
		<View style={{ flex: 1 }}>
			<Tasks task={tasks} navigation={navigation} taskDoneHandler={taskDoneHandler} />
			<TouchableOpacity style={styles.addBtn} onPress={addTaskBtnHandle}>
				<FontAwesomeIcon icon={faPlusCircle} style={styles.addBtnIcon} size={50} />
			</TouchableOpacity>
		</View>
	);
};
const styles = StyleSheet.create({
	addBtn: {
		position: "absolute",
		bottom: 20,
		right: 20,
	},
	addBtnIcon: {
		color: "orange",
	},
});

export default Home;
