
import { Image, ImageBackground, ScrollView, StyleSheet, Text, View} from 'react-native';

export default function HomeScreen() {

  return (
    <ScrollView>
      <View style={{
          flex:1, alignItems:'center', 
          backgroundColor: 'lightblue', 
          gap: 16, 
          padding: 32,
          }}>
        <Text>Home Screen</Text>
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
      </View>
    </ScrollView>
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
});
