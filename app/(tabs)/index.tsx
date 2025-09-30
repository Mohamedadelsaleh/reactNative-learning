
import { useState } from 'react';
import { ActivityIndicator, Alert, Button, Image, ImageBackground, Modal, Pressable, ScrollView, StatusBar, StyleSheet, Text, View } from 'react-native';
import Greet from '../components/Greet';
import { blue, green } from 'react-native-reanimated/lib/typescript/Colors';

export default function HomeScreen() {
    const [isModelVisible, setIsModelVisible] = useState(false);
  return (
    
      <View style={{
          flex:1, alignItems:'center', 
          backgroundColor: 'lightblue', 
          gap: 16, 
          padding: 32,
          }}>
        <Greet name='React Native' />
        <StatusBar backgroundColor="orange" barStyle="dark-content" />
        <ActivityIndicator size="large" color="orange" />
        <Button title='Alert' onPress={() => Alert.alert("Invalid Data", "Revalidate your Data", [
          {text: 'Cancel', style: 'cancel', onPress: () => console.log('Cancel Pressed')},
          {text: 'OK', onPress: () => console.log('OK Pressed')},
        ]) } />
        <ScrollView style={{width: '100%'}} contentContainerStyle={{alignItems: 'center', gap: 16}}>
          <Pressable onPress={() => console.log('Text Pressed')} >
            <Text>Home Screen</Text>
          </Pressable>
          <Image
            source={require('../../assets/images/react-logo.png')}
          />
          <ImageBackground source={require('../../assets/images/react-logo.png')} style={{width: 200, height: 200, justifyContent: 'center', alignItems: 'center'}}>
            <View style={styles.titleContainer}>
              <Text>Title</Text>
            </View>
          </ImageBackground>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </Text>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </Text>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </Text>
          <Image
            source={require('../../assets/images/react-logo.png')}
          />
          <ImageBackground source={require('../../assets/images/react-logo.png')} style={{width: 200, height: 200, justifyContent: 'center', alignItems: 'center'}}>
            <View style={styles.titleContainer}>
              <Text>Title</Text>
            </View>
          </ImageBackground>
          <View style={styles.stepContainer}>
            <View style={[styles.box, styles.blueBox, styles.boxShadow]}>
              <Text>Steps</Text>
            </View>
            <View style={[styles.box, styles.greenBox, styles.androidShadow]}>
              <Text>Open the app</Text>
            </View>
          </View>
        </ScrollView>
        <Button title='Submit' onPress={() => setIsModelVisible(true)} color="midnightblue" />
        <Modal visible={isModelVisible} onRequestClose={() => setIsModelVisible(false)} animationType='slide'>
          <View style={{flex:1, justifyContent:'center', alignItems:'center', backgroundColor:'rgba(0,0,0,0.5)'}}>
            <Text style={{backgroundColor:'white', padding:16, borderRadius:8}}>This is a modal</Text>
            <Button title='Close' onPress={() => setIsModelVisible(false)} />
          </View>
        </Modal>
      </View>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  box: {
    width: 250,
    height: 250,
    backgroundColor: 'orange',
    paddingHorizontal: 5,
    paddingVertical: 18,
    borderWidth: 2,
    borderColor: 'darkorange',
    borderRadius: 8,

  },
  blueBox: {
    backgroundColor: "pink",
  },
  greenBox: {
    backgroundColor: "lightgreen",
  },
  boxShadow: {
    shadowColor: "#333333",
    shadowOffset: {
      width: 6,
      height: 6,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  androidShadow: {
    elevation: 10,
    shadowColor: "#55D",
  }
});
