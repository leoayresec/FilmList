import Home from '../pages/Home'
import {
  createAppContainer,
  createStackNavigator,
  createSwitchNavigator
} from 'react-navigation';
import {  createMaterialTopTabNavigator,
} from 'react-navigation-tabs'

const TabNavigator = createMaterialTopTabNavigator(
    {
      Home: Home,
    },{
    tabBarPosition: 'bottom'
  }
    )

export default createAppContainer(TabNavigator)