import React from 'react'
import { View, Text, Image, Touchable } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { LOGOS } from '../data/logos'
import { ActivityIndicator, Colors } from 'react-native-paper';
import { Button } from 'react-native-paper';
import { TextInput } from 'react-native-paper';
import ToggleHearder from '../components/headers/toggleHearder';

import { firebaseAuth  } from '../components/firebase';
import {createUserWithEmailAndPassword} from "firebase/auth"
import Counter from '../components/headers/counter';





const LandingScreen = ({ navigation }) => {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <ToggleHearder />
            <Logo />
            <BTN  text = {"SignIn"} navigation={navigation} />
            <Counter />
            {/* <MyComponent /> */}



        </View>
    )
}


const Logo = ( ) => ( 
    <View style={{  alignItems: 'center', justifyContent: 'center' }}>
        <Image source={LOGOS.pear} style={{ width: 90, height: 90 }} />
            <Text style={{ fontSize: 20, fontWeight: 'bold' }}>
                Welcome to the app
        </Text>    
    </View>
            
)

const BTN = (props) => (
    <View> 
            <TouchableOpacity onPress={() => (
                props.navigation.push('SignIn')
            
            )} style={{ marginTop: 20 }}>
                <Text style={{ fontSize: 20, fontWeight: 'bold' }}>
                    {props.text}
                </Text>
            </TouchableOpacity>

    </View>

)

const MyComponent = () => (
    <View>
        <ActivityIndicator animating={true} color={Colors.red800} />
        <Button icon="camera" mode="contained" onPress={() => console.log('Pressed')}>
            Press me
        </Button>

        <TextInput
            label="Email" mode="outlined"
            style={{ width: 200, marginTop: 20 }}


        />

    </View>

);

export default LandingScreen
