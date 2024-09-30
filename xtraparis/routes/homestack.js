import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import Home from '../screens/home';
import Programmation from '../screens/programmation';

const screens = {
    Home: {
        screen:Home
    },
    Programmation: {
        screen:Programmation
    }
}

const HomeStack = createStackNavigator(screens);

// utilisé pour exporter vers app.js
export default createAppContainer(HomeStack);