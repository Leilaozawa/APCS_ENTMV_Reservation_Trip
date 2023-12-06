import { Stack } from "expo-router";

const Layout = () => {
  return(
    <Stack>
      <Stack.Screen
        name="index"
        options={{ title: 'login' }}
      />
    </Stack>
  );
}

/*import Login from "./Navigation/Screens/Login";
import { NavigationContainer} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
//import FlashMessage from "react-native-flash-message";
import Welcome from "./Navigation/Screens/Welcome";
import MainContainer from "./Navigation/MainContainer";

const Stack = createNativeStackNavigator();

const Layout = () => {

  return ( <NavigationContainer independent={true}>
    <Stack.Navigator options={{ headerShown: false }}>
      <Stack.Screen
        name="Welcome"
        component={Welcome}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="MainContainer"
        component={MainContainer}
        options={{ headerShown: false }}
      />

    </Stack.Navigator>
    {/*<FlashMessage position="top" />*}
  </NavigationContainer>
);
}
*/
export default Layout;