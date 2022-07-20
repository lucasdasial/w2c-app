import { VStack, Heading, Image } from "native-base";
import { Button } from "../components/Button";
import { Input } from "../components/Input";

export function Login() {
  return (
    <VStack flex={1} alignItems="center" pt={"32"} p={8}>
      <Heading color="primary.600" fontSize={"2xl"} mb={6}>
        SignIn
      </Heading>
      <Input placeholder="Login" />
      <Input placeholder="Password" />

      <Button title={"Entrar"} mb={6} />
      <Image
        source={require("../../assets/svg/trofeu2.svg")}
        alt="Alternate Text"
        size="2xl"
      />
    </VStack>
  );
}
