import { Image, Platform, StyleSheet, Text, View } from 'react-native';

const getTypeDetails = (type: string) => {
    switch(type.toLowerCase()) {
        case 'fire':
            return { borderColor: '#F08030', emoji: '🔥' };
        case 'water':
            return { borderColor: '#6890F0', emoji: '💧' }
        case 'grass':
            return { borderColor: '#78C850', emoji: '🍃' };
        case 'electric':
            return { borderColor: '#F8D030', emoji: '⚡' };
        case 'psychic':
            return { borderColor: '#F85888', emoji: '🔮' };
        default:
            return { borderColor: '#A8A878', emoji: '❓' };
    }  
};

const PokemonCard = ({
    name,
    type,
    hp,
    moves,
    level,
    weaknesses,
    image
} : {
    name: string;
    type: string;
    hp: number;
    moves: string[];
    level: number;
    weaknesses: string[];
    image: any;
}) => { 

    const {borderColor, emoji} = getTypeDetails(type);

  return (
    <View style={styles.card}>
        <View style={styles.nameContainer}>
            <Text style={styles.name}>{name}</Text>
            <Text style={styles.hp}>❤ {hp}</Text>
        </View>

        <Image source={image} style={styles.image} resizeMode='contain' accessibilityLabel={`${name} pokemon`} />
        
        <View style={styles.typeContainer}>
            <View style={[styles.badge, { borderColor }]}>
                <Text style={styles.typeEmoji}>{emoji}</Text>
                <Text style={styles.typeText}>{type}</Text>            
            </View>
        </View>

        <View style={styles.movesContainer}>
            <Text style={styles.movesText}>Moves: {moves.join(", ")}</Text>
        </View>

        <View style={styles.weaknessesContainer}>
            <Text style={styles.weaknessesText} >Weakness: {weaknesses.join(", ")}</Text>
        </View>
    
    </View>
  )
}

export default PokemonCard;

const styles = StyleSheet.create({
    card: {
        backgroundColor: 'white',
        borderRadius: 16,
        borderWidth: 2,
        padding: 16,
        margin: 16,
        ...Platform.select({
            ios: {
                shadowColor: '#333',
                shadowOffset: { width: 2, height: 2 },
                shadowOpacity: 0.3,
                shadowRadius: 4,
            },
            android: {
                elevation: 5,
            },
        }), 
    },
    nameContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 32,
    },
    name: {
        fontSize: 30,
        fontWeight: 'bold',
    },
    hp: {
        fontSize: 22,
    },
    image: {
        width: "100%",
        height: 200,
        marginBottom: 16,
    },
    typeContainer: {
        marginBottom: 40,
        alignItems: 'center',
    },
    badge: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 6,
        paddingHorizontal: 12,
        borderWidth: 4,
        borderRadius: 20,
    },
    typeEmoji: {
        fontSize: 30,
        marginRight: 12,
    },
    typeText: { 
        fontSize: 22,
        fontWeight: 'bold',
    },
    movesContainer: {
        marginBottom: 16,
    },
    movesText: {
        fontSize: 22,
        fontWeight: "bold"
    },
    weaknessesContainer: {
        marginBottom: 8,
    },
    weaknessesText: {
        fontSize: 22,
        fontWeight: "bold"
    }

});