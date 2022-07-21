import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home } from "../screens/Home";
import { Initial } from "../screens/Initial";

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen
        options={{ animation: "fade_from_bottom" }}
        name="initial"
        component={Initial}
      />
      <Screen
        options={{ animation: "fade_from_bottom" }}
        name="home"
        component={Home}
      />
    </Navigator>
  );
}
