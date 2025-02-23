import { Link } from "react-router-dom";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

import Loader from "@/components/shared/Loader";
import { SignUpValidation } from "@/lib/validation";
import { toast } from "react-toastify";
import {
  useCreateUserAccountMutation,
  useSignInAccount,
} from "@/lib/react-query/quiresAndMutation";

const SignUpForm = () => {
  // Toasts for Notification
  const SignInFailed = () => toast("Sign Up Failed");

  const { mutateAsync: createUserAccount, isLoading } =
    useCreateUserAccountMutation();

  const { mutateAsync: signInAccount, isLoading: isSigningIn } =
    useSignInAccount();

  const form = useForm<z.infer<typeof SignUpValidation>>({
    resolver: zodResolver(SignUpValidation),
    defaultValues: {
      name: "",
      username: "",
      email: "",
      password: "",
    },
  });

  //On Submit fn
  const onSubmit = async (values: z.infer<typeof SignUpValidation>) => {
    const newUser = await createUserAccount(values);

    if (!newUser) {
      return SignInFailed();
    }

    const session = await signInAccount({
      email: values.email,
      password: values.password,
    });

    if (!session) {
      return SignInFailed();
    }
  };

  return (
    <Form {...form}>
      <div className="formHeader relative flex items-center flex-col">
        <img
          src="/assets/kdevelops-logo.png"
          alt="logo"
          className="w-[14rem] mb-2"
        />
        <p className="one-heading text-2xl mb-2 font-bold max-w-[24rem] text-center">
          Create New Account
        </p>
        <p className="sub-heading text-sm mb-4 max-w-[24rem] opacity-60 text-center">
          Join our community today and start exploring new possibilities -
          Kdevelopes
        </p>
      </div>

      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col gap-4 capitalize w-full max-w-[18rem]"
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>name</FormLabel>
              <FormControl>
                <Input
                  type="text"
                  placeholder="name"
                  className="shad-input"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input
                  type="text"
                  placeholder="username"
                  className="shad-input"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>email</FormLabel>
              <FormControl>
                <Input
                  type="text"
                  placeholder="email"
                  className="shad-input"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>password</FormLabel>
              <FormControl>
                <Input
                  type="password"
                  placeholder="password"
                  className="shad-input"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" className="shad-button_primary">
          {isLoading ? (
            <div className="button_loading flex justify-center items-center gap-2 flex-row">
              <Loader /> Loading...
            </div>
          ) : (
            "Sign Up"
          )}
        </Button>
      </form>

      <p className="navigation_to_login mt-4">
        Already have an account?{" "}
        <Link to="/sign-in" className=" text-blue-600">
          Log in
        </Link>
      </p>
    </Form>
  );
};

export default SignUpForm;
