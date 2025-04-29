import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import CarDetailScreen from '../screens/CarDetailScreen';

const Stack = createNativeStackNavigator();

export default function StackNavigator() {
  return (
    <Stack.Navigator initialRouteName="CarInfo">
      <Stack.Screen name="CarInfo" component={HomeScreen} />
  
      <Stack.Screen name="CarDetail" component={CarDetailScreen} />
    </Stack.Navigator>
  );
}
