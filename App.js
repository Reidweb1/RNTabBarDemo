import React from 'react'
import { createBottomTabNavigator } from 'react-navigation'
import { StackOne } from './stacks/StackOne'
import { StackTwo } from './stacks/StackTwo'
import TabIcon from './TabIcon'
import { Text, Platform, StyleSheet } from 'react-native'

export default class App extends React.Component {
  
  render() {
    return (
      <HomeNavigation />
    )
  }

}

const HomeNavigation = createBottomTabNavigator(
  {
    TabOne: {
      screen: StackOne,
      navigationOptions: ({ navigation }) => ({
				tabBarIcon: ({ focused, tintColor }) => {
					return <TabIcon index={ 0 }
													isFocused={ focused }/>
        }
      })
    },
    TabTwo: {
      screen: StackTwo,
      navigationOptions: ({ navigation }) => ({
				tabBarIcon: ({ focused, tintColor }) => {
					return <TabIcon index={ 1 }
													isFocused={ focused }/>
        }
      })
    }
  }
)
