import React from "react";
import { View, Text } from "react-native";
import Home from "./screens/Home";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CreateTask from "./screens/CreateTask";
import TaskDetail from "./screens/TaskDetail";

const Stack = createNativeStackNavigator();

const App = () => {
	return (
		<NavigationContainer>
			<Stack.Navigator>
				<Stack.Screen name="Home" component={Home} options={{ title: "TaskMaker" }} />
				<Stack.Screen name="Create" component={CreateTask} />
				<Stack.Screen name="TaskDetail" component={TaskDetail} />
			</Stack.Navigator>
		</NavigationContainer>
		// <View style={{ paddingTop: 50 }}>
		// 	<Home />
		// </View>
	);
};

export default App;
