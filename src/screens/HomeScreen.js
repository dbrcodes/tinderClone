import React from "react";
import {
  View,
  StyleSheet,
  StatusBar,
} from 'react-native';
import Card from '../component/tinderCard';
import users from '../../TinderAssets/assets/data/users'
import AnimatedStack from "../component/tinderCard/animatedStack";

const HomeScreen = () => {

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



      <AnimatedStack
        data={users}
        renderItem={({ item }) => <Card user={item} />}
        onSwipeLeft={onSwipeLeft}
        onSwipeRight={onSwipeRight}
      />

    </View>
  );
};

const styles = StyleSheet.create({
  pageContainer: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    //backgroundColor: 'green',
    width: '100%',
  },

})

export default HomeScreen;