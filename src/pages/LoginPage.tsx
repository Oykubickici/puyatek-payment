import { LoginForm } from "../layouts/login-form"; 

  export default function LoginPage() {
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
            <LoginForm />
          </div>
        </div>
      </div>
    );
  }
  

/*
export default function LoginPage() {
    return (
      <div className="grid min-h-svh lg:grid-cols-2">
        <div className="flex flex-col gap-4 p-6 md:p-10 m-4 bg-muted rounded-2xl" >
          <div className="flex justify-center gap-2 md:justify-start">
            <a target="_blank" href="https://puyatek.com/index.html" className="flex items-center gap-2 font-medium">
            <img 
                  src="../public/logo.png"
                  className="h-16 w=16"
                />
            </a>
          </div>
          <div className="flex flex-1 items-center justify-center">
            <div className="w-full max-w-xs">
              <LoginForm />
             
            </div>
          </div>
        </div>
        <div className="relative hidden bg-muted lg:block">
          <img
            src="https://images.unsplash.com/photo-1746415808837-86b884a73d18"
            alt="Image"
            className="absolute inset-0 h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
          />
        </div>
      </div>
    )
  }
  */