import { GestureHandlerRootView } from "react-native-gesture-handler";
import React from "react";
import { View, StyleSheet, Text } from 'react-native';
import Card from './src/component/tinderCard';
import User from './TinderAssets/assets/data/users'

const App = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <View style={styles.pageContainer}>
        <Card user={User[0]} />
      </View>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  pageContainer: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1
  }
})

export default App;