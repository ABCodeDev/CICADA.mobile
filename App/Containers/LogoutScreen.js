import React from 'react'
import { ScrollView, Text, KeyboardAvoidingView } from 'react-native'
import { connect } from 'react-redux'
import LoginTypes from '../Redux/LoginRedux'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'
import { Actions } from 'react-native-router-flux'
import { Metrics } from '../Themes'
// external libs
import Icon from 'react-native-vector-icons/FontAwesome'
import Animatable from 'react-native-animatable'
import { Actions as NavigationActions } from 'react-native-router-flux'

// Styles
import styles from './Styles/LogoutScreenStyle'

// I18n
import I18n from 'react-native-i18n'

class LogoutScreen extends React.Component {

  render () {

    const {loggedIn} = this.props;

    if (loggedIn) {
    this.props.logout();
    Actions.loginScreen({type: "reset"});
    }

    return (
      <ScrollView>
      </ScrollView>
    )
  }

}

const mapStateToProps = (state) => {
  return {
    loggedIn: state.login.loggedIn
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    logout: ()=>dispatch(LoginTypes.logout)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LogoutScreen)
