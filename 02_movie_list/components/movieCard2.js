import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

const SUMMARY_LENGTH = 100;
const IMG_URL_ROOT = "https://image.tmdb.org/t/p/w500";

const CardFooter = ({ release_date, vote_average, vote_count }) => {
  return (
    <View style={styles.cardFooterContainer}>
      <Text style={styles.footerText}> {`${release_date.split('-')[0]}`} </Text>
      <Text style={styles.footerText}>
        {`Vote: ${vote_average} out of ${vote_count}`}
      </Text>
    </View>
  );
};

const MovieCard2 = ({
  title,
  overview,
  release_date,
  vote_average,
  vote_count,
  poster_path,
  navigation,
  movie,
}) => {
  return (
    <View style={styles.container}>
       
      <TouchableOpacity
        onPress={() => navigation.push("MovieDetailsScreen", { ...movie })}
      >
        <Image
          style={styles.image}
          source={{ uri: IMG_URL_ROOT + poster_path }}
        />
      </TouchableOpacity>

       <View style={[styles.InfoContainer ]}>
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

            <CardFooter
            release_date={release_date}
            vote_average={vote_average}
            vote_count={vote_count}
            />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 110,
    backgroundColor: "#fff",
    borderRadius: 15,
    margin: 2,
    borderWidth: 1,
    flexDirection: "row",
  },
  InfoContainer: {flex:1, alignContent:'space-between'  ,justifyContent:'space-between'},
  image: {
    flex: 1,
    width: 150,
    backgroundColor: "#fff",
    borderRadius: 15,
  },
  textHolder: { marginLeft: 3, marginTop: 3, color: "grey" },

  title: { fontSize: 12, color: "black" },
  overview: { fontSize: 11, color: "black" ,flex:1 },
  cardFooterContainer: {
    backgroundColor: "blue",
    margin: 5,
    flexDirection: "row",
    justifyContent: "space-evenly",
    borderRadius: 15,
  },
  footerText: {
    color: "white",
    fontSize: 14,
    fontWeight: "bold",
  },
});

export default MovieCard2;
