import React from "react";
import {
  View,
  StyleSheet,
  StatusBar,
} from 'react-native';

import HomeScreen from "./src/screens/HomeScreen";
import MatchScreen from "./src/screens/MatchScreen";

const App = () => {

  // these two variables control what happens when you swipe left or right
  const onSwipeLeft = (user) => {
    console.warn("swipe left", user.name)
  };

  const onSwipeRight = (user) => {
    console.warn("swipe right: ", user.name)
  };
  // ----

  return (
    <View style={styles.pageContainer}>

      <StatusBar
        translucent
        backgroundColor="transparent" // Set the status bar to be transparent
        barStyle="dark-content" // Use "dark-content" for dark icons or "light-content" for light icons
      />

      <MatchScreen />

    </View>
  );
};

const styles = StyleSheet.create({
  pageContainer: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },

})

export default App;