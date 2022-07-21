import { useNavigation } from "@react-navigation/native";
import { VStack, Heading, Image, useTheme, useToast } from "native-base";
import { useState } from "react";
import { Button } from "../components/Button";
import { Loading } from "../components/LoadingSpinner";
import { getWinnersData } from "../services/http/winners.services";

import { setOnStoreData } from "../Utils/setAsyncStore";

export function Initial() {
  const navigation = useNavigation();
  const [showLoading, setShowLoading] = useState<boolean>(false);
  const toast = useToast();

  // need to turn into a promise to be able to navigate
  async function handleGo() {
    setShowLoading(true);

    try {
      //this method return json string
      const data = await getWinnersData();
      setOnStoreData("@winners", data);
      setShowLoading(false);
      navigation.navigate("home");
    } catch (error) {
      setShowLoading(false);
      toast.show({
        description: "Unable to load data, please reload app again.",
        title: "Ops!",
        duration: 6000,
        placement: "top",
        color: "cyan.500",
        bg: "amber.500",
      });
    }
  }
  return (
    <VStack
      flex={1}
      alignItems="center"
      justifyContent={"center"}
      bg="darkBlue.800"
      p={8}
    >
      <Image
        source={require("../../assets/img/bola.png")}
        alt="Alternate Text"
        size="xl"
        mb={8}
      />

      {/* <Trophy color={colors.amber[500]} size="40" /> */}
      <Heading color="cyan.300" fontSize={"3xl"} mt={2}>
        World cup Champions
      </Heading>
      <Heading size={"xl"} color={"text.300"} textAlign="center">
        Remeber all bigest winners
      </Heading>

      <Button
        title={"Go"}
        bg={"amber.500"}
        mt={8}
        mb={4}
        w="2/3"
        onPress={handleGo}
      />
      {showLoading ? <Loading title="Loading winners" /> : null}
    </VStack>
  );
}
