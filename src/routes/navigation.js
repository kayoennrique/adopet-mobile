import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ListPets from "../pages/ListPets";
import Message from "../pages/Message";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function TabRoutes() {
  return (
    <Tab.Navigator>
      <Tab.Screen name='ListaPets' component={ListPets} />
      <Tab.Screen name='Mensagens' component={Message} />
    </Tab.Navigator>
  )
}

export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home"
        screenOptions={{
          headerTitle: '',
          headerShown: false
        }}
      >
        <Stack.Screen name='Home'
          component={Home} />
        <Stack.Screen name='Login' component={Login} />
        <Stack.Screen name='Cadastro' component={Register} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}