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
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
//import { isAtLeast18 } from "@/lib/age-controller";


const formSchema = z.object({
  name: z.string().min(2, { message: "Adiniz en az iki harfli olmali" }),
  surname: z.string().min(2, { message: "Soyadiniz en az iki harfli olmali" }),
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
  
  birthdate: z
    .date({
      required_error: "Doğum tarihi zorunludur",
      invalid_type_error: "Geçerli bir tarih giriniz",
    }),
    // .refine(isAtLeast18, {
    //   message: "En az 18 yaşında olmalısınız",
    // }),
  address: z
    .string()
    .min(10, { message: "En az 2 karakter olabilir" })
    .max(50, { message: "Adresiniz maksimum 50 karakter olabilir" }),
});

export function SignUpForm({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"form">) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "oyku",
      surname: "bickici",
      email: "oykudogg1@gmail.com",
      password: "Oykubcikakd",
      birthdate: undefined,
      address: "hamidiye mah demirbdak sit ikinci etap",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log("Form submitted successfully");
    console.log(values.name);
    console.log(values.surname);
    console.log(values.email);
    console.log(values.password);
    console.log(values.birthdate);
    console.log(values.address);

  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className={cn("flex flex-col gap-6", className)}
        {...props}
      >
        <div className="flex flex-col items-center gap-2 text-center">
          <h1 className="text-2xl font-bold">Kayıt Olun</h1>
          <p className="text-balance text-sm text-muted-foreground">
            Zaten bir hesapınız yoksa kayıt olun
          </p>
        </div>
        <div className="grid gap-3">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <div className="grid gap-2"></div>
                <FormLabel>Ad</FormLabel>
                <FormControl>
                  <Input type="text" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="surname"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Soyad</FormLabel>
                <FormControl>
                  <Input type="text" {...field} />
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
                <div className="grid gap-2"></div>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="@example.com" type="email" {...field} />
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
                <div className="grid gap-2"></div>
                <FormLabel>Sifre</FormLabel>
                <FormControl>
                  <Input type="password" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="birthdate"
            render={({ field }) => (
              <FormItem className="flex flex-col">
                <FormLabel>Doğum Tarihi</FormLabel>
                <Popover>
                  <PopoverTrigger asChild>
                    <FormControl>
                      <Button
                        variant="outline"
                        className={cn(
                          "w-full justify-start text-left font-normal",
                          !field.value && "text-muted-foreground"
                        )}
                      >
                        {field.value
                          ? field.value.toLocaleDateString("tr-TR")
                          : "Tarih seçin"}
                      </Button>
                    </FormControl>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={field.value}
                      onSelect={field.onChange}
                      disabled={(date) =>
                        date > new Date() || date < new Date("1900-01-01")
                      }
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
                <FormDescription>
                  Doğum tarihiniz yaşınızı hesaplamak için kullanılacaktır.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="address"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Adres</FormLabel>
                <FormControl>
                  <Input type="text" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit" className="w-full">
            Onayla
          </Button>
          <Button variant="outline" className="w-full">
            <FaGoogle />
            Google İle Kayıt Ol
          </Button>
          <Button variant="outline" className="w-full">
            <FaApple />
            Apple İle Kayıt Ol
          </Button>
        </div>
        <div className="text-center text-sm">
          Zaten bir hesabınız var mı? {""}
          <Link to="/" className="underline underline-offset-4">
            Giriş Yap
          </Link>
        </div>
      </form>
    </Form>
  );
}
