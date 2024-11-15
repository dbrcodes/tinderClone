import React from "react";
import {
  View,
  StyleSheet,
  StatusBar,
  SafeAreaView,
} from 'react-native';
import SafeViewAndroid from './src/component/custom/SafeViewAndroid';



import Fontisto from 'react-native-vector-icons/Fontisto';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome'

import NavBar from './src/component/custom/NavBar'
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

    <SafeAreaView style={[styles.pageContainer, SafeViewAndroid.AndroidSafeArea]}>

      <StatusBar
        translucent
        backgroundColor="transparent" // Set the status bar to be transparent
        barStyle="dark-content" // Use "dark-content" for dark icons or "light-content" for light icons
      />

      <NavBar />

      <HomeScreen />

    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  pageContainer: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  topNavi: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    padding: 10,
  },

})

export default App;