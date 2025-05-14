import { NewPasswordForm } from "../layouts/newpassword-form"; 



  export default function NewPasswordPage() {
    return (
      <div className="relative min-h-screen w-full">
        <img
          src="https://images.unsplash.com/photo-1746415808837-86b884a73d18"
          alt="Background"
          className="absolute inset-0 h-full w-full object-cover dark:brightness-[0.2] dark:grayscale hidden lg:block"
        />
        <div className="relative z-10 flex items-center justify-center min-h-screen bg-black/50 p-6">
          <div className="w-full max-w-md bg-muted rounded-2xl p-8 shadow-lg">
            <div className="flex justify-center mb-6">
              <a target="_blank" href="https://puyatek.com/index.html" className="flex items-center gap-2 font-medium">
                <img 
                  src="../public/logo.png"
                  className="h-16 w-16"
                  alt="Logo"
                />
              </a>
            </div>
            <NewPasswordForm />
          </div>
        </div>
      </div>
    );
  
  }