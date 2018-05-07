import React from 'react'
import {
  View,
  Text,
  StyleSheet
} from 'react-native'

export default class StackOneDetail extends React.Component {

  componentWillMount() {
    const navigationParams = this.props.navigation.state.params
    const navigationProp = navigationParams.navigationProp
    console.log('props ', navigationProp)
  }

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
