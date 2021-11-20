import React from "react";
import { View, Text, StyleSheet } from "react-native";

const TaskDetail = ({ navigation, route }) => {
	const data = route.params.task;
	return (
		<View style={styles.container}>
			<View style={styles.detailContainerRow}>
				<Text>Task name</Text>
				<Text style={styles.taskName}>{data.taskName}</Text>
			</View>
			<View style={styles.detailContainer}>
				<Text>Details</Text>
				<Text style={styles.taskDetails}>{data.taskDetails}</Text>
			</View>
			<View style={styles.detailContainerRow2}>
				<Text>Created By</Text>
				<Text style={styles.createdBy}>{data.createdBy}</Text>
			</View>
			<View style={styles.detailContainerRow2}>
				<Text>Created On</Text>
				<Text style={styles.createdOn}>{data.createdOn}</Text>
			</View>
			<View style={styles.detailContainerRow2}>
				<Text>Due date</Text>
				<Text style={styles.dueOn}>{data.dueOn}</Text>
			</View>
			<View style={styles.detailContainerRow2}>
				<Text>Assigned to</Text>
				<Text style={styles.asssignedTo}>{data.asssignedTo}</Text>
			</View>
			<View style={styles.detailContainerRow2}>
				<Text>Status</Text>
				<Text style={{ ...styles.taskDone, backgroundColor: data.taskDone ? "green" : "red" }}>
					{data.taskDone ? "Done" : "Not done"}
				</Text>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		marginHorizontal: 10,
	},
	detailContainer: {
		marginVertical: 10,
		padding: 5,
		borderRadius: 4,
		backgroundColor: "white",
	},
	detailContainerRow: {
		flexDirection: "row",
		alignItems: "center",
		marginVertical: 10,
		padding: 5,
		borderRadius: 4,
	},
	detailContainerRow2: {
		flexDirection: "row",
		alignItems: "center",
		marginVertical: 10,
		padding: 5,
		borderRadius: 4,
		justifyContent: "space-between",
		paddingHorizontal: 40,
	},
	taskName: {
		fontSize: 22,
		// backgroundColor: "white",
		textAlign: "center",
		flex: 1,
	},
	taskDetails: {
		borderWidth: 1,
		padding: 15,
		borderRadius: 15,
	},
	createdBy: {},
	createdOn: {},
	dueOn: {},
	asssignedTo: {},
	taskDone: {
		textAlign: "center",
		padding: 2,
		width: 100,
		// marginStart: "auto",
		// marginEnd: "auto",
		borderRadius: 20,
		backgroundColor: "green",
		fontSize: 18,
	},
});

export default TaskDetail;
