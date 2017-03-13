import React from 'react'
import { View, Text } from 'react-native'
import styles from './Styles/ComponentThumbnailsStyle'

export default class ComponentThumbnails extends React.Component {



  render () {

    const component = this.props.component;

    return (
        <TouchableHighlight onPress={this._onPressButton}>
            <View>
              <Text>{component.title}</Text>
              <Text>{component.description}</Text>
            </View>
        </TouchableHighlight>
    )
  }

  _onPressButton(){

  }
}

// // Prop type warnings
// ComponentThumbnails.propTypes = {
//   someProperty: React.PropTypes.object,
//   someSetting: React.PropTypes.bool.isRequired
// }
//
// // Defaults for props
// ComponentThumbnails.defaultProps = {
//   someSetting: false
// }
