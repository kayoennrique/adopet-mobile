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
    <Drawer.Navigator
      screenOptions={{
        drawerStyle: {
          backgroundColor: '#36D6AD'
        },
        drawerLabelStyle: {
          color: '#FFF',
          fontSize: 14,
          fontFamily: 'PoppinsRegular',
          fontWeight: '400',
          lineHeight: 20
        }
      }}
    >
      <Drawer.Screen
        name='Lista de Pets'
        component={TabRoutes}
        options={{
          drawerLabel: 'Pets para adoção',
          drawerIcon: () => (<Image source={require('../assets/pets.png')} style={{ width: 20, height: 20 }}></Image>),
          headerTransparent: true,
          title: ''
        }}
      />
      <Drawer.Screen
        name='Perfil'
        component={Profile}
        options={{
          drawerLabel: 'Perfil',
          drawerIcon: () => (
            <Image source={require('../assets/profile.png')} style={{ width: 20, height: 20, }} />
          ),
          headerTransparent: true,
          title: ''
        }}
      />
      <Drawer.Screen
        name='Sair'
        component={Home}
        options={{
          drawerLabel: 'Sair',
          drawerIcon: () => (
            <Image source={require('../assets/logout.png')} style={{ width: 20, height: 20 }} />
          ),
          headerTransparent: true,
          title: ''
        }}
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
            <Image source={require('../assets/pets-green.png')} style={{ width: 20, height: 20 }}
            />
          )
        }}
      />
      <Tab.Screen name="Mensagem" component={Message}
        options={{
          tabBarIcon: () => (
            <Image source={require('../assets/mensagens.png')} style={{ width: 20, height: 20 }} />
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
        <Stack.Screen name='Drawer' component={DrawerRoutes} />
        <Stack.Screen name='Sobre' component={About} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}