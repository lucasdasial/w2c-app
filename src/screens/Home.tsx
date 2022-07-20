import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import { VStack } from "native-base";
import { useState } from "react";
import { Header } from "../components/Header";
import { IWinner } from "../entities/winner";

export function Home() {
  const navigation = useNavigation();
  const [list, setList] = useState([]);

  const getWinners = async () => {
    const jsonValue = await AsyncStorage.getItem("@winners");

    const win = jsonValue != null ? JSON.parse(jsonValue) : null;

    console.log(win);
  };

  getWinners();

  return (
    <VStack flex={1} alignItems="center" bg="rose.900">
      <Header title="Wellcome" />
    </VStack>
  );
}
