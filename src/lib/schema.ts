import { z } from "zod";

export const formSchema = z.object({
  firstName: z.string().min(2, "Der Vorname muss mindestens 2 Zeichen lang sein"),
  lastName: z.string().min(2, "Der Nachname muss mindestens 2 Zeichen lang sein"),
  email: z.string().email("Bitte geben Sie eine gültige E-Mail-Adresse ein"),
  phone: z.string().min(7, "Die Telefonnummer muss mindestens 7 Zeichen lang sein"),
  message: z.string().min(10, "Die Nachricht muss mindestens 10 Zeichen lang sein"),
});

export type formData = z.infer<typeof formSchema>;
