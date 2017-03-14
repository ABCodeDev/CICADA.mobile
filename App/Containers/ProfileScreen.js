import React from 'react'
import { ScrollView, Text, KeyboardAvoidingView } from 'react-native'
import { connect } from 'react-redux'
import ProfileActions from '../Redux/ProfileRedux'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'
import { Metrics } from '../Themes'
// external libs
import Icon from 'react-native-vector-icons/FontAwesome'
import Animatable from 'react-native-animatable'
import { Actions as NavigationActions } from 'react-native-router-flux'

// Styles
import styles from './Styles/ProfileScreenStyle';

// I18n
import I18n from 'react-native-i18n'

class ProfileScreen extends React.Component {

  renderProfile(profile) {
    if(profile !=null) {
      return [];
    }
    else return [];
  }

  render () {
    const profile = this.props.profile;
    console.log(profile);
    const profileFeed = this.renderProfile(profile);

    return (
      <ScrollView>
        <View style={styles.navbarPad}>
        </View>
        <KeyboardAvoidingView behavior='position'>
          <Text>ProfileScreen Container</Text>
          {profileFeed}
        </KeyboardAvoidingView>
      </ScrollView>
    )
  }

}

const mapStateToProps = (state) => {
  return {
    profile: state,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchProfile: () => dispatch(ProfileActions.profileRequest())
  }
}

this.propTypes = {
  fetchProfile : React.PropTypes.func
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileScreen)
