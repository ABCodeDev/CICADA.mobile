import React from 'react'
import { View, Text } from 'react-native'
import { TouchableHighlight } from 'react-native'
import styles from './Styles/ComponentThumbnailsStyle'

import { CardItem, Card } from 'native-base'

export default class ComponentThumbnails extends React.Component {



  render () {

    const component = this.props.component;

    return (
      <View>
        <CardItem>
          <TouchableHighlight onPress={this._onPressButton}>
            <Text>{component.title}</Text>
            <Text>{component.description}</Text>
          </TouchableHighlight>
        </CardItem>
      </View>
    )
  }

  _onPressButton(){

  }
}

// Prop type warnings
ComponentThumbnails.propTypes = {
  component:React.PropTypes.obj
}
//
// // Defaults for props
// ComponentThumbnails.defaultProps = {
//   someSetting: false
// }
