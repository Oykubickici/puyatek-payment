import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Link } from "react-router-dom";

export function NewPasswordForm({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"form">) {
  return (
    <form className={cn("flex flex-col gap-6", className)} {...props}>
      <div className="flex flex-col items-center gap-2 text-center">
        <h1 className="text-2xl font-bold">Parolanızı yenileyin</h1>
      </div>
      <div className="grid gap-6">
        <div className="grid gap-2">
          <div className="flex items-center">
            <Label htmlFor="password">Yeni Şifre</Label>
          </div>
          <Input id="password" type="password" required />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="address">Yeni Şifre Tekrar</Label>
          <Input id="adress" type="text" required />
        </div>
        <Button type="submit" className="w-full">
          Onayla
        </Button>
      
       
      </div>
      <div className="text-center text-sm">
        Zaten bir hesabınız var mı? {""}
        <Link
            to="/"
            className="underline underline-offset-4"
          >
            Giriş Yap
          </Link>
      </div>
    </form>
  )
}
