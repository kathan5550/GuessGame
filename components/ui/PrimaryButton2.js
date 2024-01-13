
import {View,Text,Pressable,StyleSheet} from 'react-native';

function PrimaryButton2({children, onPress}){

  return (
    <Pressable onPress={onPress}>
    <View style={styles.ButtonContainer}>
        <Text style={styles.ButtonText}>{children}</Text>
    </View>
    </Pressable>
    );
    
}

const styles= StyleSheet.create({
    ButtonContainer:{
        
        backgroundColor:'#4e0329',
        borderRadius:20,
        paddingVertical:9,
        paddingHorizontal:20,
        margin:9,
        elevation:4,
        marginTop:20,
     
        
        
      
    },
    ButtonText:{
        color:'white',
        textAlign:"center",
        fontSize:19,
        fontWeight:"600",
    }

})
export default PrimaryButton2;