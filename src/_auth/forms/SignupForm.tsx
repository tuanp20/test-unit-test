import { Button } from "../../components/ui/button";
import React from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { SignupValidation } from "../../lib/validation";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../../components/ui/form";
import { Input } from "../../components/ui/input";
import Loader from "../../components/shared/Loader";
import { Link } from "react-router-dom";
import { createUserAccount } from "../../lib/appwrite/api";
import { useToast } from "../../components/ui/use-toast";

const SignupForm = () => {
  const isLoading = false;
  const { toast } = useToast();
  const form = useForm<z.infer<typeof SignupValidation>>({
    resolver: zodResolver(SignupValidation),
    defaultValues: {
      name: "",
      username: "",
      email: "",
      password: "",
    },
  });

  const obSubmit = async (values: z.infer<typeof SignupValidation>) => {
    const newUser = await createUserAccount(values);
    if (!newUser) {
      return  toast({
        title: "Sign up failed. Please try again."
      })
    }
    // const session = await signInAccount()
  };

  return (
    <div>
      <Form {...form}>
        <div className="sm:w420 flex-center flex-col">
          <img src="/assets/images/logo.svg" alt="logo" />
          <h2 className="h3-bold md:h2-bold pt-5 sm:pt-12">
            Create a new account
          </h2>
          <p className="text-light-3 small-medium md:base-regular mt-2">
            To use TP, please enter your details
          </p>

          <form
            onSubmit={form.handleSubmit(obSubmit)}
            className="flex flex-col gap-5 w-full mt-4"
          >
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input type="text" className="shad-input" {...field} />
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
                  <FormLabel>User Name</FormLabel>
                  <FormControl>
                    <Input type="text" className="shad-input" {...field} />
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
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input type="email" className="shad-input" {...field} />
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
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input type="password" className="shad-input" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" className="shad-button_primary">
              {isLoading ? (
                <div className="flex-center gap-2">
                  <Loader /> Loading...
                </div>
              ) : (
                "Sign up"
              )}
            </Button>
            <p className="text-sm text-slate-200 text-center mt-2">
              Already have an account?
              <Link to={"/sign-in"} className="text-violet-500 text-sm ml-1">
                Log in
              </Link>
            </p>
          </form>
        </div>
      </Form>
    </div>
  );
};

export default SignupForm;
