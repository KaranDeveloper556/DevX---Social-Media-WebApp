import * as z from "zod";

export const SignUpValidation = z.object({
  name: z.string().min(2, { message: 'Too Short.' }),
  username: z.string().min(2, { message: 'Too Short.' }).max(15, { message: "Too Big." }),
  email: z.string().email(),
  password: z.string().min(6, { message: 'Password must be 6 characters long.' })
});

export const SignInValidation = z.object({
  email: z.string().email(),
  password: z.string().min(6, { message: 'Password must be 6 characters long.' })
});