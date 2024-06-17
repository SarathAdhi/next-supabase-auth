"use client";

import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { InputForm } from "@/components/ui/input/input-form";
import { createClient } from "@/utils/supabase/client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { z } from "zod";

export const loginFormSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8, {
    message: "Password must be at least 8 characters.",
  }),
});

type LoginValuesType = z.infer<typeof loginFormSchema>;

const defaultValues: LoginValuesType = {
  email: "",
  password: "",
};

const LoginForm = () => {
  const router = useRouter();

  const supabase = createClient();

  const form = useForm<LoginValuesType>({
    resolver: zodResolver(loginFormSchema),
    defaultValues,
  });

  async function handleLogin(values: LoginValuesType) {
    const { error } = await supabase.auth.signInWithPassword(values);

    if (error) return toast.error(error.message);

    toast.success("Login successful");

    router.refresh();
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(handleLogin)}
        className="w-full flex flex-col gap-y-4"
      >
        <InputForm
          label="Email"
          name="email"
          placeholder="hello@sarathadhi.com"
          description=""
          required
        />

        <InputForm
          type="password"
          label="Password"
          name="password"
          description=""
          required
        />

        <Button>Login</Button>
      </form>
    </Form>
  );
};

export default LoginForm;
