import { useNavigation } from "@react-navigation/native";
import { VStack } from "native-base";
import { Header } from "../components/Header";

export function Home() {
  const navigation = useNavigation();

  return (
    <VStack flex={1} alignItems="center" bg="rose.900">
      <Header title="Wellcome" />
    </VStack>
  );
}
