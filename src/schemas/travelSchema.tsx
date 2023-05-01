import { z } from "zod";

export const travelSchema = z.object({
  local: z.string().min(1, "Campo obrigatório"),
  months: z.string().min(1, "Campo obrigatório"),
  initialValue: z.string().min(1, "Campo obrigatório"),
  tours: z.string().min(1, "Campo obrigatório"),
  accommodation: z.string().min(1, "Campo obrigatório"),
  food: z.string().min(1, "Campo obrigatório"),
  transport: z.string().min(1, "Campo obrigatório"),
  shopping: z.string().min(1, "Campo obrigatório"),
  others: z.string().min(1, "Campo obrigatório"),
});

export type TTravelSchema = z.infer<typeof travelSchema>;
