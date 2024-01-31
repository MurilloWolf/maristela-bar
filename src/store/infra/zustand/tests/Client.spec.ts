import { it, describe, vi, beforeEach, afterEach, expect } from "vitest";
import ClientsUseCases, {
  createClient,
  updateClient,
  deleteClient,
} from "../case-use/client";
describe("Client use case", () => {
  let set, get;
  const mockState = {
    hub: {
      clients: [],
      products: [],
      transactions: [],
      shoppingCart: {
        items: [],
        client: null,
        total: 0,
      },
    },
  };

  const mockStateWithClient = {
    ...mockState,
    hub: {
      ...mockState.hub,
      clients: [
        {
          id: "123",
          name: "Test",
          email: "test@gmail.com",
        },
      ],
    },
  };

  beforeEach(() => {
    vi.mock("uuid", () => ({
      v4: () => "123",
    }));
    set = vi.fn();
    get = vi.fn();
  });

  afterEach(() => {
    vi.resetAllMocks();
  });

  it("should be return use-cases for Client", () => {
    const useCases = ClientsUseCases(set, get);
    expect(useCases).toEqual({
      createClient: expect.any(Function),
      updateClient: expect.any(Function),
      deleteClient: expect.any(Function),
    });
  });

  it("should create a client correctly", () => {
    const client = {
      name: "Test",
      email: "test@gmail.com",
    };
    const newState = createClient(mockState, client);
    expect(newState).toEqual({
      ...mockState,
      hub: { ...mockState.hub, clients: [{ ...client, id: "123" }] },
    });

    const client2 = {
      name: "prod",
      email: "prod@client.com",
    };
    const newState2 = createClient(newState, client2);
    expect(newState2).toEqual({
      ...newState,
      hub: {
        ...newState.hub,
        clients: [
          { ...client, id: "123" },
          { ...client2, id: "123" },
        ],
      },
    });
  });

  it("should update a client", () => {
    const updatedClient = {
      id: "123",
      name: "Prod Client",
      email: "prod@client.com",
    };

    const newState = updateClient(mockStateWithClient, updatedClient);
    expect(newState).toEqual({
      ...mockStateWithClient,
      hub: {
        ...mockStateWithClient.hub,
        clients: [
          {
            id: "123",
            name: "Prod Client",
            email: "prod@client.com",
          },
        ],
      },
    });
  });

  it("should not update a client if he is no registred", () => {
    const client = {
      id: "123",
      name: "Test",
      email: "test@gmail.com",
    };
    const newState = updateClient(mockState, client);
    expect(newState).toEqual({
      ...mockState,
      hub: { ...mockState.hub, clients: [] },
    });
  });

  it("should delete a client", () => {
    const client = {
      id: "123",
      name: "Test",
      email: "test@gmail.com",
    };
    const newState = deleteClient(mockStateWithClient, client);
    expect(newState).toEqual({
      ...mockStateWithClient,
      hub: { ...mockStateWithClient.hub, clients: [] },
    });
  });

  it("should not delete a client if he is no registred", () => {
    const client = {
      id: "123",
      name: "Test",
      email: "test@gmail.com",
    };
    const newState = deleteClient(mockState, client);
    expect(newState).toEqual(mockState);
  });
});
