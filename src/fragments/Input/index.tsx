import { ForwardedRef, InputHTMLAttributes, forwardRef } from "react";
import { StyledFieldset } from "./style";

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

const Input = forwardRef(
  (
    { type, label, id, error, ...rest }: IInputProps,
    ref: ForwardedRef<HTMLInputElement>
  ) => {
    return (
      <div>
        <fieldset>
          <input type={type} ref={ref} id={id} {...rest} />
          <label htmlFor={id}>{label}</label>
        </fieldset>
      </div>
    );
  }
);

export default Input;
