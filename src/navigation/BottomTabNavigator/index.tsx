import { View, Text } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import SCREENS from "../../constants/screens";
import HomeScreen from "../../screens/home";
import ProfileScreen from "../../screens/profile";

const {Navigator, Screen} = createBottomTabNavigator()

const BottomTabNavigator = () => {
  return (
    <Navigator screenOptions={{
        headerShown: false,
        
    }}>
        <Screen name={SCREENS.HOME} component={HomeScreen}/>
        <Screen name={SCREENS.PROFILE} component={ProfileScreen}/>
    </Navigator>
  );
};

export default BottomTabNavigator;
