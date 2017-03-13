import React, { Component } from 'react'
import { Scene, Router } from 'react-native-router-flux'
import Styles from './Styles/NavigationContainerStyles'
import NavigationDrawer from './NavigationDrawer'

// screens identified by the router
import LaunchScreen from '../Containers/LaunchScreen'

import LoginScreen from '../Containers/LoginScreen'
import FeedScreen from '../Containers/FeedScreen'
import ProfileScreen from '../Containers/ProfileScreen'

/* **************************
* Documentation: https://github.com/aksonov/react-native-router-flux
***************************/

class NavigationRouter extends Component {
  render () {
    return (
      <Router>
        <Scene key='drawer' component={NavigationDrawer} open={false}>
          <Scene key='drawerChildrenWrapper' navigationBarStyle={Styles.navBar} titleStyle={Styles.title} leftButtonIconStyle={Styles.leftButton} rightButtonTextStyle={Styles.rightButton}>
              <Scene initial key='loginScreen' component={LoginScreen} title='Login' hideNavBar />
              <Scene key='FeedScreen' component={FeedScreen} title='Feed' hideNavBar={false}/>
              <Scene key='ProfileScreen' component={ProfileScreen} title='Profile'hideNavBar={false}/>
          </Scene>
        </Scene>
      </Router>
    )
  }
}

export default NavigationRouter
