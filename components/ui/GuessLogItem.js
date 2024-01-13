import { View, Text,StyleSheet } from "react-native";
import { useFonts } from "expo-font";

function GuessLogItem({roundNumber,guess})
{

    return(
        <View style={styles.listItem}>
            <Text style={styles.itemText}>#{roundNumber}</Text>
            <Text style={styles.itemText}>Opponent's Guess: {guess}</Text>
        </View>
    );
}

const styles= StyleSheet.create({

    listItem:{
        borderwidth:1,
        borderColor:'orange',
        borderRadius: 40,
        padding:12,
        marginVertical: 8,
        backgroundColor:'white',
        shadowColor:'black',
        shadowOpacity:0.25,
        shadowRadius:4,
        shadowOffset:{width:0, height:4},
        width: '100%',
        flexDirection: 'row',
        justifyContent:'space-between',


    },
    itemText:{
        fontFamily:'open-sans',
    }
})

export default GuessLogItem;