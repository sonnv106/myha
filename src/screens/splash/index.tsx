import { StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import { useNavigation, NavigationProp } from "@react-navigation/native";
import SCREENS from "../../constants/screens";

const Splash = () => {
  const {navigate}: NavigationProp<any, any> = useNavigation()
  useEffect(()=>{
    console.log('clear time out')
    const timeout = setTimeout(()=>{
     navigate(SCREENS.BOTTOM_NAVIGATOR)
    },2000)
    return ()=> clearTimeout(timeout)
  },[])
  return (
    <View>
      <Text>Splash
    
      </Text>
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({});
