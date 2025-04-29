import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import CarDetailScreen from '../screens/CarDetailScreen';
import InspectionsScreen from '../screens/InspectionsScreen';
import DocumentsScreen from '../screens/DocumentsScreen';
import ImagesScreen from '../screens/ImagesScreen';
const Stack = createNativeStackNavigator();

export default function StackNavigator() {
  return (
    <Stack.Navigator initialRouteName="CarInfo">
      <Stack.Screen name="CarInfo" component={HomeScreen} />
      <Stack.Screen name="CarDetail" component={CarDetailScreen} />
      <Stack.Screen name="Inspections" component={InspectionsScreen} />
      <Stack.Screen name="Documents" component={DocumentsScreen} />
      <Stack.Screen name="Images" component={ImagesScreen} />
    </Stack.Navigator>
  );
}
