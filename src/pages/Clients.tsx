import React, { useState } from "react";
import { Input, Button, Sheet, Label } from "@/components/ui";
import { useStore } from "@/store/infra/zustand/store";
import Register from "@/components/functional/Register";
import { Layout } from "@/layout/Layout";

type Client = {
  name: string;
};

export default function Clients() {
  const [search, setSearch] = useState("");
  const clients = useStore((state) => state.hub.clients);
  const [filteredClients, setFilteredClients] = useState<Client[]>(clients);
  const [selectedClient, setSelectedClient] = useState<Client | null>(null);

  const onSearch = () => {
    if (search) {
      setFilteredClients(
        clients.filter((client) => client.name.includes(search))
      );
      return;
    }

    setFilteredClients(clients);
  };

  const hasClientsRegistered = clients.length > 0;

  const handleClickClient = (client: Client) => {
    setSelectedClient(client);
  };

  return (
    <Layout>
      <div className="flex flex-col justify-center  w-full max-w-sm items-center space-x-2">
        {hasClientsRegistered ? (
          <Sheet.Sheet>
            <div className="flex">
              <Input
                type="text"
                placeholder="Luiz Felipe"
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
              {filteredClients.map((client) => (
                <Sheet.SheetTrigger
                  key={client.name}
                  onClick={() => handleClickClient(client)}
                >
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
          <Register title="cliente" href="/register" actionType="client" />
        )}
      </div>
    </Layout>
  );
}
