import React from 'react'
import { View, Text } from 'react-native'
import styles from './Styles/FeedItemStyle'

export default class FeedItem extends React.Component {

  renderComponentThumbnail(components) {
    if (components.length > 0) {
      return components.map((article, index) => (
          <ComponentThumbnail key={index} article={article} />
      ));
    }
    else return [];
  }

  render () {

    const notification = this.props.Notification;
    const notificationComponent = notification.components;



    return (
      <View style={styles.container}>
        <Text>FeedItem Component</Text>
      </View>
    )
  }
}

//Prop type warnings
FeedItem.propTypes = {
  Notification: React.PropTypes.obj
}
//
// // Defaults for props
// FeedItem.defaultProps = {
//   someSetting: false
// }
