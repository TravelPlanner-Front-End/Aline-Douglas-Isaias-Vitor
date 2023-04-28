import { z } from "zod";

export const newValueSchema = z.object({
  month: z.string().min(1, "Campo obrigatório"),
  value: z.string().min(1, "Campo obrigatório"),
});

export type TLoginSchema = z.infer<typeof newValueSchema>;
