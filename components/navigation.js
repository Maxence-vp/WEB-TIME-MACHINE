import { View, } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";

import research from "./research/Research";
import Settings from "./settings/Settings";
import Preview from "./preview/Preview";

const Tab = createBottomTabNavigator();

function Acceuil() {
  return (
    <View style={{ flex: 1 }}>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === "Recherche") {
              iconName = focused ? "search" : "search";
            } else if (route.name === "Paramètres") {
              iconName = focused ? "ios-settings-outline" : "ios-settings-outline";
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: "blue",
          tabBarInactiveTintColor: "gray",
        })}>
        <Tab.Screen
          options={{ headerShown: false }}
          name="Recherche"
          component={research}
        />

        <Tab.Screen
          options={{ headerShown: false }}
          name="Résultat de recherche"
          component={Preview}
        />

        <Tab.Screen
          options={{ headerShown: false }}
          name="Paramètres"
          component={Settings}
        />
      </Tab.Navigator>
    </View>
  );
}
export default Acceuil;
