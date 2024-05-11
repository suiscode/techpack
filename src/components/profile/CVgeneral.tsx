"use client";
import CVWrapper from "./CVWrapper";
import { useTransition } from "react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "../../components/ui/form";
import React, { useState } from "react";
import * as z from "zod";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { RegisterSchema } from "../../lib/schema";
import { Input } from "../../components/ui/input";
import { useToast } from "@/components/ui/use-toast";
import axios from "axios";

const CVgeneral = () => {
  //   const [error, setError] = useState<string | undefined>("");
  //   const [success, setSuccess] = useState<string | undefined>("");
  //   const [isPending, startTransition] = useTransition();
  //   const { toast } = useToast();

  //   const form = useForm<z.infer<typeof RegisterSchema>>({
  //     resolver: zodResolver(RegisterSchema),
  //     defaultValues: {
  //       email: "",
  //       password: "",
  //     },
  //   });

  //   const onSubmit = (values: z.infer<typeof RegisterSchema>) => {
  //     setSuccess("");
  //     setError("");
  //     startTransition(async () => {
  //       try {
  //         const res = await axios.post("/api/auth/register", values);
  //         setSuccess(res.data.success);
  //         toast({
  //           variant: "default",
  //           title: "Successfully ",
  //           description: "Signed Up",
  //         });
  //       } catch (e: any) {
  //         console.log(e);

  //         toast({
  //           variant: "destructive",
  //           title: "Error Occured",
  //           description: e.response.data.error,
  //         });
  //       }
  //     });
  //   };

  return (
    <div>
      <CVWrapper label={"General"}>
        <h1>h1</h1>
      </CVWrapper>
    </div>
  );
};

export default CVgeneral;
