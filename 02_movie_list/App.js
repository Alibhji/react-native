import * as React from "react";
import { View, Text, SafeAreaView } from "react-native";
import { Provider } from "react-redux";
import { store } from "./components/redux/store";
import HomeScreen from "./screens/HomeScreen";
import HomeScreen2 from "./screens/HomeScreen2";



export default function App() {
  return (
    <Provider store={store}>
      <SafeAreaView style={{flex: 1}}>
    
          {/* <HomeScreen/> */}
          <HomeScreen2/>

      </SafeAreaView>
    </Provider>

  );
}
