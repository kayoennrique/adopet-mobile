import { Image } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import ListPets from "../pages/ListPets";
import Message from "../pages/Message";
import About from "../pages/About";
import Profile from "../pages/Profile";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

function DrawerRoutes() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name='Lista de Pets'
        component={ListPets}
      />
      <Drawer.Screen
        name='Perfil'
        component={Profile}
      />
      <Drawer.Screen
        name='Sair'
        component={Home}
      />
    </Drawer.Navigator>
  );
}

function TabRoutes() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false
      }}
    >
      <Tab.Screen name="Lista de Pets" component={ListPets}
        options={{
          tabBarIcon: () => (
            <Image source={require('../assets/pets-green.png')} style={{ width: 24, height: 24 }}
            />
          )
        }}
      />
      <Tab.Screen name="Mensagem" component={Message}
        options={{
          tabBarIcon: () => (
            <Image source={require('../assets/mensagens.png')} style={{ width: 24, height: 24 }} />
          )
        }}
      />
    </Tab.Navigator>
  );
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
        <Stack.Screen name='Tab' component={TabRoutes} />
        <Stack.Screen name='Sobre' component={About} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}