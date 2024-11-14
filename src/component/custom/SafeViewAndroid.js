import { StyleSheet, Platform, StatusBar } from "react-native";

// this file is to apply a SafeAreaView to android devices that only works with iOS devices

export default StyleSheet.create({
  AndroidSafeArea: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
  }
});