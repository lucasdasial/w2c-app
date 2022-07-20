import { useNavigation } from "@react-navigation/native";
import { VStack, Heading, Image } from "native-base";
import { Button } from "../components/Button";
import { Input } from "../components/Input";

export function Initial() {
  const navigation = useNavigation();

  function handleGo() {
    navigation.navigate("home");
  }
  return (
    <VStack flex={1} alignItems="center" bg="rose.900" pt={"48"} p={8}>
      <Image
        source={require("../../assets/img/6.png")}
        alt="Alternate Text"
        size="2xl"
      />
      <Heading size={"xl"}> Remeber all bigest winners</Heading>

      <Heading color="white" fontSize={"3xl"} my={6}>
        World Cup Champions
      </Heading>

      <Button title={"Go"} mb={6} w="2/3" onPress={handleGo} />
    </VStack>
  );
}
