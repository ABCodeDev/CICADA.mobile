import React from 'react'
import { View } from 'react-native'
import { Text, Right } from 'native-base'
import { TouchableOpacity } from 'react-native'
import styles from './Styles/ComponentThumbnailsStyle'
import { Colors,Metrics, ApplicationStyles } from '../Themes'
import { Actions } from 'react-native-router-flux'
import { CardItem, Card, Icon } from 'native-base'

export default class ComponentThumbnails extends React.Component {

  constructor(props){
    super(props);
    this._onPressButton = this._onPressButton.bind(this);
  }

  render () {
    const component = this.props.component;
    console.log(component);
    return (
      <CardItem bordered>
        <TouchableOpacity onPress={this._onPressButton}>
          <View style={{width:Metrics.screenWidth}}>
            <Text header>{component.title}</Text>
            <Text note >{component.description}</Text>
            <Text note >{component.type}</Text>
          </View>
        </TouchableOpacity>
      </CardItem>
    )
  }

  _onPressButton(){
    console.log("on press button");
    console.log(this.props);
    this.props.handleComponentPress(this.props.component.id);
  }
}

// Prop type warnings
ComponentThumbnails.propTypes = {
  component: React.PropTypes.object,
  handleComponentPress: React.PropTypes.func.isRequired
}
//
// // Defaults for props
// ComponentThumbnails.defaultProps = {
//   someSetting: false
// }
