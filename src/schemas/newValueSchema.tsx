import { z } from "zod";
/** Campo value em string não é possível fazer o reduce por isso modifiquei para number**/
export const newValueSchema = z.object({
  month: z.string().min(1, "Campo obrigatório"),
  value: z.number().min(1, "Campo obrigatório"),
});

export type TLoginSchema = z.infer<typeof newValueSchema>;
