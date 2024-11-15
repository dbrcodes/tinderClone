import React from "react";
import { View, Text, StyleSheet, SafeAreaView, Image, ScrollView } from 'react-native';
import SafeViewAndroid from "../component/custom/SafeViewAndroid";
import users from "../../TinderAssets/assets/data/users";
import DEFAULT_IMAGE from "../../TinderAssets/assets/images/default-image.jpg"; //defining a fallback default image

const MatchScreen = () => {
  return (
    <SafeAreaView style={styles.root}>
      {/* using square brackets (creating an array) allows pulling styles from multiple sources */}

      <View style={styles.container} >
        <View style={styles.matches}>
          <Text style={styles.text}>
            New Matches
          </Text>

          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={styles.users}
          >
            {users.map(user => (
              <View key={user.id} style={styles.user}>
                <Image
                  source={user.image ? { uri: user.image } : DEFAULT_IMAGE}
                  style={styles.image}
                />
              </View>
            ))}
          </ScrollView>
        </View>

        <View style={styles.messages}>
          <Text style={styles.text}>
            Messages
          </Text>
        </View>

      </View>

    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root: {
    width: '100%',
    padding: 0,
    flex: 1,
  },
  container: {
    padding: 0,
  },
  users: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  user: {
    width: 85,
    height: 85,
    margin: 5,
    padding: 2,
    borderWidth: 2,
    borderColor: '#F76C6B',
    borderRadius: 50,
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 50,
  },
  text: {
    fontWeight: 'bold',
    fontSize: 24,
    color: '#F76C6B',
    paddingLeft: 15,
  },
  matches: {
    marginTop: 10,
    marginBottom: 15,
  },
  messages: {

  },
})

export default MatchScreen