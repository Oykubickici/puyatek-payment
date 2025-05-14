import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { FaApple, FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

const formSchema = z.object({
  email: z
    .string()
    .email({ message: "Geçerli bir mail adresi girmeniz gerekmektedir." }),
  password: z
    .string()
    .min(6, { message: "Sifre en az 6 karakter olmalı." })
    .max(50, { message: "Sifre en fazla 50 karakter olabilir." })
    .refine((val) => /^[A-ZÇĞİÖŞÜ]/.test(val.charAt(0)), {
      message: "İlk harf büyük olmalıdır.",
    }),
});

export function LoginForm({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"form">) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className={cn("flex flex-col gap-6", className)}
        {...props}
      >
        <div className="flex flex-col items-center gap-2 text-center">
          <h1 className="text-2xl font-bold">Hesabınıza Giriş Yapın</h1>
          <p className="text-balance text-sm text-muted-foreground">
            Giriş yapmak için email ve şifrenizi girin.
          </p>
        </div>
        <div className="grid gap-6">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="m@example.com" type="email" {...field} />
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
                <div className="flex items-center justify-between">
                  <FormLabel>Şifre</FormLabel>
                  <Link
                    to="/Sifremi-unuttum"
                    className="text-sm underline-offset-4 hover:underline"
                  >
                    Şifremi Unuttum
                  </Link>
                </div>
                <FormControl>
                  <Input type="password" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" className="w-full">
            Giriş Yap
          </Button>
          <Button variant="outline" className="w-full">
            <FaGoogle className="mr-2" />
            Google İle Giriş Yap
          </Button>
          <Button variant="outline" className="w-full">
            <FaApple className="mr-2" />
            Apple İle Giriş Yap
          </Button>
        </div>
        <div className="text-center text-sm">
          Hesabınız yok mu?{" "}
          <Link to="/Kayit-ol" className="underline underline-offset-4">
            Kayıt Ol
          </Link>
        </div>
        <div className="text-center text-sm">
          Yonetici misiniz?{" "}
          <Link to="/Yonetici-giris" className="underline underline-offset-4">
            Giris
          </Link>
        </div>
      </form>
    </Form>
  );
}
