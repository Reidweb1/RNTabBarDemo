import { createStackNavigator } from 'react-navigation'
import StackTwoMain from './StackTwoMain'
import StackTwoDetail from './StackTwoDetail'

const StackTwo = createStackNavigator({
  Main: {
    screen: StackTwoMain
  },
  Detail: {
    screen: StackTwoDetail
  }
})

export {
  StackTwo
}
