import { IntentionalCard } from "@/components/functional";

export default function Home() {
  const intentions = [
    { title: "Vender", href: "/seller" },
    { title: "Clientes", href: "/clients" },
    { title: "Estoque", href: "/products" },
  ];
  return (
    <div className="flex flex-col justify-center  w-screen items-center space-x-2">
      <h1>Dashboard</h1>
      <p className="text-xl">Total: {1000.0}</p>
      <section className="flex flex-row justify-center items-center gap-4 py-4">
        {intentions.map((intention) => (
          <IntentionalCard
            key={intention.title}
            title={intention.title}
            href={intention.href}
          />
        ))}
      </section>
    </div>
  );
}
