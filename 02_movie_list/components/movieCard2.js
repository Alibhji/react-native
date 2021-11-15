import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const SUMMARY_LENGTH = 200;
const IMG_URL_ROOT = "https://image.tmdb.org/t/p/w500";

const CardFooter = ({release_date ,vote_average , vote_count}) => {
    return (
        <View style={styles.cardFooterContainer}>
            <Text style={styles.footerText}> {`${release_date}`} </Text> 
            <Text style={styles.footerText}> {`vote_average: ${vote_average} out of ${vote_count}`} </Text> 

        </View>
    );
}

const MovieCard2 = ({ title, overview  , release_date , vote_average , vote_count,poster_path}) => {
    
  return (
    <View style={styles.container}>
      <View style={[styles.image, { flex: 1 }]}>
        <Text style={styles.textHolder}>
          Title:
          <Text style={styles.title}> {title}</Text>
        </Text>

        <Text style={styles.textHolder}>
          Overview:
          <Text style={styles.overview}>
            {" "}
            {overview.length > SUMMARY_LENGTH
              ? overview.substring(0, SUMMARY_LENGTH) + " ..."
              : overview}
          </Text>
        </Text>
        
        <CardFooter release_date={release_date} vote_average={vote_average}  vote_count={vote_count}/>

      </View>
      
      <Image style={styles.image} source={{ uri: IMG_URL_ROOT + poster_path }} />
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 150,
    backgroundColor: "#fff",
    borderRadius: 10,
    margin: 10,
    borderWidth: 1,
    flexDirection: "row",
  },
  image: {
    width: 100,
    resizeMode: "contain",
    backgroundColor: "#fff",
    borderRadius: 10,
    margin: 2,
    borderWidth: 1,
  },
  textHolder: { marginLeft: 3, marginTop:3 ,marginRight:3 ,color: "grey" },
  title: { fontSize: 12, color: "black" },
  overview: { fontSize: 12, color: "black"},
  cardFooterContainer: {
      backgroundColor: "gray",
        borderRadius: 10,
        margin: 2,
        borderWidth: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
},
footerText: {   color: "white", fontSize: 12, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3} 
});

export default MovieCard2;
