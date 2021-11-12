import React from 'react'
import { View, Text, StyleSheet ,Button, TouchableOpacity} from 'react-native'
import store from "./redux2/chatStore";


const Footer = () => {

    this.state = store.getState() 
    console.log(this.state )

    store.dispatch({
        type: "LOGIN",
        payload: { email: this.state.email, }
      });
      this.state = store.getState() 
      console.log(this.state )
    

    return (
        <View style={styles.footer}>
        
                <FooterItem  name="Home" func={pushHandler}/>
                <FooterItem  name="Movie"/>
            
        </View>
    )
}

const pushHandler = () => (
    console.log("Hi")
    
)

const FooterItem = (props ) => (
    <>
    <TouchableOpacity  onPress={ props.func}
    style={styles.btn} > 
        <Text style={{fontSize:20 , fontWeight:'800'}}> {props.name }</Text>
    </TouchableOpacity>
    </>
   
)

const styles = StyleSheet.create({
    footer: {
        alignItems: 'center',
        justifyContent: 'center',
        height: 50,
        flexDirection: 'row',
        backgroundColor: '#f5f5f5',
        borderTopWidth: 1,
        borderTopColor: '#e3e3e3',
        paddingHorizontal: 30,

    },

    btn:{
        backgroundColor: 'white',
        borderRadius: 25,
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
    }
})




export default Footer
