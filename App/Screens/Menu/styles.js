import { StyleSheet } from "react-native";
import {scaledHeight,scaledWidth } from '../../Utils/Resolution';

export const styles = StyleSheet.create({
    container: { flex: 1, width: '100%', justifyContent: 'center', alignItems: 'flex-start', backgroundColor: 'white' },
    scrollViewStyle:{ flex: 1, width: "100%" },
    columnContainer:{ flexDirection: 'column', marginHorizontal: 10 },
    headerContainer: {
        marginHorizontal: 20,marginVertical:25,
        flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center'
    },
    menuContainer: {
        flex: 1, flexDirection: 'row', justifyContent: 'center',
        padding: 5,
        marginTop: 10
    },
    menuName: {
        flex: 1,
    },
    heading: {
        fontSize: 20,
    },
    menuItem: {
        padding: 10,
        borderWidth: 0.5,
        borderColor: '#d6d7da'
    },
    menuIcon: {
        width: 25,
        height: 25,
        marginHorizontal:5,
        padding: 5
    },
    buttonGoActionStyle: {        
        width: scaledWidth(100),      
        height: scaledHeight(50),
        backgroundColor: '#544A54',
        alignItems: 'center',
        alignContent: 'center',
        justifyContent: 'center',       
        marginLeft:'2%',   
        marginRight:'2%',       
    },   
    buttonGoTextStyle: {
        fontSize: scaledHeight(16),
        color: '#544A54',      
        width: '100%',
        textAlign: 'center',        
    },
    buttonCancelActionStyle:{
        width: scaledWidth(100),      
        height: scaledHeight(50),
        borderColor:'#544A54',
        borderWidth:1,
        backgroundColor: '#FFFFFF',
        alignItems: 'center',
        alignContent: 'center',
        justifyContent: 'center',
        marginLeft:'2%',   
        marginRight:'2%',
    },
    modalContainerStyle: {
        backgroundColor: '#FFFFFF',       
        paddingRight: '4%',
        paddingLeft: '4%',
        paddingTop: scaledHeight(15),
        paddingBottom: scaledHeight(15), 
        marginTop:scaledHeight(80), 

    },
    buttonCancelTextStyle: {
        fontSize: scaledHeight(16),
        color: '#FFFFFF',      
        width: '100%',
        textAlign: 'center',       
    },
    dividerLine:{ height: 1, backgroundColor: 'lightgray', marginHorizontal: 15 }

});