import { createStackNavigator } from 'react-navigation'
import StackOneMain from './StackOneMain'
import StackOneDetail from './StackOneDetail'

const StackOne = createStackNavigator({
  Main: {
    screen: StackOneMain
  },
  Detail: {
    screen: StackOneDetail
  }
})

export {
  StackOne
}
