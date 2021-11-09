import React from 'react'
import { View, Text, Image, Touchable } from 'react-native'
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler'
import { LOGOS } from '../data/logos'



const LandingScreen = ({navigation}) => {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Image source={LOGOS.pear} style={{ width: 90, height: 90 }} />
            <Text style={{ fontSize: 20, fontWeight: 'bold' }}>
                Welcome to the app
            </Text>
            
            <TouchableOpacity onPress={() => navigation.push('SignIn') } style={{ marginTop: 20 }}>
                <Text style={{ fontSize: 20, fontWeight: 'bold' }}>
                    Sign In
                </Text>
            </TouchableOpacity>

            
        </View>
    )
}

export default LandingScreen
