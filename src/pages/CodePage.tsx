import { CodeForm } from "../layouts/code-form"; 



  export default function ForgotPasswordPage() {
    return (
      <div className="relative min-h-screen w-full">
        <img
          src="https://images.unsplash.com/photo-1746415808837-86b884a73d18"
          alt="Background"
          className="absolute inset-0 h-full w-full object-cover dark:brightness-[0.2] dark:grayscale hidden lg:block"
        />
        <div className="relative z-10 flex items-center justify-center min-h-screen bg-black/50 p-6">
          <div className="w-full max-w-md bg-muted rounded-2xl p-8 shadow-lg">
            <CodeForm />
          </div>
        </div>
      </div>
    );
  
  }