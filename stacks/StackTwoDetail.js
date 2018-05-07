import React from 'react'
import {
  View,
  Text,
  StyleSheet
} from 'react-native'

export default class StackTwoDetail extends React.Component {
  
  render() {
    return (
      <View style={ styles.container }>
        <Text style={ styles.text }>Detail!</Text>
      </View>
    )
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
