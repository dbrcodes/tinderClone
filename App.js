import { GestureHandlerRootView, Pressable, PanGestureHandler } from "react-native-gesture-handler";
import React, { useState } from "react";
import { View, StyleSheet, Text, useWindowDimensions, StatusBar } from 'react-native';
import Card from './src/component/tinderCard';
import users from './TinderAssets/assets/data/users'
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  useDerivedValue,
  useAnimatedGestureHandler,
  interpolate,
} from "react-native-reanimated";


const App = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const currentProfile = users[currentIndex];

  const { width: screenWidth } = useWindowDimensions() // pulls the screen width from the screen dimensions

  const hiddenTranslateX = 2 * screenWidth; // sets the max screen width to twice the actual width to soften the rotate of the card

  const translateX = useSharedValue(0);

  const rotate = useDerivedValue(
    () => interpolate(translateX.value, [0, hiddenTranslateX], [0, 60],) + 'deg',
  ); // controls the rotation of the card along the horizontal axis

  const cardStyle = useAnimatedStyle(() => ({
    // this controls the horizontal animation of the card
    transform: [
      {
        translateX: translateX.value,
      },
      {
        rotate: rotate.value,
      },
    ],
  }));

  const gestureHandler = useAnimatedGestureHandler({
    onStart: (_, context) => {
      context.startX = translateX.value;
    },
    onActive: event => {
      translateX.value = event.translationX;
    },
    onEnd: () => {
      translateX.value = 0;
      console.warn('Touch ended');
    }
  });

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <View style={styles.pageContainer}>

        <StatusBar
          translucent
          backgroundColor="transparent" // Set the status bar to be transparent
          barStyle="light-content" // Use "dark-content" for dark icons or "light-content" for light icons
        />

        <View style={styles.nextCardContainer}>
          <Card user={currentProfile} />
        </View>
        <PanGestureHandler onGestureEvent={gestureHandler}>
          <Animated.View style={[styles.animatedCard, cardStyle]}>

            <Card user={currentProfile} />
          </Animated.View>
        </PanGestureHandler>
      </View>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  pageContainer: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  animatedCard: {
    width: '100%',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  nextCardContainer: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
  }
})

export default App;