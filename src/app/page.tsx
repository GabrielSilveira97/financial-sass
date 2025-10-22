import LoginForm from "@/components/common/LoginForm";

export default function Home() {
   return (
      <main className="grid grid-cols-1 lg:grid-cols-2 justify-center items-center">
         <section className="lg:flex justify-center items-center h-screen hidden bg-slate-100">
            <h1 className="font-bold text-4xl">Financial Logo</h1>
         </section>
         <section className="flex justify-center items-center h-screen">
            <LoginForm />
         </section>
      </main>
   );
}
