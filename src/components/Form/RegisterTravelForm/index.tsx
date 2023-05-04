import { zodResolver } from "@hookform/resolvers/zod";
import { useContext, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import Input from "../../../fragments/Input";
import { TravelContext } from "../../../providers/TravelContext";
import { travelSchema, TTravelSchema } from "../../../schemas/travelSchema";
import { StyledFormModalBox } from "./style";

/*

accommodation: "4"
food: "1"
initialValue: "1"
local: "recife"
month_of_travel: "3"
other_expenses: "6"
shopping: "2"
transport: "5"

*/

// interface IFormTravelRegister {
//   accommodation: string;
//   food: string;
//   initialValue: string;
//   local: string;
//   month_of_travel: string;
//   other_expenses: string;
//   shopping: string;
//   transport: string;
// }

export const RegisterTravelForm = () => {
  const [loading, setLoading] = useState(false);
  const { newTravel } = useContext(TravelContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TTravelSchema>({
    resolver: zodResolver(travelSchema),
  });

  const submit: SubmitHandler<TTravelSchema> = (formData) => {
    //console.log(formData);
    newTravel(formData);
    //setGuardar(travelForm);
    //setTeste("mudei");

    //console.log(travelForm);
    //setLoading(true);
  };

  //console.log(guardar);
  //console.log("teste:", teste);
  //error={errors.local}

  return (
    <StyledFormModalBox onSubmit={handleSubmit(submit)}>
      <div className="divInputs">
        <div className="inputsRight">
          <Input
            type="text"
            id="local"
            label="Destino"
            placeholder="Digite aqui o destino da viagem"
            disabled={loading}
            error={errors.local}
            {...register("local")}
          />

          <Input
            type="number"
            id="initialValue"
            label="Valor inicial"
            placeholder="Digite aqui seu valor inicial"
            disabled={loading}
            error={errors.initialValue}
            {...register("initialValue")}
          />

          <Input
            type="number"
            id="food"
            label="Alimentação"
            placeholder="Digite aqui  valor o valor da alimentação"
            disabled={loading}
            error={errors.food}
            {...register("food")}
          />

          <Input
            type="number"
            id="shopping"
            label="Compras"
            placeholder="Digite aqui  valor o valor da alimentação"
            disabled={loading}
            error={errors.shopping}
            {...register("shopping")}
          />
        </div>
        <div className="inputsLeft">
          <Input
            type="number"
            id="month_of_travel"
            label="Quantos meses até a viagem"
            placeholder="Digite aqui quantos meses faltam"
            disabled={loading}
            error={errors.month_of_travel}
            {...register("month_of_travel")}
          />

          <Input
            type="number"
            id="accommodation"
            label="Hospedagem"
            placeholder="Digite aqui o custo da hospedagem"
            disabled={loading}
            error={errors.accommodation}
            {...register("accommodation")}
          />

          <Input
            type="number"
            id="transport"
            label="Transporte"
            placeholder="Digite aqui o custo do transporte"
            disabled={loading}
            error={errors.transport}
            {...register("transport")}
          />

          <Input
            type="number"
            id="other_expenses"
            label="Outros gastos"
            placeholder="Digite aqui outros possíveis gastos"
            disabled={loading}
            error={errors.other_expenses}
            {...register("other_expenses")}
          />
        </div>
      </div>

      <div className="divButton">
        <button className="buttonSubmit" type="submit">
          {loading ? "Cadastrando..." : "Cadastrar sua primeira aventura"}
        </button>
      </div>
    </StyledFormModalBox>
  );
};
