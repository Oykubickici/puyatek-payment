import { cn } from "@/lib/utils"
import { Link } from "react-router-dom";

export function SuccessForm({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"form">) {
  return (
    <form className={cn("flex flex-col gap-6", className)} {...props}>
      <div className="flex flex-col items-center gap-2 text-center">
        <h1 className="text-2xl font-bold">Odeme Basariyla Tamamlandi !!!!</h1>
      </div>
      <div className="text-center text-sm">
        Cuzdan Sayfasina Geri Don<br></br>
        
        <Link
            to="/siparis-sayfasi"
            className="underline underline-offset-4"
          >
            Cuzdan
          </Link>
      </div>
    </form>
  )
}
