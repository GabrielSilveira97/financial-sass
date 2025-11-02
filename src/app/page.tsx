import LoginForm from "@/components/common/LoginForm";
import { CircleDollarSign } from "lucide-react";
import { Oswald } from "next/font/google";

const oswald = Oswald({
   variable: "--font-oswald-sans"
})


export default function Home() {
   return (
      <main className="grid grid-cols-1 lg:grid-cols-2 justify-center items-center">
         <section className="lg:flex justify-center items-center h-screen hidden bg-muted">
            <h1 className={`text-primary flex items-center gap-5 text-4xl font-semibold ${oswald.variable}`}><CircleDollarSign className="scale-200"/> LUME</h1>
         </section>
         <section className="flex justify-center items-center h-screen">
            <LoginForm />
         </section>
      </main>
   );
}
