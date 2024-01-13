import { TextInput,View, StyleSheet,Alert, Text ,KeyboardAvoidingView, ScrollView,} from "react-native";
import PrimaryButton from "../components/ui/PrimaryButton";
import { useState } from "react";
import Title from "../components/ui/Title";
import Textinstruction from "../components/ui/TextInstruction";
function StartGameScreen({onPickedNumber}){

    const [enteredNumber, setenteredNumber]= useState('');

    function numberInputHandler (enteredText){
            setenteredNumber(enteredText);
    }

    function resetInputHandler(){
        setenteredNumber('')
    }
    function confirminputHandler (){
            const choosenNumber= parseInt(enteredNumber);

            if(isNaN(choosenNumber) || choosenNumber<=0 || choosenNumber > 99)
            {
                Alert.alert('Invalid Number!', 'Number has to be a number between 0 and 99',
                [{text:'okay' ,style:'default', onPress:resetInputHandler}])
                return;
            }
            onPickedNumber(choosenNumber);
    }
    return(
        <ScrollView>
       <KeyboardAvoidingView style={styles.screen} behavior='position'> 
     <View style={styles.titleconatiner}>
        <Title>Guess My Number</Title>
    <View style={styles.inputcontainer}>
       <Textinstruction>Enter A Number</Textinstruction>
        <TextInput style={styles.numberinput} 
        maxLength={2} 
        keyboardType="number-pad"
        value={enteredNumber}
        onChangeText={numberInputHandler}
        />
        <View style={styles.buttonsContainer}>
        <View style={styles.buttonContainer}>
             <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
        </View>
        <View style={styles.buttonContainer}>
             <PrimaryButton onPress={confirminputHandler}>confirm</PrimaryButton>
        </View>
        
        </View>
       </View>   
    </View>
    </KeyboardAvoidingView>
    </ScrollView>
    );
}
const styles= StyleSheet.create({

    screen:{
        flex:1,
    },
    titleconatiner:{
        flex:1,
        marginTop:100,
        alignItems:'center',

    },
    textcontainer:{
        fontSize:24,
        color:'orange',
        fontWeight:'bold',
    },

    inputcontainer:{
        
        justifyContent:"center",
        alignItems:'center',
        marginTop:50,
        marginHorizontal: 24,
        padding:16,
        backgroundColor:'#4e0329',
        borderRadius:8,
        shadowColor:'black',
        shadowOffset:{width:0,height:2},
        shadowRadius:6,
        shadowOpacity:0.25,
        
    },
    numberinput:{
        height:50,
        width:50,
        fontSize:32,
        borderBottomColor:'yellow',
        borderBottomWidth:2,
        color:'yellow',
        marginVertical:8,
        fontWeight:'bold',
        textAlign:'center',
        // marginBottom:20,
        marginTop:20,
    },
    buttonsContainer:{
        flexDirection:'row',
    },
    buttonContainer:{
        flex:1,
    },
    

    
});
export default StartGameScreen;