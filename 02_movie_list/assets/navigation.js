import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { View, Text } from "react-native";
import HomeScreen2 from "../screens/HomeScreen2";
import MovieDetailsScreen from "../screens/movieDetails";

const Stack = createStackNavigator(); 

const NavStack = () => {
  return (
    <NavigationContainer initialRouteName="Home" >
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen2} />
        <Stack.Screen
          name="MovieDetailsScreen"
          component={MovieDetailsScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default NavStack;
