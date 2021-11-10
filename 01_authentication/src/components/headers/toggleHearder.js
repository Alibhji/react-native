import React, { useState } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

const ToggleHearder = () => {
    const [activeTab, setactiveTab] = useState('Delivery')
    return (
        <View style={{flexDirection:'row'}}>
            <BtnTab  text = {"Delivery"} textColor ={'white'} activeTab={activeTab} setactiveTab={setactiveTab} />
            <BtnTab  text = {"On-site"} textColor ={'black'} activeTab={activeTab}  setactiveTab={setactiveTab}/>
        </View>
    )
}

const BtnTab = (props) => (
    <TouchableOpacity onPress={() => (
        props.setactiveTab(props.text)
    )}>
        <View style = {{
            backgroundColor: props.activeTab === props.text ? 'black' : 'white',
            paddingHorizontal: 10,
            paddingVertical:5,
            borderRadius: 20,
            flexDirection:'row', 
            justifyContent:'center', 
            alignItems:'center'}}>
        
        <Text style={{
            color: props.activeTab === props.text ? 'white' : 'black' ,fontWeight:'900' , 
            fontSize:15}}>  
            {props.text} 
            </Text>
        </View>
    </TouchableOpacity>
)

export default ToggleHearder
