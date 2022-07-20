import { VStack, Heading, Image } from "native-base";

export function Hero() {
  return (
    <>
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
    </>
  );
}
