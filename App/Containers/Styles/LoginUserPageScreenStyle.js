import { StyleSheet } from 'react-native'
import { ApplicationStyles } from '../../Themes/'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  iconTextInput:{
    
  },
  wordOne:{
      color: '#000000',
      textAlign: 'center',
      fontSize: 17,
      marginBottom: 10
  },
  wordTwo:{
      color: '#CECECE',
      textAlign: 'center',
      fontSize: 12,
      marginBottom: 10
  },
  inputForm:{
      borderLeftWidth: 1,
      borderRightWidth: 1,
      borderTopWidth: 1,
      borderBottomWidth: 1,
      marginBottom: 10,
      borderRadius: 3,
      padding : 10,
      width: 250
  },
  container : {
      flex:1,
      padding : 10,
      backgroundColor : '#FFFFFF',
      justifyContent: 'center',
      alignItems: 'center'
  },
  input : {
      borderColor : '#CECECE',
      backgroundColor : '#FFFFFF'
  },
  buttonLogin : {
      height : 30,
      padding : 5,
      backgroundColor : '#2196F3',
      borderColor: '#2196F3',
      borderRadius: 3,
      width: 250
  },
  buttonTextLogin: {
      justifyContent: 'center',
      textAlign: 'center',
      alignItems: 'center',
      color: '#FFFFFF'
  },
  containerCircleIconLogin:{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'white'
  },
  outCircleIconLogin:{
      borderRadius: 40,
      width: 80,
      height: 80,
      backgroundColor: 'white'
  },
  innerCircleIconLogin:{
      borderRadius: 35,
      width: 70,
      height: 70,
      backgroundColor: '#CECECE'
  },
  iconLogin: {
      padding: 0,
      margin:0,
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center'
  },
  iconSignInLogin:{
      
  }
})
