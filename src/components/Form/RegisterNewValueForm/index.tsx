import { StyledForm } from "./style";
import { TNewValueSchema, newValueSchema } from "../../../schemas/newValueSchema";
import Input from "../../../fragments/Input";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useContext } from "react";
import { TravelContext } from "../../../providers/TravelContext";
// import { useTravelContext } from "../../../providers/TravelContext";

export interface IRegisterNewValueForm {
  month: string;
  value: number;
}

export const RegisterNewValueForm = () => {
  const { addNewValue } = useContext(TravelContext);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<TNewValueSchema>({
    resolver: zodResolver(newValueSchema),
  });

  const submit: SubmitHandler<TNewValueSchema> = (formData) => {
    addNewValue(formData);
  };

  return (
    <>
      <StyledForm onSubmit={handleSubmit(submit)}>
        <Input
          error={errors.month}
          label="Mês"
          id="month"
          type="text"
          placeholder="Digite aqui o mês"
          {...register("month")}
        />
        <Input
          error={errors.value}
          label="Valor economizado"
          id="value"
          type="number"
          placeholder="Digite aqui o valor economizado"
          {...register("value")}
        />
        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Cadastrando" : "Cadastrar"}
        </button>
      </StyledForm>
    </>
  );
};
