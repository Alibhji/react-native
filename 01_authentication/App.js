import * as React from "react";
import { View, Text } from "react-native";
import SignInStack from "./src/navigation";
import SignInScreen from "./src/Screens/SignInScreen";
import SignUpScreen from "./src/Screens/SignUpScreen";


// add redux here
import { Provider } from 'react-redux'
import store from "./src/components/redux/store";

export default function App() {
  return  (
      <Provider store={store}>
          <SignInStack  store={store}/>
      </Provider>
    )
}
