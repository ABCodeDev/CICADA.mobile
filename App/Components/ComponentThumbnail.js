import React from 'react'
import { View } from 'react-native'
import { Text } from 'native-base'
import { TouchableOpacity } from 'react-native'
import styles from './Styles/ComponentThumbnailsStyle'

import { CardItem, Card } from 'native-base'

export default class ComponentThumbnails extends React.Component {



  render () {

    const component = this.props.component;
    console.log(component);
    return (
      <CardItem>
        <TouchableOpacity onPress={this._onPressButton}>
          <View>
            <Text>{component.title}</Text>
            <Text>{component.description}</Text>
          </View>
        </TouchableOpacity>
      </CardItem>
    )
  }

  _onPressButton(){

  }
}

// Prop type warnings
ComponentThumbnails.propTypes = {
  component: React.PropTypes.object
}
//
// // Defaults for props
// ComponentThumbnails.defaultProps = {
//   someSetting: false
// }
