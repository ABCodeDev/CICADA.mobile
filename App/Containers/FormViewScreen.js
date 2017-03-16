import React from 'react'
import { ScrollView, Text, KeyboardAvoidingView,View } from 'react-native'
import { connect } from 'react-redux'
import { WebView } from 'react-native';
// Add Actions - replace 'Your' with whatever your reducer is called :)
import FeedComponentActions from '../Redux/FeedComponentRedux'
import { Metrics } from '../Themes'
// external libs
import Icon from 'react-native-vector-icons/FontAwesome'
import Animatable from 'react-native-animatable'
import { Actions as NavigationActions } from 'react-native-router-flux'

// Styles
import styles from './Styles/FormViewScreenStyle'

// I18n
import I18n from 'react-native-i18n'

class FormViewScreen extends React.Component {

  constructor(props){
    super(props);
  }



  render () {
      return (
        <WebView
            source={{uri: 'http://192.168.43.84:3000/SecretForm'}}
            style={{marginTop:50}}
        />
      )
  }

}

const mapStateToProps = (state) => {
  return {
    viewComponent:state.viewComponent.component
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

this.propTypes = {
  viewComponent:React.PropTypes.object
}

export default connect(mapStateToProps, mapDispatchToProps)(FormViewScreen)
