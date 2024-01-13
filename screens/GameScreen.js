import { Text, View, StyleSheet, FlatList,Platform } from "react-native";
import { useState, useEffect } from "react";
import NumberContainer from "../components/game/NumberContainer";
import PrimaryButton from "../components/ui/PrimaryButton";
import { Alert } from "react-native";
import Card from "../components/ui/Card";
import {Ionicons} from '@expo/vector-icons'
import Textinstruction from "../components/ui/TextInstruction";
import GuessLogItem from "../components/ui/GuessLogItem";

function generateRandomBetween(min,max,exclude)
{
    const rndNum = Math.floor(Math.random() * (max-min)) + min;

    if(rndNum === exclude)
    {
        return generateRandomBetween(min,max,exclude);
    }
    else{
        return rndNum;
    }

}

let minboundary =1 ;
let maxboundary = 100;



function GameScreen({userNumber,onGameOver}){
    const initialGuess = generateRandomBetween(1,100,userNumber);
    const [currentGuess, setcurrentGuess] = useState(initialGuess);
    const [guessRounds, setguessRounds] = useState([initialGuess]);


    useEffect(() => {

        if(currentGuess === userNumber)
        {
            onGameOver(guessRounds.length);
        }
    },[currentGuess,userNumber,onGameOver]);

    useEffect(()=>{
        minboundary =1;
        maxboundary=100;
    },[]);

function nextguessHandler(direction)
{

    if((direction ==='lower' && currentGuess< userNumber) || (direction ==='grater' && currentGuess > userNumber))
    {
            Alert.alert("Do Not Lie!","You know that this is wrong",[{text:'Sorry',style:'cancel' },
        ]);
            return;
    }

    
    if(direction === 'lower')
    {
        maxboundary = currentGuess;
    }
    else{
        minboundary =currentGuess+1;  
    }
    const newRandnumber=  generateRandomBetween(minboundary,maxboundary,currentGuess);
    setcurrentGuess(newRandnumber);
    setguessRounds(prevguessRounds => [newRandnumber, ...prevguessRounds])
}    

const guessRoundListLength = guessRounds.length;

return <View style={styles.screen}>
  <Text style={styles.titlecontainer}>Opponent's Guess</Text>

 <NumberContainer>{currentGuess}</NumberContainer>
 <Card>
 <View>
    <Textinstruction>Higher or Lower?</Textinstruction>
  <View style={styles.buttonsContainer}>
        <View  style={styles.buttonContainer}>
                 <PrimaryButton onPress={nextguessHandler.bind(this,'lower')}><Ionicons name='md-remove-circle' size={20} color='white'/></PrimaryButton>
        </View>
        <View  style={styles.buttonContainer}>
                <PrimaryButton onPress={nextguessHandler.bind(this,'grater')}><Ionicons name='md-add-circle' size={20} color='white'/></PrimaryButton>
        </View>
        
</View>
</View>
    <View>
        
    </View>
    </Card>
    <View style={styles.itemcontainer}>
        {/*guessRounds.map(guessRound => <Text key={guessRound}>{guessRound}</Text>)*/}

        <FlatList data={guessRounds}
        renderItem={(itemData) => <GuessLogItem roundNumber={guessRoundListLength - itemData.index} guess={itemData.item}/>}
        keyExtractor={(item) => item}/>
    </View>
</View>


}

const styles= StyleSheet.create(
    {
        screen:{
            flex:1,
            padding:20,
            
        },
        buttonsContainer:{
            flexDirection:'row',
            
        },
        buttonContainer:{
            flex:1,
        },
        titlecontainer:{
            fontSize:24,
            color:'#f7ba02',
            fontWeight:'bold',
            borderWidth:2,  
            borderColor:'#f7ba02',
            textAlign:'center',
            padding:12,
            marginTop:50,
        },
        dummy:{
            color:'orange',
        },
        itemcontainer:{
            flex:1,
            padding:12,
        }
      

    }
)

export default GameScreen;