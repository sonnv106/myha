import React from 'react';
import messaging from '@react-native-firebase/messaging';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';



function App(): React.JSX.Element {
  return (
    <View style={styles.container}>
      <Text>Hello</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default App;
