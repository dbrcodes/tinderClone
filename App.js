// modules
import React from "react";
import { View, StyleSheet, Pressable, StatusBar, SafeAreaView } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import SafeViewAndroid from './src/component/custom/SafeViewAndroid';

// screens
import HomeScreen from "./src/screens/HomeScreen";
import MatchScreen from "./src/screens/MatchScreen";

// fonts
import Fontisto from "react-native-vector-icons/Fontisto";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Ionicons from "react-native-vector-icons/Ionicons";
import FontAwesome from "react-native-vector-icons/FontAwesome";

const Tab = createMaterialTopTabNavigator();

const App = () => {
  return (

    <SafeAreaView style={SafeViewAndroid.AndroidSafeArea}>
      <StatusBar
        translucent
        backgroundColor="transparent" // Set the status bar to be transparent
        barStyle="dark-content" // Use "dark-content" for dark icons or "light-content" for light icons
      />
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused }) => {
              const iconSize = 30;
              const iconColor = focused ? "#F76C6B" : "#757575";

              if (route.name === "Home") {
                return <Fontisto name="tinder" size={iconSize} color={iconColor} />;
              } else if (route.name === "Matches") {
                return <Ionicons name="chatbubbles" size={iconSize} color={iconColor} />;
              } else if (route.name === "Likes") {
                return <MaterialCommunityIcons name="star-four-points" size={iconSize} color={iconColor} />;
              } else if (route.name === "Profile") {
                return <FontAwesome name="user" size={iconSize} color={iconColor} />;
              }
            },
            swipeEnabled: false, // disabled the swiping feature for tabs
            tabBarShowIcon: true,
            tabBarShowLabel: false, // Hide text labels
            tabBarIndicatorStyle: { backgroundColor: "#F76C6B", height: 3 }, // Indicator under active tab
            tabBarStyle: {
              backgroundColor: "#fff",
              elevation: 4,
              shadowColor: "#000",
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 0.2,
              shadowRadius: 3,
            },
          })}
        >
          <Tab.Screen name="Home" component={HomeScreen} />
          <Tab.Screen name="Likes" component={HomeScreen} />
          <Tab.Screen name="Matches" component={MatchScreen} />
          <Tab.Screen name="Profile" component={HomeScreen} />

        </Tab.Navigator>
      </NavigationContainer>

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

})

export default App;
