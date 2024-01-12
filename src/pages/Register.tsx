import { useState } from "react";
import { Button, Collapsible } from "@/components/ui";
import { useLocation } from "react-router-dom";
import { CsvInput } from "@/components/functional";
import { useStore } from "@/store/infra/zustand/store";
import { useToast } from "@/components/ui";
import { ArrowDown, ArrowUp } from "@phosphor-icons/react";

export default function RegisterPage() {
  const location = useLocation();
  const { toast } = useToast();

  const [collapsibleCSV, setCollapsibleCSV] = useState(false);
  const [collapsibleForm, setCollapsibleForm] = useState<boolean>(false);

  const [registerType, setRegisterType] = useState(
    location.state.type || "client"
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
    <div>
      {console.info(hub)}
      <h1>Cadastro</h1>
      <Button type="button" onClick={handleSelectType} name="client">
        Clientes
      </Button>
      <Button type="button" onClick={handleSelectType} name="product">
        Produtos
      </Button>
      {registerType === "client" ? (
        <div>
          <h5>Registro de cliente</h5>
          <Collapsible.Collapsible
            className="w-full flex flex-col justify-center items-center"
            open={collapsibleCSV}
            onOpenChange={setCollapsibleCSV}
          >
            <Collapsible.CollapsibleTrigger asChild>
              <Button variant="ghost" size="sm" className="my-6 w-full">
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
            className="w-full flex flex-col justify-center items-center"
            open={collapsibleForm}
            onOpenChange={setCollapsibleForm}
          >
            <Collapsible.CollapsibleTrigger asChild>
              <Button variant="ghost" size="sm" className="my-6 w-full">
                Cadastro Manual
                {collapsibleForm ? (
                  <ArrowUp size={18} className="mx-2" />
                ) : (
                  <ArrowDown size={18} className="mx-2" />
                )}
              </Button>
            </Collapsible.CollapsibleTrigger>
            <Collapsible.CollapsibleContent>
              FORMULARIO
            </Collapsible.CollapsibleContent>
          </Collapsible.Collapsible>
        </div>
      ) : (
        <div className="p-4">
          <h1>Registro de produto</h1>
          <div>
            <h6>Cadastro por CSV</h6>
            <CsvInput
              onSuccess={handleOnSuccess}
              onError={() => console.log("erro")}
              isValid={() => true}
              parseData={(data) =>
                data.map((item) => ({ name: item[0], email: item[1] }))
              }
            />
          </div>
        </div>
      )}
    </div>
  );
}
