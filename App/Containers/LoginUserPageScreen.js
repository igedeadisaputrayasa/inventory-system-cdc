import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  StatusBar,
  Alert } from 'react-native'
import { connect } from 'react-redux'
import I18n from 'react-native-i18n'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'
import IconVector from 'react-native-vector-icons/Ionicons';
import IconVectorFontAwesome from 'react-native-vector-icons/FontAwesome';

// Styles
import styles from './Styles/LoginUserPageScreenStyle'

// Redux
import LoginUserPageActions from '../Redux/LoginUserPageRedux'

// Custom Component
import ProgressIndicator from '../Components/ProgressIndicator'

class LoginUserPageScreen extends Component {

  static navigationOptions = {
    header: null
  }

  constructor(props){
    super(props)
    var userName, userPassword;
    this.state={
      userName:'',
      userPassword:''
    }
  }
  
  validateFields (){
      const { userName, userPassword } = this.state
      if (userName === '' && userPassword === '') {
        Alert.alert('Error', 'Please fill out username and password field')
        return false
      } else if (userName === '') {
        Alert.alert('Error', 'Please fill out username field')
        return false
      } else if (userPassword === '') {
        Alert.alert('Error', 'Please fill out password field')
        return false
      }
      return true
  }

  login () {
    if (this.validateFields()) {
        const { userName, userPassword } = this.state
        this.props.attemptLogin(userName, userPassword)
    }
  }

  render () {
    const { userName, userPassword } = this.state
    const { loggingIn } = this.props
    return (
      <View style={styles.container}>
          <StatusBar 
              barStyle="light-content" />
          <View>
              <IconVector name='ios-person' style={styles.iconLogin} size={100}/>
              <Text style={styles.wordOne}>Login to your account</Text>
              <Text style={styles.wordTwo}>Enter your credentials below</Text>
          </View>
          <View style={styles.inputForm}>
              <TextInput 
                  style={styles.input}
                  returnKeyType="next"
                  onSubmitEditing={() => this.passwordInput.focus()}  
                  keyboardType="email-address"
                  autoCapitalize="none"
                  autoCorrect={false}
                  placeholder='username' 
                  onChangeText={userName => this.setState({userName})} />
          </View>
          <View style={styles.inputForm}>
              <TextInput 
                  style={styles.input} 
                  secureTextEntry
                  returnKeyType="go"
                  placeholder='password' 
                  ref={(input) => this.passwordInput = input } 
                  onChangeText={userPassword => this.setState({userPassword})} />
          </View>
          <View>
              <TouchableOpacity style={styles.buttonLogin} onPress={this.login.bind(this)}>
                  <Text style={styles.buttonTextLogin}>Sign in        
                      <IconVectorFontAwesome name='arrow-circle-right' style={styles.iconSignInLogin} size={15}/>
                  </Text>
              </TouchableOpacity>
          </View>
          <ProgressIndicator show={loggingIn} text={I18n.t('loggingIn')} />
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    attemptLogin: (userName, userPassword) => dispatch(LoginUserPageActions.loginUserPageRequest(userName, userPassword)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginUserPageScreen)
