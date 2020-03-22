import Home from '../pages/Home'
import Detalhe from '../pages/Detalhe'
import {
  createAppContainer,
  createSwitchNavigator
} from 'react-navigation';


const TabNavigator = createSwitchNavigator(
    {
      Home: Home,
      Detalhe:Detalhe
    },{
  }
    )

export default createAppContainer(TabNavigator)