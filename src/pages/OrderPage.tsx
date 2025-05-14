import { OrderForm } from "../layouts/order-form"; 



  export default function ForgotPasswordPage() {
    return (
      <div className="relative min-h-screen w-full">
        <div className="relative z-10 flex items-center justify-center min-h-screen bg-white p-6">
          <div className="w-full max-w-md bg-muted rounded-2xl p-8 shadow-lg">
            <OrderForm />
          </div>
        </div>
      </div>
    );
}