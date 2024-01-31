import { useState } from "react";
import { Button, Collapsible } from "@/components/ui";
import { useLocation } from "react-router-dom";
import { CsvInput, Form } from "@/components/functional";
import { useStore } from "@/store/infra/zustand/store";
import { useToast } from "@/components/ui";
import { ArrowDown, ArrowUp, HardDrives } from "@phosphor-icons/react";
import { Layout } from "@/layout/Layout";
export default function RegisterPage() {
  const location = useLocation();
  const { toast } = useToast();

  const [collapsibleCSV, setCollapsibleCSV] = useState(false);
  const [collapsibleForm, setCollapsibleForm] = useState<boolean>(false);

  const [registerType, setRegisterType] = useState(
    location?.state?.type || "client"
  );
  const { createClient, createProduct, hub } = useStore();

  const handleRegisterClient = (client) => {
    createClient(client);
  };

  const handleRegisterProduct = (product) => {
    createProduct(product);
  };

  const handleOnSuccess = (data: any) => {
    data.map((item) => {
      if (registerType === "client") {
        handleRegisterClient(item);
        toast({
          title: "Cadastro realizado",
          description: "CSV carregado com successo",
        });
        return;
      }
      handleRegisterProduct(item);
    });
    console.log(data);
  };

  const handleSelectType = (e) => {
    setRegisterType(e.target.name);
  };

  return (
    <Layout>
      <div className="w-screen h-[630px] flex justify-start flex-col p-8">
        <h1 className="self-start mb-2">
          <span className="text-2xl font-bold flex items-center">
            Cadastro <HardDrives size={24} className="ml-2" />
          </span>
        </h1>
        <div className="w-48 gap-8 flex justify-evenly mb-12">
          <Button type="button" onClick={handleSelectType} name="client">
            Clientes
          </Button>
          <Button type="button" onClick={handleSelectType} name="product">
            Produtos
          </Button>
        </div>
        <div className="flex justify-start">
          {registerType === "client" ? (
            <div className="w-full rounded-xl border bg-card text-card-foreground shadow min-w-[600px] h-[400px] p-4">
              <h5>Registro de cliente</h5>
              <div className="flex flex-row justify-evenly   ">
                <Collapsible.Collapsible
                  open={collapsibleCSV}
                  onOpenChange={setCollapsibleCSV}
                >
                  <Collapsible.CollapsibleTrigger asChild>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="my-6 w-full font-semibold"
                    >
                      Cadastro por CSV
                      {collapsibleCSV ? (
                        <ArrowUp size={18} className="mx-2" />
                      ) : (
                        <ArrowDown size={18} className="mx-2" />
                      )}
                    </Button>
                  </Collapsible.CollapsibleTrigger>
                  <Collapsible.CollapsibleContent>
                    <CsvInput
                      onSuccess={handleOnSuccess}
                      onError={() => console.log("erro")}
                      isValid={() => true}
                      parseData={(data) =>
                        data.map((item) => ({ name: item[0], email: item[1] }))
                      }
                    />
                  </Collapsible.CollapsibleContent>
                </Collapsible.Collapsible>
                <Collapsible.Collapsible
                  open={collapsibleForm}
                  onOpenChange={setCollapsibleForm}
                >
                  <Collapsible.CollapsibleTrigger asChild>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="my-6 w-full font-semibold"
                    >
                      Cadastro Manual
                      {collapsibleForm ? (
                        <ArrowUp size={18} className="mx-2" />
                      ) : (
                        <ArrowDown size={18} className="mx-2" />
                      )}
                    </Button>
                  </Collapsible.CollapsibleTrigger>
                  <Collapsible.CollapsibleContent>
                    <Form.ClientRegisterForm />
                  </Collapsible.CollapsibleContent>
                </Collapsible.Collapsible>
              </div>
            </div>
          ) : (
            <div className="w-auto">
              <h5>Registro de produto</h5>
              <Collapsible.Collapsible
                open={collapsibleCSV}
                onOpenChange={setCollapsibleCSV}
              >
                <Collapsible.CollapsibleTrigger asChild>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="my-6 w-full font-semibold "
                  >
                    Cadastro por CSV
                    {collapsibleCSV ? (
                      <ArrowUp size={18} className="mx-2" />
                    ) : (
                      <ArrowDown size={18} className="mx-2" />
                    )}
                  </Button>
                </Collapsible.CollapsibleTrigger>
                <Collapsible.CollapsibleContent>
                  <CsvInput
                    onSuccess={handleOnSuccess}
                    onError={() => console.log("erro")}
                    isValid={() => true}
                    parseData={(data) =>
                      data.map((item) => ({ name: item[0], email: item[1] }))
                    }
                  />
                </Collapsible.CollapsibleContent>
              </Collapsible.Collapsible>
              <Collapsible.Collapsible
                open={collapsibleForm}
                onOpenChange={setCollapsibleForm}
              >
                <Collapsible.CollapsibleTrigger asChild>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="my-6 w-full font-semibold"
                  >
                    Cadastro Manual
                    {collapsibleForm ? (
                      <ArrowUp size={18} className="mx-2" />
                    ) : (
                      <ArrowDown size={18} className="mx-2" />
                    )}
                  </Button>
                </Collapsible.CollapsibleTrigger>
                <Collapsible.CollapsibleContent>
                  <Form.ProductRegisterForm />
                </Collapsible.CollapsibleContent>
              </Collapsible.Collapsible>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
}
