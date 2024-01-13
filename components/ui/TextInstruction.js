import { Text,StyleSheet } from "react-native";
function Textinstruction({children}){

    return <Text style={styles.textcontainer}>{children}</Text>
}

const styles= StyleSheet.create({

    textcontainer:{
        fontSize:24,
        color:'orange',
       // fontWeight:'bold',
       fontFamily:'open-sans'
    },

})

export default Textinstruction;