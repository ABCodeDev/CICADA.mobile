import React from 'react'
import { View} from 'react-native'
import { Text } from 'native-base'
import styles from './Styles/FeedItemStyle'
import { CardItem, Card } from 'native-base'
import ComponentThumbnail from '../Components/ComponentThumbnail'

export default class FeedItem extends React.Component {

  renderComponentThumbnail(components) {
    if (components.length > 0) {
      return components.map((component, index) => (
        <ComponentThumbnail key={index} component={component} />
      ));
    }
    else return [];
  }

  render () {


    const notification = this.props.Notification;
    notification.created = (String(notification.created)).substring(15);

    let renderedComponentThumbnails = <Text></Text>;

    if(notification.components != null & notification.components.length > 0){
      const notificationComponent = notification.components;
      renderedComponentThumbnails = this.renderComponentThumbnail(notificationComponent);
    }else{

    }


    return (
      <View style={{padding:5, paddingBottom:0}}>
        <Card>
          <CardItem bordered header>
            <Text>{notification.title}</Text>
          </CardItem>
          <CardItem>
            <Text>{notification.description}</Text>
          </CardItem>
          <CardItem>
            {renderedComponentThumbnails}
          </CardItem>
          <CardItem/>
          <CardItem>
            <Text style={{textAlign:'right'}} note>{notification.created} </Text>
          </CardItem>
        </Card>
      </View>
    )
  }
}

//Prop type warnings
FeedItem.propTypes = {
  Notification: React.PropTypes.object
}
//
// // Defaults for props
// FeedItem.defaultProps = {
//   someSetting: false
// }
