import React, { useState } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'
import { SafeAreaView } from 'react-native-safe-area-context'



const SignInScreen = ({navigation}) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const onEmailChange = (text) => {
        setEmail(text);
        // console.log(email);
    }
    
    return(
    <SafeAreaView>

        <View style={styles.container}>
            <TextInput
                style={styles.input(email.length)}
                placeholder="Email"
                autoCapitalize="none"
                onChangeText={setEmail}
                value={email}
            />

            
            <TextInput
                style={styles.input(password.length )}
                placeholder="Password"
                autoCapitalize="none"
                onChangeText={(text) => setPassword(text)}
                value={password}
            />  
             <TouchableOpacity>
                <Text>Forgot Password?</Text>
             </TouchableOpacity>
            
            <View  style={styles.submit}>
            <TouchableOpacity onPress={() => navigation.goBack("Landing")}> 
                <Text> Register </Text>
            </TouchableOpacity>
            </View> 

        </View>

    </SafeAreaView>
)}

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        backgroundColor: '#fff',
    }, 
    input: isValid => ({
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        borderColor: isValid ? 'green' : 'red',
        margin: 10,
        padding: 10,
    }),

    submit: {
        color: 'blue',
        backgroundColor: 'blue',
        borderWidth: 1,
        width: 40,
        height: 30,
        alignItems: 'center',
        justifyContent: 'center',

    }
});

export default SignInScreen
