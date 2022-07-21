import AsyncStorage from "@react-native-async-storage/async-storage";
import { VStack, ScrollView, Box, Text, useToast } from "native-base";
import { useEffect, useState } from "react";
import { Header } from "../components/Header";
import { ChampionCard } from "../components/ChampionCard";
import { IWinner } from "../entities/winner";
import { Loading } from "../components/LoadingSpinner";
import { Warning } from "phosphor-react-native";

export function Home() {
  const [list, setList] = useState<IWinner[]>([]);
  const [showLoading, setShowLoading] = useState<boolean>(true);
  const [showErrorNotification, setShowErrorNotification] =
    useState<boolean>(false);

  const getWinners = async () => {
    const jsonValue = await AsyncStorage.getItem("@winners");
    const winners = jsonValue != null ? JSON.parse(jsonValue) : null;

    if (winners !== null) {
      setShowLoading(false);
      setList([{ country: "Who?", year: 2022 }, ...winners]);
      return;
    }
    setShowLoading(false);
    setShowErrorNotification(true);
  };

  useEffect(() => {
    getWinners();
  }, []);

  return (
    <VStack flex={1} alignItems="center">
      <Header title="Champions List" />

      <Box bg={"gray.200"} flex={1} w={"full"} p={6}>
        {showLoading ? <Loading color={"darkBlue.800"} /> : null}
        {showErrorNotification ? (
          <Box alignItems={"center"}>
            <Warning />
            <Text color={"gray.500"} textAlign={"center"}>
              Reload your app
            </Text>
          </Box>
        ) : null}
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
