import { WrapperProps } from "./types/wrapper";

export function CenterWrapper({ children, ...rest }: WrapperProps) {
  return (
    <div {...rest}>{children}</div>
  )
}