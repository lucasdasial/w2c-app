import { Input as NbInput, IInputProps } from "native-base";

export function Input({ ...rest }: IInputProps) {
  return <NbInput bg={"white"} mb={4} {...rest} />;
}
