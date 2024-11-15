import React from "react";
import {
  View,
  StyleSheet,
  Pressable
} from 'react-native';
import Card from '../component/tinderCard';
import users from '../../TinderAssets/assets/data/users'
import AnimatedStack from "../component/tinderCard/animatedStack";

import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome'

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

      <AnimatedStack
        data={users}
        renderItem={({ item }) => <Card user={item} />}
        onSwipeLeft={onSwipeLeft}
        onSwipeRight={onSwipeRight}
      />

      <View style={styles.icons}>

        <View style={styles.button}>
          <Pressable>
            <FontAwesome name="undo" size={24} color="#FBD88B" />
          </Pressable>
        </View>

        <View style={styles.mainbutton}>
          <Pressable>
            <Entypo name="cross" size={40} color="#F76C6B" />
          </Pressable>
        </View>

        <View style={styles.button}>
          <Pressable>
            <FontAwesome name="star" size={28} color="#3AB4CC" />
          </Pressable>
        </View>

        <View style={styles.mainbutton}>
          <Pressable>
            <FontAwesome name="heart" size={28} color="#4FCC94" />
          </Pressable>
        </View>

        <View style={styles.button}>
          <Pressable>
            <Ionicons name="flash" size={28} color="#A65CD2" />
          </Pressable>
        </View>

      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  pageContainer: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    backgroundColor: '#ededed',
    width: '100%',
  },
  icons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    paddingBottom: 30,
  },
  button: {
    width: 60,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 50,
  },
  mainbutton: {
    width: 70,
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 50,
  },
})

export default HomeScreen;