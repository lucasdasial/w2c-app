import { Heading, Spinner } from "native-base";

type Props = {
  title?: string;
};

export function Loading({ title }: Props) {
  return (
    <>
      <Spinner color="white" size={"lg"} />
      <Heading color={"gray.400"} fontSize={"md"}>
        {title}
      </Heading>
    </>
  );
}
