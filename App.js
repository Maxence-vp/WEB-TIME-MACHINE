import { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { StyleSheet, } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Connexion from "./components/OnBoarding/connexion";
import Acceuil from "./components/navigation";

const Stack = createNativeStackNavigator();

export default function App() {
  const [login, setLogin] = useState(false);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Connexion" component={Connexion} />
        <Stack.Screen name="Acceuil" component={Acceuil} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  connexion: {
    backgroundColor: "red",
  },
});
