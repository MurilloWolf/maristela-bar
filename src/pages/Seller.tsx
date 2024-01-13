import { Button, Input, Collapsible, Card, Table } from "@/components/ui";
import {
  MagnifyingGlass,
  MinusCircle,
  PlusCircle,
} from "@phosphor-icons/react";
import { useState } from "react";
import { useStore } from "@/store/infra/zustand/store";
export default function Seller() {
  const [isOpen, setIsOpen] = useState(false);
  const products = useStore((state) => state.hub.products);
  console.log(products);
  return (
    <div>
      <h1>Seller</h1>

      <div className="flex justify-center items-center gap-2">
        <Input />
        <Button
          className="flex flex-row justify-center items-center p-2 gap-2 "
          variant="default"
        >
          <MagnifyingGlass size={16} />
          Buscar Produtos
        </Button>
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
          {products?.map((product) => {
            return (
              <Table.TableRow key={product.id}>
                <Table.TableCell>{product.name}</Table.TableCell>
                <Table.TableCell>{product.price}</Table.TableCell>
                <Table.TableCell className="flex justify-center items-center">
                  <Button type="button" variant="ghost">
                    <PlusCircle size={16} />
                  </Button>
                  <p>0</p>
                  <Button type="button" variant="ghost">
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
      {/* <Card.Card className="w-38">
        <Card.CardHeader className="flex justify-center items-center">
          <img
            className="w-28 h-28 rounded-md mix-blend-multiply"
            src="https://images.tcdn.com.br/img/img_prod/858764/refrigerante_coca_cola_lata_350ml_c_12_359_1_20201021152315.jpg"
            alt="nada"
          />
        </Card.CardHeader>
        <hr />
        <Card.CardContent className="pt-4">
          <Card.CardTitle className="text-xl text-gray-600 text-center">
            Coca cola 350ml
          </Card.CardTitle>
          <Card.CardDescription className="text-md text-center">
            Preço: $5,00
          </Card.CardDescription>
        </Card.CardContent>
        <Button className="w-full bg-red-400 text-primary-foreground shadow hover:bg-red-600/90">
          Adicionar ao carrinho
        </Button>
      </Card.Card> */}
    </div>
  );
}

{
  /* 
  Collapsible
<Collapsible.Collapsible
        open={isOpen}
        onOpenChange={setIsOpen}
        className="w-[350px] space-y-2"
      >
        <div className="flex items-center justify-between space-x-4 px-4">
          <h4 className="text-sm font-semibold">Filtros</h4>
          <Collapsible.CollapsibleTrigger asChild>
            <Button variant="ghost" size="sm">
              {isOpen ? (
                <ArrowUp size={16} className="h-4 w-4" />
              ) : (
                <ArrowDown size={16} className="h-4 w-4" />
              )}
            </Button>
          </Collapsible.CollapsibleTrigger>
        </div>
        <Collapsible.CollapsibleContent className="space-y-2">
          <div className="rounded-md border px-4 py-2 font-mono text-sm shadow-sm">
            
          </div>
          <div className="rounded-md border px-4 py-2 font-mono text-sm shadow-sm">
            @stitches/react
          </div>
        </Collapsible.CollapsibleContent>
      </Collapsible.Collapsible> */
}
