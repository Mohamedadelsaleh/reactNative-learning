import { useState } from 'react';
import { Button, Image, Modal, Pressable, ScrollView, StatusBar, StyleSheet, Text, View } from 'react-native';

export default function HomeScreen() {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={{flex: 1, backgroundColor: 'plum', paddingTop: 60}}>
      <Button title='Press' onPress={() => setModalVisible(true)} color={'green'} />
      <StatusBar backgroundColor={'black'} barStyle={'light-content'} />
      <Modal visible={modalVisible} onRequestClose={() => setModalVisible(false)}
       animationType='slide' presentationStyle='formSheet'
      >
        <Text>Modal</Text>
        <Button title='Close' onPress={() => setModalVisible(false)} color={'red'} />
      </Modal>
      <ScrollView>
        <Pressable onPress={() => console.log('Image Pressed')}>
        <Image source={require('../../assets/images/adaptive-icon.png')} style={{width: 300, height: 300}} />
        </Pressable>
        <Text>
          This is a demo app for the React Native CLI. It is a simple app that shows how to use the React Native CLI to create a new app.
          {'\n\n'}
          This app is a simple example of how to use the React Native CLI to create a new app. It is a simple app that shows how to use the React Native CLI to create a new app.
          {'\n\n'}
          This app is a simple example of how to use the React Native CLI to create a new app. It is a simple app that shows how to use the React Native CLI to create a new app.
          {'\n\n'}
          This app is a simple example of how to use the React Native CLI to create a new app. It is a simple app that shows how to use the React Native CLI to create a new app.
          {'\n\n'}
          This app is a simple example of how to use the React Native CLI to create a new app. It is a simple app that shows how to use the React Native CLI to create a new app.
          {'\n\n'}
          This app is a simple example of how to use the React Native CLI to create a new app. It is a simple app that shows how to use the React Native CLI to create a new app.
          {'\n\n'}
          This app is a simple example of how to use the React Native CLI to create a new app. It is a simple app that shows how to use the React Native CLI to create a new app.
          {'\n\n'}
          This app is a simple example of how to use the React Native CLI to create a new app. It is a simple app that shows how to use the React Native CLI to create a new app.
          {'\n\n'}
          This app is a simple example of how to use the React Native CLI to create a new app. It is a simple app that shows how to use the React Native CLI to create a new app.
          {'\n\n'}
          This app is a simple example of how to use the React Native CLI to create a new app. It is a simple app that shows how to use the React Native CLI to create a new app.
          {'\n\n'}
          This app is a simple example of how to use the React Native CLI to create a new app. It is a simple app that shows how to use the React Native CLI to create a new app.
          {'\n\n'}
          This app is a simple example of how to use the React Native CLI to create a new app. It is a simple app that shows how to use the React Native CLI to create a new app.
        </Text>
        <Image source={require('../../assets/images/adaptive-icon.png')} style={{width: 300, height: 300}} />
      </ScrollView>
      
    </View>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
