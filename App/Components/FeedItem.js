import React from 'react'
import { View, Text } from 'react-native'
import styles from './Styles/FeedItemStyle'

export default class FeedItem extends React.Component {

  renderComponentThumbnail(components) {
    if (components.length > 0) {
      return components.map((component, index) => (
          <ComponentThumbnail key={index} componentItem={component} />
      ));
    }
    else return [];
  }

  render () {

    const notification = this.props.Notification;
    const notificationComponent = notification.components;
    const renderedComponentThumbnails = renderComponentThumbnail(notificationComponent);


    return (
      <View style={styles.container}>
        <Text>{notification.created_at}</Text>
        <Text>{notification.title}</Text>
        <Text>{notification.description}</Text>
        <View>
          {renderedComponentThumbnails}
        </View>
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
