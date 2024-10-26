import React from "react";
import { Text, Image, View, StyleSheet, ImageBackground } from 'react-native';


const Card = (props) => {
  const { name, age, image, bio } = props.user;
  return (
    <View style={styles.card}>
      <ImageBackground
        source={{
          uri: image,
        }}
        style={styles.image}
      >
        <View style={styles.cardInner}>
          <Text style={styles.name}>{name}, {age}</Text>
          <Text style={styles.bio}>{bio}</Text>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  pageContainer: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  card: {
    // card shape
    width: '95%',
    height: '70%',
    backgroundColor: 'red',
    borderRadius: 10,
    overflow: 'hidden',

    // card shadows
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.36,
    shadowRadius: 6.68,
    elevation: 11,
  },
  image:
  {
    width: '100%',
    height: '100%',
    justifyContent: 'flex-end',

  },
  cardInner:
  {
    padding: 20,
  },
  name:
  {
    fontSize: 30,
    color: 'white',
    fontWeight: 'bold',

  },
  bio:
  {
    fontSize: 18,
    color: 'white',
    lineHeight: 25,
  },
})

export default Card; 1