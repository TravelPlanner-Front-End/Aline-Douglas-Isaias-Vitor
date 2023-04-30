import { ForwardedRef, InputHTMLAttributes, forwardRef } from "react";
import { FieldError } from "react-hook-form";

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: FieldError;
  type: string;
  id: string;
}

const Input = forwardRef(({ type, label, id, error, ...rest }: IInputProps, ref: ForwardedRef<HTMLInputElement>) => {
  return (
    <div>
      {label ? <label>{label}</label> : null}
      <input type={type} ref={ref} id={id} {...rest} />
      {error ? error.message : null}
    </div>
  );
});

export default Input;
