import { useNavigation } from "@react-navigation/native";
import { VStack, Heading, Image, useTheme } from "native-base";
import { useState } from "react";
import { IGetToken, IGetWinners } from "../@types/api";
import { Button } from "../components/Button";
import { Loading } from "../components/LoadingSpinner";
import { api } from "../plugins/axios";
import { setOnStoreData } from "../Utils/setAsyncStore";

export function Initial() {
  const navigation = useNavigation();
  const [showLoading, setShowLoading] = useState<boolean>(false);

  async function getData() {
    setShowLoading(true);
    //getting api token
    await api
      .post<IGetToken>("/login", {
        email: "foo@bar.com",
        password: "secret",
      })
      // getting data winners
      .then(async (res) => {
        const response = await api.get<IGetWinners>("/winners", {
          headers: {
            Authorization: `Bearer ${res.data.Token}`,
          },
        });

        const jsonWinners = JSON.stringify(response.data.winners);
        setOnStoreData("@winners", jsonWinners);
        setShowLoading(false);
      });
  }

  // need to turn into a promise to be able to navigate
  async function handleGo() {
    await getData();
    navigation.navigate("home");
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
        source={require("../../assets/img/bola-square.png")}
        alt="Alternate Text"
        size="xl"
        mb={8}
      />

      {/* <Trophy color={colors.amber[500]} size="40" /> */}
      <Heading color="cyan.300" fontSize={"3xl"} mt={2}>
        World cup Champions
      </Heading>
      <Heading size={"xl"} color={"text.300"}>
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
