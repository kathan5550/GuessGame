
import {View,Text,Pressable,StyleSheet} from 'react-native';

function PrimaryButton({children, onPress}){

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
        backgroundColor:'orange',
        borderRadius:18,
        paddingVertical:8,
        paddingHorizontal:16,
        margin:4,
        elevation:4,
        marginTop:20,
        
        
      
    },
    ButtonText:{
        color:'white',
        textAlign:"center",
        fontSize:16,
        fontWeight:"600",
    }

})
export default PrimaryButton;