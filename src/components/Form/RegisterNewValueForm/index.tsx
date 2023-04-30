import { StyledForm } from "./style";
import { newValueSchema } from "../../../schemas/newValueSchema";
import Input from "../../../fragments/Input";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useTravelContext } from "../../../providers/TravelContext";

export interface IRegisterNewValueForm {
  month: string;
  value: number;
}

export const RegisterNewValueForm = () => {
  const { addNewValue } = useTravelContext();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<IRegisterNewValueForm>({
    resolver: zodResolver(newValueSchema),
  });

  const submit: SubmitHandler<IRegisterNewValueForm> = (formData) => {
    addNewValue(formData);
  };

  return (
    <>
      <StyledForm onSubmit={handleSubmit(submit)}>
        <Input
          error={errors.month?.message}
          label="Mês"
          id="month"
          type="text"
          placeholder="Digite aqui o mês"
          {...register("month")}
        />
        <Input
          error={errors.value?.message}
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
