import React, { useState, useEffect } from "react";
import { useStore } from "@/store/infra/zustand/store";
import { useDebounce } from "usehooks-ts";
import { Button, Input, Collapsible, Card, Table } from "@/components/ui";
import {
  MagnifyingGlass,
  MinusCircle,
  PlusCircle,
} from "@phosphor-icons/react";

export default function Seller() {
  const products = useStore((state) => state.hub.products);

  const [isOpen, setIsOpen] = useState(false);
  const [inputSearch, setInputSearch] = useState("");
  const [filteredProducts, setFilteredProducts] = useState(products);

  const debounce = useDebounce(inputSearch, 500);
  console.log(products);

  const handleChangeInputSearch = (e: React.ChangeEvent<HTMLInputElement>) =>
    setInputSearch(e.target.value.toLowerCase());

  const handleAddToCart = (product) => {
    console.log("add");
  };

  const handleRemoveToCart = (product) => {
    console.log("remove");
  };

  const searchProducts = () => {
    let filtered = products;
    if (inputSearch)
      filtered = products.filter((product) =>
        product.name.includes(inputSearch)
      );

    setFilteredProducts(filtered);
  };

  // @eslint-disable-next-line
  useEffect(searchProducts, [debounce]);

  return (
    <div>
      <h1>Seller</h1>
      <div className="flex justify-center items-center gap-2">
        <Input
          type="text"
          onChange={handleChangeInputSearch}
          placeholder="Coca cola"
        />
      </div>
      <Table.Table className="w-full">
        <Table.TableCaption>Lista de produtos</Table.TableCaption>
        <Table.TableHeader>
          <Table.TableRow>
            <Table.TableHead className="w-[200px]">Nome</Table.TableHead>
            <Table.TableHead className="w-[100px]">Preço</Table.TableHead>
            <Table.TableHead className="w-[200px] text-center">
              Carrinho
            </Table.TableHead>
            <Table.TableHead className="w-[200px]">Estoque</Table.TableHead>
            <Table.TableHead className="text-right">Total</Table.TableHead>
          </Table.TableRow>
        </Table.TableHeader>
        <Table.TableBody>
          {filteredProducts?.map((product) => {
            return (
              <Table.TableRow key={product.id}>
                <Table.TableCell>{product.name}</Table.TableCell>
                <Table.TableCell>{product.price}</Table.TableCell>
                <Table.TableCell className="flex justify-center items-center">
                  <Button
                    type="button"
                    variant="ghost"
                    onClick={() => handleAddToCart(product)}
                  >
                    <PlusCircle size={16} />
                  </Button>
                  <p>0</p>
                  <Button
                    type="button"
                    variant="ghost"
                    onClick={() => handleRemoveToCart(product)}
                  >
                    <MinusCircle size={16} />
                  </Button>
                </Table.TableCell>
                <Table.TableCell>{product.quantity}</Table.TableCell>
                <Table.TableCell className="text-right">
                  {product.total}
                </Table.TableCell>
              </Table.TableRow>
            );
          })}
        </Table.TableBody>
      </Table.Table>
    </div>
  );
}
