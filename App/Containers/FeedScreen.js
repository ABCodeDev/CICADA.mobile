import React from 'react'
import { View,ScrollView, Text, KeyboardAvoidingView } from 'react-native'
import { connect } from 'react-redux'
import FeedActions from '../Redux/FeedRedux'
import { Container } from 'native-base'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'
import { Metrics } from '../Themes'
// external libs
import Icon from 'react-native-vector-icons/FontAwesome'
import Animatable from 'react-native-animatable'
import { Actions as NavigationActions } from 'react-native-router-flux'

import FeedItem from '../Components/FeedItem'

// Styles
import styles from './Styles/FeedScreenStyle'

// I18n
import I18n from 'react-native-i18n'

class FeedScreen extends React.Component {

  constructor(){
    super();
  }

  renderFeeds(notifications) {
    if(notifications !=null) {
      if (notifications.length > 0) {
        return notifications.map((notification, index) => (
            <FeedItem key={index} Notification={notification}/>
        ));
      }else return [];
    }
    else return [];
  }


  render () {
    var _scrollToBottomY = 0;
    this.props.fetchFeed();
    const notifications = this.props.notifications;
    console.log(notifications);
    const notificationsFeed =  this.renderFeeds(notifications);


    return (

      <ScrollView ref="scrollView" style={styles.container} onContentSizeChange={(contentWidth, contentHeight)=>{_scrollToBottomY = contentHeight; this.refs.scrollView.scrollTo(_scrollToBottomY); }}>
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
    fetchFeed: () => dispatch(FeedActions.feedFetchRequest())
  }
}

this.propTypes = {
  fetchFeed : React.PropTypes.func
}


export default connect(mapStateToProps, mapDispatchToProps)(FeedScreen)
