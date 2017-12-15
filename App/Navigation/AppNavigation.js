import { StackNavigator } from 'react-navigation'
import LoginUserPageScreen from '../Containers/LoginUserPageScreen'
import LaunchScreen from '../Containers/LaunchScreen'

import styles from './Styles/NavigationStyles'

// Manifest of possible screens
const PrimaryNav = StackNavigator({
  LoginUserPageScreen: { screen: LoginUserPageScreen },
  LaunchScreen: { screen: LaunchScreen }
}, {
  // Default config for all screens
  headerMode: 'none',
  initialRouteName: 'LoginUserPageScreen',
  navigationOptions: {
    headerStyle: styles.header
  }
})

export default PrimaryNav
