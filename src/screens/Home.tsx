import AsyncStorage from "@react-native-async-storage/async-storage";
import { VStack, ScrollView, Box, Center, FlatList } from "native-base";
import { useEffect, useState } from "react";
import { Header } from "../components/Header";
import { ChampionCard } from "../components/ChampionCard";
import { IWinner } from "../entities/winner";
import { ChatTeardropText } from "phosphor-react-native";

export function Home() {
  const [list, setList] = useState<IWinner[]>([
    { country: "Who?", year: 2022 },
  ]);

  const getWinners = async () => {
    const jsonValue = await AsyncStorage.getItem("@winners");

    const winners = jsonValue != null ? JSON.parse(jsonValue) : null;
    console.log("oi");
    setList((prev) => [...prev, ...winners]);
  };

  useEffect(() => {
    getWinners();
  }, []);

  return (
    <VStack flex={1} alignItems="center">
      <Header title="Champions List" />

      <Box bg={"gray.200"} flex={1} w={"full"} p={6}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 100 }}
        >
          {list.map((item) => (
            <ChampionCard key={item.year} data={item} />
          ))}
        </ScrollView>
      </Box>
    </VStack>
  );
}
