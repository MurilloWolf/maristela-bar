import { createContext, useRef } from "react";
import { StoreApi, createStore } from "zustand";
import { AppStore } from "@/store/adpters/app";
import { AppStoreCreator } from "@/store/infra/zustand/store";

export const createAppStore = () => {
  return createStore<AppStore>(AppStoreCreator);
};

export const ZustandContext = createContext<StoreApi<AppStore>>(null as never);

export const ZustandProvider = (props) => {
  const AppStoreRef = useRef(createAppStore());
  return (
    <ZustandContext.Provider value={AppStoreRef.current}>
      {props.children}
    </ZustandContext.Provider>
  );
};
