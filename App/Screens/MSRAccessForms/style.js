import { StyleSheet } from "react-native";
import { scaledHeight } from '../../Utils/Resolution';

const styles = StyleSheet.create({
    blackText: {
        color: 'black',
        fontSize:scaledHeight(17),  
        fontWeight: '200',
        textAlignVertical: 'center',
    },
    blueBoldText:{
        color:"#3E7580",
        fontSize:scaledHeight(17),  
        fontWeight: '400',
        textAlignVertical: 'center',
    },
    boldText:{
        color:"#000000",
        fontSize:scaledHeight(20),  
        fontWeight: '600',
        textAlignVertical: 'center',
    },
    cardContainer: {
        backgroundColor: "white",
        borderColor: "#56565A",
       // borderRadius: scaledHeight(5),
        borderWidth: 0.5,
        elevation: scaledHeight(3),
        padding: scaledHeight(10),
        shadowColor: "#00000025",
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 1,
        shadowRadius: scaledHeight(5),

    },
    columnContainer: { flexDirection: 'column', padding: scaledHeight(12), },
    container: { flex: 1, justifyContent: 'center', },
    dividerLine: {
        backgroundColor: 'lightgray', height: 1,
        marginHorizontal: scaledHeight(10), marginVertical: scaledHeight(10)
    },
    footerContainer:{
        justifyContent:"center"
    },
    itemContainer: {
        marginHorizontal: scaledHeight(5),
        marginVertical: scaledHeight(2),
        padding: scaledHeight(4),
    },
    popularText:{
        alignSelf:'center',
        backgroundColor:'#99EB99',
        borderColor: "#56565A",
        borderRadius: scaledHeight(5),
        borderWidth: 0.5,
        color: 'green',
        fontSize:scaledHeight(15),  
        padding:scaledHeight(5),      
        textAlignVertical: 'center',
    },
    regularText:{
        color: '#56565A',
        fontSize:scaledHeight(15),        
        textAlignVertical: 'center',
    },
    rowContainer: {
        alignItems: 'center', flexDirection: 'row',
        padding: scaledHeight(3), width: "100%"
    },
    transparentGrayContainer: {
        backgroundColor: "rgba(0,0,0,0.1)",
        marginHorizontal: scaledHeight(7),
        marginVertical: scaledHeight(5),
        paddingVertical: scaledHeight(10)
    },

});

export default styles;