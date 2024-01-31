import { useState } from "react";
import { Sheet, Input, Button, Label } from "../components/ui/index.tsx";
import Register from "@/components/functional/Register/index.tsx";
import { Layout } from "@/layout/Layout.tsx";
export default function Products() {
  const [search, setSearch] = useState("");
  const [products] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>();

  const onSearch = () => {
    if (search) {
      setFilteredProducts(
        products.filter((client) => client.name.includes(search))
      );
      return;
    }

    setFilteredProducts(products);
  };

  const hasProductsRegistred = products.length > 0;

  return (
    <Layout>
      <div className="flex flex-col justify-center  w-full max-w-sm items-center space-x-2">
        {hasProductsRegistred ? (
          <Sheet.Sheet>
            <div className="flex">
              <Input
                type="text"
                placeholder="coca cola lata 350ml"
                onChange={(e) => setSearch(e.target.value)}
                value={search}
              />
              <Button
                type="button"
                variant="default"
                className="rounded-[5px]"
                onClick={onSearch}
              >
                Buscar
              </Button>
            </div>
            <ul>
              {filteredProducts?.map((client) => (
                <Sheet.SheetTrigger key={client.name} onClick={() => {}}>
                  {client.name}
                </Sheet.SheetTrigger>
              ))}
            </ul>
            <Sheet.SheetContent className="bg-[white]">
              <Sheet.SheetHeader>
                <Sheet.SheetTitle>Edit Client</Sheet.SheetTitle>
                <Sheet.SheetDescription>
                  Make changes to your profile here. Click save when you're
                  done.
                </Sheet.SheetDescription>
              </Sheet.SheetHeader>
              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="name" className="text-right">
                    Name
                  </Label>
                  <Input
                    id="name"
                    value="Pedro Duarte"
                    className="col-span-3"
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="username" className="text-right">
                    Username
                  </Label>
                  <Input
                    id="username"
                    value="@peduarte"
                    className="col-span-3"
                  />
                </div>
              </div>
              <Sheet.SheetFooter>
                <Sheet.SheetClose asChild>
                  <Button type="submit">Save changes</Button>
                </Sheet.SheetClose>
              </Sheet.SheetFooter>
            </Sheet.SheetContent>
          </Sheet.Sheet>
        ) : (
          <Register title="Produtos" href="/register" actionType="product" />
        )}
      </div>
    </Layout>
  );
}
