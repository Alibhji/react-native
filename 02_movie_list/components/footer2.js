import React, { useState } from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { FOOTER_ICONS } from "../assets/icons";
import { getMovieById } from "./redux/actions";

const Footer2 = () => {
  [movieId, setMovieId] = React.useState(335984);
  dispatch = useDispatch();
  getMovies = useSelector((state) => state.movieReducer);

  return (
    <View style={styles.iconsContainer}>
      {/* {FOOTER_ICONS.map((icon, index) => (
        <Icon key={index} name={icon.name} image={icon.image} />
      ))} */}

      <Icon
        name={FOOTER_ICONS.favorites.name}
        image={FOOTER_ICONS.favorites.image}
      />
      <Icon
        name={FOOTER_ICONS.download.name}
        image={FOOTER_ICONS.download.image}
        presshandler={() => {
          dispatch(getMovieById(movieId));
          setMovieId(movieId + 1);
        }}
      />
    </View>
  );
};
const Icon = (props) => {
  return (
    <TouchableOpacity onPress={props.presshandler}>
      <View>
        <Image style={styles.icon_image} source={props.image} />
        <Text style={styles.icon_text}>{props.name}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  iconsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    padding: 10,
    backgroundColor: "#fff",
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  icon_image: {
    width: 30,
    height: 30,
    margin: 10,
    resizeMode: "contain",
  },
  icon_text: {
    fontSize: 12,
    color: "black",
  },
});

export default Footer2;
