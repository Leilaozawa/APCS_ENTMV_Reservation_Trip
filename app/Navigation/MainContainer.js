import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from 'react-native-vector-icons/Ionicons';
//import {Colors} from '../../Styles/GlobalStyle'
//Screens
import Home from "./Screens/Home"
import List from "./Screens/List"
import Settings from "./Screens/Settings"
import Account from "./Screens/Account"

//Screen names
const home="Home"
const list="List"
const settings="Settings"
const person="Account"

const Tab = createBottomTabNavigator();

const MainContainer= ()=> {
  return (
      <Tab.Navigator
        initialRouteName={home}
        screenOptions={({ route }) => ({ //screenOptions: This prop is used to customize the appearance of each tab. The provided function is called for each tab to determine its appearance.
          tabBarIcon: ({ focused, color, size }) => { //This function is called for each tab to determine its icon based on the current route name (rn). If the tab is focused (focused), a solid icon is used; otherwise, an outlined icon is used.
            let iconName;
            let rn = route.name;

            if (rn === home) {
              iconName = focused ? 'home' : 'home-outline';
            }
            else if (rn === list) {
              iconName = focused ? 'list' : 'list-outline';
            }
            else if (rn === settings) {
              iconName = focused ? 'settings' : 'settings-outline';
            }
            else if (rn === person) {
              iconName = focused ? 'person' : 'person-outline';
            }
                // We return any component here
                return <Ionicons name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: "blue", // Color of the active tab
            tabBarInactiveTintColor: "black", // Color of the inactive tab
            tabBarLabelStyle: {
              "paddingBottom": 10,
              "fontSize": 10
            },
            "tabBarStyle": [
              {
                "display": "flex"
              },
              null
            ]
            })} 
           >

            <Tab.Screen 
              name={home} 
              component={Home} 
              options={
                { headerShown: false }
              } 
            />
            <Tab.Screen 
              name={list} 
              component={List}
              options={
                { headerShown: false }
              } 
            />
            <Tab.Screen 
              name={settings} 
              component={Settings}
              options={
                { headerShown: false }
              } 
            />
            <Tab.Screen 
              name={person} 
              component={Account}
              options={
                { headerShown: false }
              } 
            />

        </Tab.Navigator>
        
  );
}

export default MainContainer;

