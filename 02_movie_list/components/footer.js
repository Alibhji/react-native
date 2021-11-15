import React from 'react'
import { View, Text, StyleSheet ,Button, TouchableOpacity} from 'react-native'
import { useDispatch, useSelector } from 'react-redux';
import { getMovieById, getMovies, GET_MOVIE_BY_ID } from './redux/actions';



const Disply = () => {
    const data = useSelector(state => state.movieReducer);
    console.log(data.movies.length)
    return (
        data.movies.map((movie,index) => <Text key={index}>{movie.title} </Text>
    ))}


const Footer = () => {
    const getState = useSelector(state => state);
    const dispatch = useDispatch();
    [movieId , setMovieId] = React.useState(335984);
    
    
    // this.state = store.getState() 
    // console.log(this.state )
    // store.dispatch({
    //     type: "LOGIN",
    //     payload: { email: this.state.email, }
    //   });
    //   this.state = store.getState() 
    //   console.log(this.state )
    

    return (
        <View style={styles.container}>
        <View style={styles.footer}>
        
                <FooterItem  name="Display" func={()=>(Disply)}/>
                <FooterItem  name=" Get Movie" func={() => {
                    dispatch(getMovieById(movieId))
                    setMovieId(movieId+1)
                }}/>
    
        </View>
        <Disply />
        </View>
    )
}

const pushHandler = () => {
    return(
    console.log("Hi")

)}

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
        // height: 90,
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
