import React from "react";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import { useSelector } from "react-redux";
import { LOGOS } from "../assets/icons";
import Footer2 from "../components/footer2";
import MovieCard2 from "../components/movieCard2";


const HomeScreen2 = () => {

  getMovies = useSelector((state) => state.movieReducer.movies);
  console.log(getMovies);
    
  return (
      
    <View style={styles.container}>
      <View style={{ height:120, backgroundColor: "transparent" }}> 
          <Image source={LOGOS.mainLogo} 
          style={{width:120, 
          height:120 , 
          resizeMode:'contain',
          opacity: 0.8}}/>    
      </View>

      <View style={{ flex: 1 }}>
          <ScrollView style={{ flex: 1 }}>
            {getMovies.map((movie) => (   
                <MovieCard2 key={movie.id} {...movie}> </MovieCard2>
            ))}
            </ScrollView>
      </View>

      <View style={{ height:60, }}>
          <Footer2/>
      </View>
    </View>
  );
};


const styles = StyleSheet.create({container: 
    {flex: 1 ,padding:0}

});

export default HomeScreen2;
