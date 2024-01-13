import { View, StyleSheet, Dimensions } from "react-native";

function Card({children}){

    return <View style={styles.cardContainer}>{children}</View>

}

const devicewidth = Dimensions.get('window').width;

const styles = StyleSheet.create({

    cardContainer:{
        
        justifyContent:"center",
        alignItems:'center',
        marginTop:devicewidth < 380 ? 18: 36,
        marginHorizontal: 24,
        padding: 12,
        backgroundColor:'red',
        borderRadius:8,
        shadowColor:'black',
        shadowOffset:{width:0,height:2},
        shadowRadius:12,
        shadowOpacity:0.25,
        
    },
})


export  default Card;