import { ForwardedRef, InputHTMLAttributes, forwardRef } from "react";
import { StyledInputContainer } from "./style";
import { FieldError } from "react-hook-form";

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: FieldError;
  type: string;
  id: string;
}

const Input = forwardRef(({ type, label, id, error, ...rest }: IInputProps, ref: ForwardedRef<HTMLInputElement>) => {
  return (
    <StyledInputContainer>
      {label ? <label>{label}</label> : null}
      <input type={type} ref={ref} id={id} {...rest} />
      {error ? <span>{error.message}</span> : null}
    </StyledInputContainer>
  );
});

export default Input;
