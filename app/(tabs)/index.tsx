import PokemonCard from '@/components/PokemonCard/PokemonCard';
import { Platform, SafeAreaView, ScrollView, StyleSheet } from 'react-native';
export default function HomeScreen() {

  const charmanderData = {
    name: 'Charmander',
    type: 'Fire',
    hp: 39,
    moves: ["Scratch", "Ember", "Growl", "Leer"],
    level: 5,
    weaknesses: ['Water', 'Rock'],
    image: require('../../assets/images/charmander.png')
  };

  const squirtleData = {
    name: 'Squirtle',
    type: 'Water',
    hp: 44,
    moves: ["Tackle", "Bubble", "Water Gun", "Tail Whip"],
    level: 5,
    weaknesses: ['Electric', 'Grass'],
    image: require('../../assets/images/squirtle.png')
  };
  
  const bulbasaurData = {
    name: 'Bulbasaur',
    type: 'Grass',
    hp: 45,
    moves: ["Tackle", "Vine Whip", "Razor Leaf", "Growl"],
    level: 5,
    weaknesses: ['Fire', 'Ice'],
    image: require('../../assets/images/bulbasaur.png')
  };

  const pikachuData = {
    name: 'Pikachu',
    type: 'Electric',
    hp: 35,
    moves: ["Quick Attack", "Thunder Shock", "Tail Whip", "Growl"],
    level: 5,
    weaknesses: ['Ground'],
    image: require('../../assets/images/pikachu.png')
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <PokemonCard {...charmanderData} />
        <PokemonCard {...squirtleData} />
        <PokemonCard {...bulbasaurData} />
        <PokemonCard {...pikachuData} />
      </ScrollView>
    </SafeAreaView>
  );
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    paddingTop: Platform.OS === 'android' ? 25 : 0,
  }
});
