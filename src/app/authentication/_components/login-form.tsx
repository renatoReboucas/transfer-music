"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { authClient } from "@/lib/auth-client";

const loginSchema = z.object({
  email: z.string().email("Email inválido").min(1, "Email é obrigatório"),
  password: z.string().min(6, "Senha deve ter pelo menos 6 caracteres"),
});

type LoginFormData = z.infer<typeof loginSchema>;

export default function LoginForm() {
  const router = useRouter();
  const form = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (values: LoginFormData) => {
    await authClient.signIn.email(
      {
        email: values.email,
        password: values.password,
      },
      {
        onSuccess: () => {
          router.push("/dashboard");
        },
        onError: () => {
          toast.error("Email ou senha inválidos");
        },
      },
    );
  };
  const handleGoogleLogin = async () => {
    await authClient.signIn.social({
      provider: "google",
      callbackURL: "/dashboard",
      scopes: ["email", "profile"],
    });
  };
  const handleSpotifyLogin = async () => {
    console.log("handleSpotifyLogin");
    await authClient.signIn.social({
      provider: "spotify",
      callbackURL: "/dashboard",
      scopes: [
        "user-read-private",
        "user-read-email",
        "playlist-read-private",
        "playlist-read-collaborative",
        "user-library-read",
        "user-read-recently-played",
      ],
    });
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Entrar na sua conta</CardTitle>
        <CardDescription>
          Digite suas credenciais para acessar sua conta
        </CardDescription>
      </CardHeader>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <CardContent>
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="seu@email.com"
                      type="email"
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
                  <FormLabel>Senha</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Digite sua senha"
                      type="password"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </CardContent>
          <CardFooter>
            <div className="w-full space-y-2">
              <Button
                type="submit"
                className="w-full"
                disabled={form.formState.isSubmitting}
              >
                {form.formState.isSubmitting ? (
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                ) : (
                  "Entrar"
                )}
              </Button>
              <div className="mt-4 flex justify-center gap-4">
                <Button
                  variant="outline"
                  className="items-center"
                  type="button"
                  onClick={handleGoogleLogin}
                >
                  <svg viewBox="0 0 24 24" className="mr-2 h-4 w-4">
                    <path
                      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                      fill="#4285F4"
                    />
                    <path
                      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                      fill="#34A853"
                    />
                    <path
                      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                      fill="#FBBC05"
                    />
                    <path
                      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                      fill="#EA4335"
                    />
                  </svg>
                </Button>
                <Button
                  variant="outline"
                  className=""
                  type="button"
                  onClick={handleSpotifyLogin}
                >
                  <svg
                    height="512"
                    viewBox="0 0 176 176"
                    width="512"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g id="Layer_2" data-name="Layer 2">
                      <g id="_62.spotify" data-name="62.spotify">
                        <circle
                          id="background"
                          cx="88"
                          cy="88"
                          fill="#12c64b"
                          r="88"
                        />
                        <g id="icon" fill="#fff">
                          <path d="m119.79 120.53a5.21 5.21 0 0 1 -7.12 1.87c-13.69-8-29.5-9.28-40.36-9a100.22 100.22 0 0 0 -20.93 2.76 5.21 5.21 0 0 1 -2.76-10 108.5 108.5 0 0 1 23.08-3.16 102.33 102.33 0 0 1 22.24 1.61 75.11 75.11 0 0 1 24 8.76 5.2 5.2 0 0 1 1.85 7.16z" />
                          <path d="m129.47 100.42a6.16 6.16 0 0 1 -5.33 3.06 6.08 6.08 0 0 1 -3.11-.85c-16.21-9.47-34.93-11-47.8-10.6a118.31 118.31 0 0 0 -24.79 3.27 6.17 6.17 0 0 1 -3.27-11.89 127.88 127.88 0 0 1 27.34-3.7 119.43 119.43 0 0 1 26.35 1.91 88.81 88.81 0 0 1 28.4 10.38 6.17 6.17 0 0 1 2.21 8.42z" />
                          <path d="m142 78.39a7.55 7.55 0 0 1 -10.35 2.71c-38.54-22.52-88.53-9.13-89-9a7.57 7.57 0 1 1 -4-14.59 157.1 157.1 0 0 1 33.45-4.51 148.15 148.15 0 0 1 32.31 2.34 109.15 109.15 0 0 1 34.84 12.66 7.57 7.57 0 0 1 2.75 10.39z" />
                        </g>
                      </g>
                    </g>
                  </svg>
                </Button>
              </div>
            </div>
          </CardFooter>
        </form>
      </Form>
    </Card>
  );
}
