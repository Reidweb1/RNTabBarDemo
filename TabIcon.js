import React from 'react'
import {
  View,
  Text,
  Image,
  Platform,
  StyleSheet
} from 'react-native'

export default class TabIcon extends React.Component {

  render() {
    let image
    switch(this.props.index) {
      case 0:
        if (this.props.isFocused) {
          image = require('./resources/selected_event_tab.png')
        } else {
          image = require('./resources/event_tab.png')
        }
        break
      case 1:
      default:
        if (this.props.isFocused) {
          image = require('./resources/selected_profile_tab.png')
        } else {
          image = require('./resources/profile_tab.png')
        }
    }
    if (this.props.isFocused) {
      return (
        <View style={ style.container }>
          <Image style={ style.image } source={ image } />
        </View>
      )
    } else {
      return (
        <View style={ style.container }>
          <Image style={ style.image } source={ image } />
        </View>
      )
    }
  }

}

const style = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
    justifyContent: 'center'
	},
	image: {
		height: 18,
		width: 22,
		resizeMode: 'contain'
	}
})