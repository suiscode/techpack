"use client";
import React, { useState } from "react";
import * as z from "zod";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { RegisterSchema } from "../../../lib/schema";
import { Input } from "../../../components/ui/input";
import { useTransition } from "react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "../../../components/ui/form";
import { Button } from "../../../components/ui/button";
import { FormError } from "../../../lib/form-error";
import { FormSuccess } from "../../../lib/form-success";
import axios from "axios";
import ButtonAuth from "@/components/auth/ButtonOauth";
import Wrapper from "../Wrapper";
import { useToast } from "@/components/ui/use-toast";

export default function RegisterForm() {
  const [error, setError] = useState<string | undefined>("");
  const [success, setSuccess] = useState<string | undefined>("");
  const [isPending, startTransition] = useTransition();
  const { toast } = useToast();

  const form = useForm<z.infer<typeof RegisterSchema>>({
    resolver: zodResolver(RegisterSchema),
    defaultValues: {
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit = (values: z.infer<typeof RegisterSchema>) => {
    setSuccess("");
    setError("");
    startTransition(async () => {
      try {
        const res = await axios.post("/api/auth/register", values);
        setSuccess(res.data.success);
        toast({
          variant: "default",
          title: "Successfully ",
          description: "Signed Up",
        });
      } catch (e: any) {
        console.log(e);

        toast({
          variant: "destructive",
          title: "Error Occured",
          description: e.response.data.error,
        });
      }
    });
  };

  return (
    <Wrapper label={"Бүртгүүлэх"}>
      <Form {...form}>
        <form
          className="space-y-6 w-full"
          onSubmit={form.handleSubmit(onSubmit)}
        >
          <div className="space-y-2 flex flex-col  gap-5 text-primary ">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      disabled={isPending}
                      {...field}
                      placeholder="И-мэйл"
                      type="email"
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
                  <FormControl>
                    <Input
                      disabled={isPending}
                      {...field}
                      placeholder="Нууц үг"
                      type="password"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="confirmPassword"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      disabled={isPending}
                      {...field}
                      placeholder="Нууц үг давтах"
                      type="password"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <FormError message={error} />
          <FormSuccess message={success} />
          <Button className="w-full" type="submit" disabled={isPending}>
            Бүртгүүлэх
          </Button>
        </form>
      </Form>
      <ButtonAuth />
    </Wrapper>
  );
}
