import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const IMG_URL_ROOT = "https://image.tmdb.org/t/p/w500";

const MovieDetailsScreen = ({ route, navigation }) => {
  const params = route.params;
  // console.log(route.params);

  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{ uri: IMG_URL_ROOT + params.poster_path }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  image: { width: "100%", height: "100%" },
});

export default MovieDetailsScreen;
