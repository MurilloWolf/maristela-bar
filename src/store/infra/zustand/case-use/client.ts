import { v4 as uuidv4 } from "uuid";

const ClientsUseCases = (set, get) => ({
  createClient: (client) => {
    set((state) => ({
      hub: {
        ...state.hub,
        clients: [...state.hub.clients, { ...client, id: uuidv4() }],
      },
    }));
  },
  updateClient: (client) => {
    set((state) => ({
      hub: {
        ...state.hub,
        clients: state.hub.clients.map((c) => {
          if (c.id === client.id) {
            return client;
          }
          return c;
        }),
      },
    }));
  },
  deleteClient: (client) => {
    set((state) => ({
      hub: {
        ...state.hub,
        clients: state.hub.clients.filter((c) => c.id !== client.id),
      },
    }));
  },
});
export default ClientsUseCases;
