import {
  Box,
  Circle,
  HStack,
  Text,
  useTheme,
  VStack,
  Pressable,
  IPressableProps,
} from "native-base";
import { Trophy } from "phosphor-react-native";
import { IWinner } from "../entities/winner";

type Props = IPressableProps & {
  data: IWinner;
};

export function ChampionCard({ data, ...rest }: Props) {
  const { colors } = useTheme();

  return (
    <Pressable {...rest}>
      <HStack
        bg="white"
        w={"full"}
        mb={4}
        alignItems="center"
        justifyContent="space-between"
        rounded="sm"
        overflow="hidden"
      >
        <VStack flex={1} my={5} ml={5}>
          <Text color="cyan.700" fontSize="md" fontWeight={500}>
            {data.year} Winner
          </Text>
          <HStack alignItems="center">
            <Trophy color={colors.yellow[500]} size={36} />
            <Text color="darkBlue.700" fontSize="xl" fontWeight={500} ml={2}>
              {data.country}
            </Text>
          </HStack>
        </VStack>
      </HStack>
    </Pressable>
  );
}
