import { useCallback, useEffect, useState } from "react";
import { Button, Input } from "@/components/ui";
import { TeamComboBox } from "..";
import { useStore } from "@/store/infra/zustand/store";

export default function ClientRegisterForm() {
  const initialState = { name: "", cpf: "", wallet: 0, email: "" };
  const { createClient } = useStore();
  const [formState, setFormState] = useState(initialState);
  const [comboboxValue, setComboboxValue] = useState("");
  const [btnDisabled, setBtnDisabled] = useState(true);

  const resetFormState = () => {
    setFormState(initialState);
  };

  const canSubmit = useCallback(() => {
    const invalidFields = Object.keys(formState).filter((field) => {
      if (field === "wallet") {
        const wallet = Number(formState[field]);
        if (wallet < 0) return field;
      }

      if (formState[field] === "") {
        return field;
      }
    });

    setBtnDisabled(invalidFields.length > 0);
  }, [formState]);

  useEffect(canSubmit, [formState, canSubmit]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.name === "wallet") {
      setFormState({ ...formState, [e.target.name]: Number(e.target.value) });
      return;
    }
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    createClient({ ...formState, team: comboboxValue });
    resetFormState();
  };

  return (
    <form onSubmit={handleSubmit}>
      <Input
        type="text"
        name="name"
        placeholder="Luiz Felipe"
        required
        value={formState.name}
        onChange={handleChange}
      />
      <TeamComboBox value={comboboxValue} setValue={setComboboxValue} />
      <Input
        type="text"
        name="cpf"
        placeholder="XXX.XXX.XXX-XX"
        value={formState.cpf}
        required
        onChange={handleChange}
      />
      <Input
        type="email"
        name="email"
        placeholder="luizfelipe@gmail.com"
        value={formState.email}
        onChange={handleChange}
      />
      <Input
        type="number"
        name="wallet"
        placeholder="$100,00"
        required
        value={formState.wallet}
        onChange={handleChange}
      />
      <Button aria-disabled={btnDisabled} disabled={btnDisabled} type="submit">
        Cadastrar
      </Button>
    </form>
  );
}
