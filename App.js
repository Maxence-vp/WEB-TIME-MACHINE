import { StatusBar } from "expo-status-bar";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import * as Location from "expo-location";
import {
  StyleSheet,
  Text,
  View,
  Back,
  SafeAreaView,
  Image,
  ScrollView,
} from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

//import de mes pages
import Connexion from "./components/OnBoarding/connexion";
import Nav from "./components/navigation";

const Stack = createNativeStackNavigator();

export default function App() {
  const [login, setLogin] = useState(false);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Connexion" component={Connexion} />
        <Stack.Screen name="Nav" component={Nav} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
