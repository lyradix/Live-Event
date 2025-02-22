import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from '../screens/home';
import Programmation from '../screens/programmation';
import ProgrammationStack from './programmationStack';

const RootDrawer = createDrawerNavigator({
 Home:{
    screen:ProgrammationStack,
 },

});

export default createAppContainer(RootDrawer);
