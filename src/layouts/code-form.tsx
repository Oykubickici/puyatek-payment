import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { toast } from "sonner"

import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
  } from "@/components/ui/form"
  import {
    InputOTP,
    InputOTPGroup,
    InputOTPSlot,
  } from "@/components/ui/input-otp"
  
  
  const FormSchema = z.object({
    code: z.string().min(6, {
      message: "Your one-time password must be 6 characters.",
    }),
  })
  export function CodeForm({
    className,
    ...props
  }: React.ComponentPropsWithoutRef<"form">) {
    const form = useForm<z.infer<typeof FormSchema>>({
      resolver: zodResolver(FormSchema),
      defaultValues: {
        code: "",
      },
    });
  
    function onSubmit(data: z.infer<typeof FormSchema>) {
      console.log("Form verisi:", data);
      toast("Kod gönderildi", {
        description: `Kod: ${data.code}`,
      });
    }
  
    return (
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className={cn("flex flex-col gap-6", className)}
          {...props}
        >
          <FormField
            control={form.control}
            name="code"
            render={({ field }) => (
              <FormItem>
                <FormLabel>One-Time Password</FormLabel>
                <FormControl>
                  <InputOTP maxLength={6} {...field}>
                    <InputOTPGroup>
                      <InputOTPSlot index={0} />
                      <InputOTPSlot index={1} />
                      <InputOTPSlot index={2} />
                      <InputOTPSlot index={3} />
                      <InputOTPSlot index={4} />
                      <InputOTPSlot index={5} />
                    </InputOTPGroup>
                  </InputOTP>
                </FormControl>
                <FormDescription>
                  Please enter the one-time password sent to your phone.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
  
          <Button type="submit" className="w-full">
            Kod Onayla
          </Button>
        </form>
      </Form>
    );
  }
  
   
/*
export function CodeForm({
    className,
    ...props
  }: React.ComponentPropsWithoutRef<"form">) {
    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
        defaultValues: {
          code: "",
        },
      })

      function onSubmit(data: z.infer<typeof FormSchema>) {
        console.log("Form verisi:", data);
        toast("Event has been created", {
            description: "Sunday, December 03, 2023 at 9:00 AM",
          })
      }
      
    return (
        <div>
            <h1>selam</h1>
        </div>
    );
  }
    */
  
  