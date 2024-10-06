import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from '../screens/home';
import Programmation from '../screens/programmation';
import ProgrammationStack from './programmationStack';

const RootDrawer = createDrawerNavigator();

export default function RootDrawer() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="ProgrammationStack" component={ProgrammationStack} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}