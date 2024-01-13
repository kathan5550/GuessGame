import { Text ,StyleSheet, Platform} from "react-native";

function title({children})
{
    return <Text style={styles.title}>{children}</Text>
}

const styles = StyleSheet.create({
    title:{
        fontSize:24,
        color:'#f7ba02',
        //fontWeight:'bold',
        fontFamily:'open-sans-bold',
        borderWidth:3,
       // borderwidth: Platform.select({ios:0 , android:3}),
        borderColor:'#f7ba02',
        textAlign:'center',
        padding:12,
       
    },
})



 


export default title;