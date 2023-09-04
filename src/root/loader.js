"use client";

import { createContext, useContext, useState } from "react";

const Context = createContext();

export function ExtLoaderProvider({ children }) {
  const [extLoader, setExtLoader] = useState(false);

  return (
    <Context.Provider value={[extLoader, setExtLoader]}>
      {children}
    </Context.Provider>
  );
}

export function useExtLoaderContext() {
  return useContext(Context);
}
