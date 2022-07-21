import { Heading, Spinner, ISpinnerProps } from "native-base";

type Props = ISpinnerProps & {
  title?: string;
};

export function Loading({ title, ...rest }: Props) {
  return (
    <>
      <Spinner color="white" size={"lg"} {...rest} />
      <Heading color={"gray.400"} fontSize={"md"}>
        {title}
      </Heading>
    </>
  );
}
