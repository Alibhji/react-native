import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import LandingScreen from './Screens/LandingScreen'
import SignInScreen from './Screens/SignInScreen'
import SignUpScreen from './Screens/SignUpScreen'




const Stack =  createStackNavigator()

const SignInStack = () => (
   
    <NavigationContainer>
        <Stack.Navigator initialRouteName={'Landing'}>
        <Stack.Screen name="SignIn" component={SignInScreen} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
        <Stack.Screen name="Landing" component={LandingScreen} />
        </Stack.Navigator>
    </NavigationContainer>
    )


export default SignInStack
