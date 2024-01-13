import { View,Text,StyleSheet } from "react-native";

function NumberContainer({children})
{

    return<View style={styles.container}>
        <Text style={styles.numbertext}>{children}</Text>
    </View>

}

const styles = StyleSheet.create({

    container:{
         borderWidth:4,
         borderColor:'#f7ba02',
         padding:24,
         borderRadius:8,
         margin:24,
         alignContent:'center',
         alignItems:'center',
    },
    numbertext:{
        fontSize:24,
        fontFamily:'open-sans-bold',
       // fontWeight:'bold',
        color:'#f7ba02',
    }
})

export default NumberContainer;