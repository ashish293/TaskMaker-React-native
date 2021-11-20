import React, { useState } from "react";
import {
	View,
	Text,
	StyleSheet,
	TouchableHighlight,
	TouchableOpacity,
	FlatList,
} from "react-native";
import COLORS from "../constants/Color";
import BouncyCheckbox from "react-native-bouncy-checkbox";

// const Task = (props) => {};

const Task = ({ task, taskDoneHandler, index, navigation }) => {
	const [checked, setChecked] = React.useState(task.taskDone);
	const { taskName, createdBy, dueOn, taskDone } = task;
	return (
		<View style={{ ...styles.task, backgroundColor: checked ? "#eee" : "white" }}>
			<BouncyCheckbox
				size={30}
				fillColor={COLORS.dark}
				isChecked={taskDone}
				unfillColor="#ffffff"
				iconStyle={{ borderWidth: 3, borderRadius: 4 }}
				onPress={() => {
					taskDoneHandler(index);
					setChecked(task.taskDone);
				}}
			/>
			<TouchableOpacity
				style={{ flex: 1 }}
				onPress={() => {
					navigation.navigate("TaskDetail", { task });
				}}
			>
				<View
					style={{
						flexDirection: "row",
						justifyContent: "space-between",
						opacity: checked ? 0.7 : 1,
						alignItems: "center",
					}}
				>
					<Text
						style={{
							...styles.taskName,
							textDecorationLine: checked ? "line-through" : "none",
						}}
					>
						{taskName}
					</Text>
					<View>
						<Text style={styles.createdBy}>-{createdBy}</Text>
						<Text style={styles.dueOn}>{dueOn}</Text>
					</View>
				</View>
			</TouchableOpacity>
		</View>
	);
};

const Tasks = (props) => {
	return (
		<View>
			{props.task.map((elem, index) => (
				<Task
					navigation={props.navigation}
					task={elem}
					index={index}
					key={elem.id}
					taskDoneHandler={props.taskDoneHandler}
				/>
			))}
		</View>
	);
};

const styles = StyleSheet.create({
	task: {
		flexDirection: "row",
		marginHorizontal: 10,
		paddingVertical: 15,
		marginTop: 10,
		paddingHorizontal: 10,
		alignItems: "center",
		borderRadius: 4,
	},
	taskName: {
		fontSize: 20,
		color: "black",
	},
	createdBy: {
		fontSize: 16,
		textAlign: "right",
	},
	dueOn: {
		fontSize: 18,
	},
});

export default Tasks;
