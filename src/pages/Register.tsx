import { useState } from "react";
import { Button } from "@/components/ui";
import { useLocation } from "react-router-dom";
import { CsvInput } from "@/components/functional";
export default function RegisterPage() {
  const location = useLocation();
  const [registerType, setRegisterType] = useState(
    location.state.type || "client"
  );

  const handleSelectType = (e) => {
    setRegisterType(e.target.name);
  };

  return (
    <div>
      <h1>Cadastrar</h1>
      <Button type="button" onClick={handleSelectType} name="client">
        Clientes
      </Button>
      <Button type="button" onClick={handleSelectType} name="product">
        Produtos
      </Button>
      {registerType === "client" ? (
        <div>
          <h1>Registro de cliente</h1>
          <h6>Cadastro por CSV</h6>
          <CsvInput
            onSuccess={() => console.log("sucesso")}
            onError={() => console.log("erro")}
            isValid={() => true}
            parseData={(data) =>
              data.map((item) => ({ name: item[0], email: item[1] }))
            }
          />
        </div>
      ) : (
        <div className="p-4">
          <h1>Registro de produto</h1>
          <div>
            <h6>Cadastro por CSV</h6>
            <CsvInput
              onSuccess={() => console.log("sucesso")}
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
