import React from 'react'
import { View,ScrollView, KeyboardAvoidingView } from 'react-native'
import { connect } from 'react-redux'
import FeedActions from '../Redux/FeedRedux'
import { Container } from 'native-base'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'
import { Metrics } from '../Themes'
// external libs
import Icon from 'react-native-vector-icons/FontAwesome'
import Animatable from 'react-native-animatable'
import { Actions } from 'react-native-router-flux'
import FeedComponentActions from '../Redux/FeedComponentRedux'
import { Actions as NavigationActions } from 'react-native-router-flux'
import { Text } from 'native-base'

import FeedItem from '../Components/FeedItem'

// Styles
import styles from './Styles/FeedScreenStyle'

// I18n
import I18n from 'react-native-i18n'

class FeedScreen extends React.Component {

  constructor(props){
    super(props);
    this.handleNotificationComponentPress = this.handleNotificationComponentPress.bind(this);
  }

  handleNotificationComponentPress(nid,cid){
    Actions.FormViewScreen({nid:nid,cid:cid});
    this.props.fetchComponent(cid,nid);
  }

  renderFeeds(notifications) {
    if(notifications !=null) {
      if (notifications.length > 0) {
        return notifications.map((notification, index) => (
          <FeedItem key={index} Notification={notification} handleNotificationComponentPress={this.handleNotificationComponentPress}/>
        ));
      }else return [];
    }
    else return [];
  }


  render () {
    const notifications = this.props.notifications;
    console.log(notifications);
    const notificationsFeed =  this.renderFeeds(notifications);


    return (
      <ScrollView>
        <View style={styles.navbarPad}>
        </View>
        <KeyboardAvoidingView behavior='position'>
          {notificationsFeed}
        </KeyboardAvoidingView>
      </ScrollView>
    )
  }

}

const mapStateToProps = (state) => {
  return {
    notifications:state.feed.notifications,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchFeed: () => dispatch(FeedActions.feedFetchRequest()),
    fetchComponent: (cid,nid)=> dispatch(FeedComponentActions.feedComponentRequest(cid,nid)),
  }
}

this.propTypes = {
  fetchFeed : React.PropTypes.func
}


export default connect(mapStateToProps, mapDispatchToProps)(FeedScreen)
