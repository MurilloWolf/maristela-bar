import { IntentionalCard, Dashboard } from "@/components/functional";
import { Layout } from "@/layout/Layout";
import { Tag, ChartLineUp } from "@phosphor-icons/react";

export default function Home() {
  const intentions = [
    { title: "Vender", href: "/seller", description: "Começar a vender" },
    { title: "Clientes", href: "/clients", description: "Buscar clientes" },
    { title: "Estoque", href: "/products", description: "Buscar produtos" },
    {
      title: "Cadastros",
      href: "/Register",
      description: "Cadastrar clintes/produtos",
    },
  ];
  return (
    <Layout>
      <div className="h-[800px] flex flex-col p-8 w-screen items-center space-x-2">
        <h1 className="self-start mb-2">
          <span className="text-2xl font-bold flex items-center">
            Dahsboard <ChartLineUp size={24} className="ml-2" />
          </span>
        </h1>
        <Dashboard className="" />
        <div className="mt-24 w-full">
          <h2>
            <span className="text-2xl font-bold flex items-center">
              Ações <Tag size={24} className="ml-2" />
            </span>
          </h2>
          <section className="flex flex-row justify-center items-center gap-4 py-4">
            {intentions.map((intention) => (
              <IntentionalCard
                key={intention.title}
                title={intention.title}
                href={intention.href}
                description={intention.description}
              />
            ))}
          </section>
        </div>
      </div>
    </Layout>
  );
}
