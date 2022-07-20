import { useNavigation } from "@react-navigation/native";
import { VStack, Heading, Image } from "native-base";
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
    <VStack flex={1} alignItems="center" bg="rose.900" pt={"48"} p={8}>
      <Image
        source={require("../../assets/img/6.png")}
        alt="Alternate Text"
        size="2xl"
      />
      <Heading size={"xl"} color={"gray.300"}>
        {" "}
        Remeber all bigest winners
      </Heading>

      <Heading color="white" fontSize={"3xl"} my={6}>
        World Cup Champions
      </Heading>

      <Button title={"Go"} mb={6} w="2/3" onPress={handleGo} />
      {showLoading ? <Loading title="Loading winners" /> : null}
    </VStack>
  );
}
