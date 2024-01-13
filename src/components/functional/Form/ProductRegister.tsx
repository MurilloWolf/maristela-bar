import { useCallback, useEffect, useState } from "react";
import { Button, Input } from "@/components/ui";
import { TeamComboBox } from "..";
import { useStore } from "@/store/infra/zustand/store";

export default function ProductRegisterForm() {
  const initialState = {
    name: "",
    price: 0,
    quantity: 0,
  };

  const { createProduct } = useStore();
  const [formState, setFormState] = useState(initialState);
  const [comboboxValue, setComboboxValue] = useState("");
  const [btnDisabled, setBtnDisabled] = useState(true);

  const resetFormState = () => {
    setFormState(initialState);
  };

  const canSubmit = useCallback(() => {
    const invalidFields = Object.keys(formState).filter((field) => {
      if (field === "price" || field === "quantity") {
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
    if (e.target.name === "quantity" || e.target.name === "price") {
      setFormState({ ...formState, [e.target.name]: Number(e.target.value) });
      return;
    }
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    createProduct({ ...formState, team: comboboxValue });
    resetFormState();
  };

  return (
    <form onSubmit={handleSubmit}>
      <Input
        type="text"
        name="name"
        placeholder="Coca Cola 350ml"
        required
        value={formState.name}
        onChange={handleChange}
      />
      <TeamComboBox value={comboboxValue} setValue={setComboboxValue} />
      <Input
        type="number"
        name="quantity"
        placeholder="50"
        value={formState.quantity}
        required
        onChange={handleChange}
      />
      <Input
        type="number"
        name="price"
        placeholder="3,50"
        value={formState.price}
        onChange={handleChange}
      />
      <Button aria-disabled={btnDisabled} disabled={btnDisabled} type="submit">
        Cadastrar
      </Button>
    </form>
  );
}
