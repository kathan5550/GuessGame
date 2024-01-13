
import { StyleSheet, ImageBackground, SafeAreaView, StatusBar} from 'react-native';
import StartGameScreen from './screens/StartGameScreen';
import { LinearGradient } from 'expo-linear-gradient';
import { useState } from 'react';
import GameScreen from './screens/GameScreen';
import GameOverScreen from './screens/GameOverScreen';
import {useFonts} from 'expo-font'
import AppLoading from 'expo-app-loading';


export default function App() {
  
  const [userNumber, setuserNumber] = useState('');
  const [gameisover, setgameisover] = useState(true);
  const [guessRounds,setguessrounds] = useState(0);

  function pickednumberHandler (PickedNumber)
  {
      setuserNumber(PickedNumber);
      setgameisover(false);
  }
  function gameisoverHandler(numberOfrounds){
      setgameisover(true);
      setguessrounds(numberOfrounds);
  }
  
  function startnewgameHandler(){
    setuserNumber(null);
    setguessrounds(0);
  }

  let screen = <StartGameScreen onPickedNumber={pickednumberHandler}/>;

  if(userNumber){
    screen = <GameScreen userNumber={userNumber} onGameOver={gameisoverHandler} />
  }

  if(gameisover && userNumber)
  {
    screen = <GameOverScreen userNumber={userNumber} roundsNumber={guessRounds} onstartgameScreen={startnewgameHandler}/>;
  }
 
  const [fontsLoaded]=useFonts({
    'open-sans':require('./assets/Fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/Fonts/OpenSans-Bold.ttf'),

  });

  if(! fontsLoaded)
  {
    return <AppLoading/>
  }

  return(
    <>
    <StatusBar style="light"/>
   <LinearGradient colors={['#4e0329','#f7ba02']} style={styles.rootScreen}>
   
     <ImageBackground source={require('./assets/images/dice.jpg')}
     resizeMode='cover'
     style={styles.rootScreen}
     imageStyle={styles.backgroundImage}>
    
    <SafeAreaView style={styles.rootScreen}>
    {screen}
    </SafeAreaView>
     </ImageBackground>
  
  </LinearGradient> 
  </>
 
  );
}

const styles = StyleSheet.create({
  
  rootScreen:{
    flex:1,
    
  },
  backgroundImage:{
    opacity:0.15,
    
    
  
   
  }

});
