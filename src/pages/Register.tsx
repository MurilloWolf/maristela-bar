import { useState } from "react";
import { Button } from "@/components/ui";
import { useLocation } from "react-router-dom";
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
        </div>
      ) : (
        <div>
          <h1>Registro de produto</h1>
        </div>
      )}
    </div>
  );
}
