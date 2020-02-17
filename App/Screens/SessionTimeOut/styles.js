import { StyleSheet } from "react-native";
import { scaledHeight } from '../../Utils/Resolution';

const styles = StyleSheet.create({
  bottomView: {
    alignItems: 'center',
    backgroundColor: '#194C7D',
    bottom: 0,
    height: scaledHeight(50),
    justifyContent: 'center',
    position: 'absolute',
    width: '100%',
  },
  container: {
    alignItems: 'center',
    alignSelf: 'stretch',
    backgroundColor: '#F7F7F7',
    flex: 1
  },
  contentContainer: {
    alignSelf: 'stretch',
    paddingHorizontal: '2%',
  },
  cornerTriangle: {
    backgroundColor: 'transparent',
    borderRightColor: 'transparent',
    borderRightWidth: 20,
    borderStyle: 'solid',
    borderTopColor: '#8BC105',
    borderTopWidth: 20,
    height: 0,
    width: 0
  },
  currentPINText: {
    color: '#194C7D',
    fontSize: scaledHeight(18),
  },
  innerCircle: {
    backgroundColor:'#F7F7F7',
    borderColor: '#F7F7F7',
    borderRadius: scaledHeight(90),
    borderWidth: scaledHeight(2),
    height: scaledHeight(180),
    justifyContent: 'center',
    width: scaledHeight(180)
},
  layoutContainer: {
    alignSelf: 'stretch',
    backgroundColor: '#FFFFFF',
    flex: 1,
    height: '100%',
    left: '4%',
    position: 'absolute',
    right: '4%',
    top: scaledHeight(120)
  },
  mandatoryText: {
    color: '#56565A',
    fontSize: scaledHeight(12),
    marginTop: scaledHeight(20)
  },
  outerCircle : {
    alignItems: 'center',
    borderColor: '#FFFFFF',
    borderRadius: scaledHeight(96),
    borderWidth: scaledHeight(2),
    height: scaledHeight(198),
    justifyContent: 'center',
    width: scaledHeight(198)
},

  roundSection : {alignItems:'center',fontSize:scaledHeight(18),justifyContent:'center',marginTop:scaledHeight(140)},
  scrollStyle: { alignSelf: 'stretch', flex: 1 },
  securePINDetailsContainer: {
    marginTop: scaledHeight(10),
    paddingLeft: '4%',
    paddingRight: '4%',
  },
  securePINText: {
    color: '#56565A',
    fontSize: scaledHeight(13),
    marginBottom: scaledHeight(10),
    marginTop: scaledHeight(20),
  },
  securePINTextBox: {
    width: '100%'
  },
securePINTextBoxError: {
    borderColor: 'red',
  },
sessionExpire:{color:'#49494A',fontSize:scaledHeight(18),fontWeight:'bold',marginTop:scaledHeight(50)},
signOutButton:{alignSelf:'center',color:'#004A98',fontSize:scaledHeight(18),fontWeight:'bold',marginTop:scaledHeight(30)},
stayLogged:{alignSelf:'center',backgroundColor:"#194C7D",height:scaledHeight(44),justifyContent:'center',marginTop:scaledHeight(40),width:'60%'},
stayLoggedButton:{color:'#FFFFFF',fontSize:scaledHeight(18)},
  submitButtonStyle: {
    color: '#FFFFFF',
    fontSize: scaledHeight(16),
    fontWeight: 'bold'
  }
});

export default styles;