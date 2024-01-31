import { Client } from "@/store/adpters/client";
import { v4 as uuidv4 } from "uuid";

const ClientsUseCases = (set, get) => ({
  createClient: (client: Client) => {
    set((state) => createClient(state, client));
  },
  updateClient: (client: Client) => {
    set((state) => updateClient(state, client));
  },
  deleteClient: (client: Client) => {
    set((state) => deleteClient(state, client));
  },
});

export const createClient = (state, client) => ({
  hub: {
    ...state.hub,
    clients: [...state.hub.clients, { ...client, id: uuidv4() }],
  },
});

export const updateClient = (state, client) => ({
  hub: {
    ...state.hub,
    clients: state.hub.clients.map((c) => {
      if (c.id === client.id) {
        return client;
      }
      return c;
    }),
  },
});

export const deleteClient = (state, client) => ({
  hub: {
    ...state.hub,
    clients: state.hub.clients.filter((c) => c.id !== client.id),
  },
});

export default ClientsUseCases;
