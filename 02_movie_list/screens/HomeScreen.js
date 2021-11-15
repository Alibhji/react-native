import React from "react";
import { View, Text, ScrollView } from "react-native";
import { useSelector } from "react-redux";
import Footer from "../components/footer";
import MovieCard from "../components/movieCard";

const HomeScreen = () => {
  const getState = useSelector((state) => state.movieReducer);

  return (
    <View>
      <ScrollView style={{ paddingVertical: 10 }}>
        {getState.movies.map((movie) => (
          <MovieCard key={movie.id} title={movie.title} />
        ))}
      </ScrollView>

      <Footer />
    </View>
  );
};

export default HomeScreen;
