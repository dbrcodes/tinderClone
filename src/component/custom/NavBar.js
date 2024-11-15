import React, { useState } from "react";
import {
  View,
  StyleSheet,
} from 'react-native';

import Fontisto from 'react-native-vector-icons/Fontisto';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome'

const App = () => {

  const [activeTab, setActiveTab] = useState('home');

  return (

    <View style={styles.navbar}>
      <Fontisto
        name="tinder"
        size={activeTab === 'home' ? 34 : 30}
        color={activeTab === 'home' ? '#f63a6e' : '#757575'}
        onPress={() => setActiveTab('home')}
      />
      <MaterialCommunityIcons
        name="star-four-points"
        size={activeTab === 'likes' ? 34 : 30}
        color={activeTab === 'likes' ? '#ccab3f' : '#757575'}
        onPress={() => setActiveTab('likes')}
      />
      <Ionicons
        name="chatbubbles"
        size={activeTab === 'matches' ? 34 : 30}
        color={activeTab === 'matches' ? '#f63a6e' : '#757575'}
        onPress={() => setActiveTab('matches')}
      />
      <FontAwesome
        name="user"
        size={activeTab === 'profile' ? 34 : 30}
        color={activeTab === 'profile' ? '#f63a6e' : '#757575'}
        onPress={() => setActiveTab('profile')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  navbar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    padding: 10,
  },

})

export default App;