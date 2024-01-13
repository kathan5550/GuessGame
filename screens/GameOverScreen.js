import { View,Text,Image,StyleSheet} from "react-native";
import Title from "../components/ui/Title";
import PrimaryButton from "../components/ui/PrimaryButton";
import PrimaryButton2 from "../components/ui/PrimaryButton2";
import {useFonts} from 'expo-font'

function GameOverScreen({roundsNumber,userNumber,onstartgameScreen})
{

    return <View style={styles.rootScreen}>
        <Title>Game is Over!</Title>
        <View style={styles.imagecontainer}> 
            <Image style={styles.image} source={require('../assets/images/og5.jpg')}></Image>
        </View>
        <Text style={styles.summaryText}>Your phone needed <Text style={styles.Heighlight}>{roundsNumber}</Text> rounds to guess the number <Text style={styles.Heighlight}>{userNumber}</Text></Text>
        <PrimaryButton2 onPress={onstartgameScreen}>Start New Game</PrimaryButton2>
    </View>

}

const styles= StyleSheet.create({

    rootScreen:{
        flex:1,
        padding:25,
        justifyContent:'center',
        alignItems:'center',
    },
    imagecontainer:{

        width:300,
        height:300,
        borderRadius:150,
        borderWidth:3,
        borderColor:'orange',
        overflow:'hidden',
        margin:30,
        
    },
    image:{
            width:'100%',
            height:'100%',
            
    },
    summaryText:{
        fontSize:24,
        textAlign:"center",
        fontFamily:'open-sans',
    },
    Heighlight:{
        color:'#4e0329',
        fontFamily:'open-sans-bold',

    }



})

export default GameOverScreen;