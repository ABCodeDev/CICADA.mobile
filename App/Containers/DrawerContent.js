import React, { Component } from 'react'
import { ScrollView, Image, BackAndroid } from 'react-native'
import styles from './Styles/DrawerContentStyles'
import { Images } from '../Themes'
import DrawerButton from '../Components/DrawerButton'
import { Actions } from 'react-native-router-flux'

class DrawerContent extends Component {

  componentDidMount () {
    BackAndroid.addEventListener('hardwareBackPress', () => {
      if (this.context.drawer.props.open) {
        this.toggleDrawer()
        return true
      }
      return false
    })
  }

  toggleDrawer () {
    this.context.drawer.toggle()
  }

  logOut(){
    console.log("Log Out!");
    Actions.loginScreen({type:"reset"});
  }

  goToFeed(){
    Actions.FeedScreen({type:"replace"});
  }

  goToProfile(){
    Actions.ProfileScreen({type:"replace"});
  }

  render () {
    return (
      <ScrollView style={styles.container}>
        <Image source={Images.logo} style={styles.logo} />
        <DrawerButton onPress={this.goToProfile} text="Profile"/>
        <DrawerButton onPress={this.goToFeed} text="Feed"/>
        <DrawerButton onPress={this.logOut} text="Log Out"/>
      </ScrollView>
    )
  }

}

DrawerContent.contextTypes = {
  drawer: React.PropTypes.object
}

export default DrawerContent
