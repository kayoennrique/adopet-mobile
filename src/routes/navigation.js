import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";

const Stack = createStackNavigator();

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