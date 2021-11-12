import React, { useState } from 'react'
import { View, Text  ,Button} from 'react-native'
import { connect, useSelector , useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import { changeCount, decreaseCount } from '../redux/actions/count'





const Counter = (props) => {
    const getState = useSelector(state => state)
    const dispatch = useDispatch()
    // console.log(getState)  

    
    return (
        <View style={{alignItems:"center"}}>
        <View style={{flexDirection:'row'  , fontSize: 24}}>
            <Button  onPress={()=>(dispatch(changeCount(1)))} title="+"  />
            <Button  onPress={()=>(dispatch(decreaseCount(1)))}  title="-" />

        </View>
                <Text> {getState.countR.count}</Text>
        </View>
    )
}


const mapStateToProps = (state) => {
    return {
        count: state.count
    }
}

const ActionCreators = Object.assign(
    {},
    changeCount,
  );

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(ActionCreators, dispatch),
  });



export default Counter
