import { Button as NbButton, IButtonProps, Heading } from "native-base";

type Props = IButtonProps & {
  title: string;
};

export function Button({ title, ...rest }: Props) {
  return (
    <NbButton
      w={"full"}
      size="lg"
      rounded={"sm"}
      
      {...rest}
    >
      <Heading color="white" fontSize="lg">
        {title}
      </Heading>
    </NbButton>
  );
}