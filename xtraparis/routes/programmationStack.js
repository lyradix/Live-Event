import { createNativeStackNavigator} from "@react-navigation/native-stack";
import Programmation from "../screens/programmation";
import Details from "../screens/details";

const Stack = createNativeStackNavigator();

export default function ProgrammationStack() {
    return(
    <Stack.Navigator>
        <Stack.Screen name='programmation' component={Programmation}/>
        <Stack.Screen name='Details' component={Details}/>
    </Stack.Navigator>
);
}