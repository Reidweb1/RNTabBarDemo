import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity
} from 'react-native'

export default class StackTwoMain extends React.Component {

  render() {
    return (
      <View style={ styles.container }>
        <TouchableOpacity onPress={ this.navigation }>
          <Text style={ styles.text }>Navigate!</Text>
        </TouchableOpacity>
      </View>
    )
  }

  navigation = () => {
    this.props.navigation.navigate('Detail')
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
		justifyContent: 'center'
  },
  text: {
    fontSize: 24,
    color: '#2662c1'
  }
})
