import AsyncStorage from "@react-native-async-storage/async-storage";
import { VStack, ScrollView, Box, Center, FlatList } from "native-base";
import { useEffect, useState } from "react";
import { Header } from "../components/Header";
import { ChampionCard } from "../components/ChampionCard";
import { IWinner } from "../entities/winner";
import { Loading } from "../components/LoadingSpinner";

export function Home() {
  const [list, setList] = useState<IWinner[]>([]);
  const [showLoading, setShowLoading] = useState<boolean>(true);

  const getWinners = async () => {
    const jsonValue = await AsyncStorage.getItem("@winners");
    const winners = jsonValue != null ? JSON.parse(jsonValue) : null;
    setShowLoading(false);
    setList([{ country: "Who?", year: 2022 }, ...winners]);
  };

  useEffect(() => {
    getWinners();
  }, []);

  return (
    <VStack flex={1} alignItems="center">
      <Header title="Champions List" />

      <Box bg={"gray.200"} flex={1} w={"full"} p={6}>
        {showLoading ? <Loading /> : null}
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
