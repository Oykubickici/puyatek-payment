// layout.tsx veya layout/index.tsx
import { Outlet } from "react-router-dom";
import { Toaster } from "@/components/ui/sonner";

export default function Layout() {
  return (
    <html lang="en">
      <head />
      <body>
        <main>
          <Outlet />
        </main>
        <Toaster />
      </body>
    </html>
  );
}
