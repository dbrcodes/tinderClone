import { GestureHandlerRootView, Pressable, PanGestureHandler } from "react-native-gesture-handler";
import React, { useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  useWindowDimensions,
  StatusBar,
} from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  useDerivedValue,
  useAnimatedGestureHandler,
  interpolate,
  withSpring,
  runOnJS,
} from "react-native-reanimated";
import Like from '../../../../TinderAssets/assets/images/LIKE.png';
import Dislike from '../../../../TinderAssets/assets/images/nope.png';


const swipe_velocity = 800;

const AnimatedStack = (props) => {

  const { data, renderItem, onSwipeLeft, onSwipeRight } = props;



  const [currentIndex, setCurrentIndex] = useState(0);
  const [nextIndex, setNextIndex] = useState(currentIndex + 1);


  const currentProfile = data[currentIndex];
  const nextProfile = data[nextIndex];

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

  const nextCardStyle = useAnimatedStyle(() => ({
    // this controls the animation of the next card
    transform: [
      {
        scale: interpolate(
          translateX.value,
          [-hiddenTranslateX, 0, hiddenTranslateX],
          [1, 0.8, 1],
        ),
      },
    ],
    opacity: interpolate(
      translateX.value,
      [-hiddenTranslateX, 0, hiddenTranslateX],
      [1, 0.5, 1],
    ),
  }));

  const likeStyle = useAnimatedStyle(() => ({
    opacity: interpolate(
      translateX.value,
      [0, hiddenTranslateX / 3],
      [0, 1],
    ),
  }))

  const dislikeStyle = useAnimatedStyle(() => ({
    opacity: interpolate(
      translateX.value,
      [0, -hiddenTranslateX / 3],
      [0, 1],
    ),
  }))

  const gestureHandler = useAnimatedGestureHandler({
    onStart: (_, context) => {
      context.startX = translateX.value;
    },
    onActive: (event, context) => {
      translateX.value = event.translationX;
    },
    onEnd: (event) => {
      if (Math.abs(event.velocityX) < swipe_velocity) {
        translateX.value = withSpring(0); //makes the card bouncy on return when not swiped away

        return;
      }

      translateX.value = withSpring(
        hiddenTranslateX * Math.sign(event.velocityX),
        {},
        () => runOnJS(setCurrentIndex)(currentIndex + 1)
      );

      const onSwipe = event.velocityX > 0 ? onSwipeRight : onSwipeLeft;
      onSwipe && runOnJS(onSwipe)(currentProfile);
    }
  });

  useEffect(() => {
    translateX.value = 0;
    setNextIndex(currentIndex + 1);
  }, [currentIndex, translateX],)

  return (
    <GestureHandlerRootView style={styles.gestureHandlerRoot}>
      <View style={styles.root}>

        {nextProfile && ( // conditional check to see if next profile is not null(this causes an issue where it checks for next index that doesnt exist)
          <View style={styles.nextCardContainer}>
            <Animated.View style={[styles.animatedCard, nextCardStyle]}>
              {renderItem({ item: nextProfile })}
            </Animated.View>
          </View>
        )}

        {currentProfile && (
          <PanGestureHandler onGestureEvent={gestureHandler}>
            <Animated.View style={[styles.animatedCard, cardStyle]}>
              <Animated.Image source={Like} style={[styles.like, { left: 10 }, likeStyle]} resizeMode="contain" />
              <Animated.Image source={Dislike} style={[styles.like, { right: 10 }, dislikeStyle]} resizeMode="contain" />
              {renderItem({ item: currentProfile })}
            </Animated.View>
          </PanGestureHandler>
        )}

      </View>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  gestureHandlerRoot: {
    flex: 1,
    width: '100%',  //Full width for the GestureHandlerRootView
  },
  root: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  animatedCard: {
    width: '90%',
    height: '70%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  nextCardContainer: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    //backgroundColor: 'red'
  },
  like: {
    width: 150,
    height: 150,
    position: 'absolute',
    top: 10,
    zIndex: 1,
    elevation: 1,
  }
})

export default AnimatedStack;