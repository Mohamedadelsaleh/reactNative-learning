import { ImageBackground, StyleSheet, Text, View } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={{flex: 1, backgroundColor: 'plum', paddingTop: 60}}>
      {/* <Text>BBBBBBBBBBBBBBBB</Text>
      <Image source={require('../../assets/images/adaptive-icon.png')} style={{width: 300, height: 300}} />
      <Image source={{ uri: 'https://picsum.photos/300' }} style={{width: 300, height: 300}} /> */}
      <ImageBackground source={{uri: 'http://picsum.photos/300'}} style={{ flex: 1}}>
        <Text style={{fontSize: 20, padding: 20}}>Hello World</Text>
      </ImageBackground>
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
