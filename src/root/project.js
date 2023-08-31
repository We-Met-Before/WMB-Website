"use client";

import { createContext, useContext, useEffect, useState } from "react";

const Context = createContext();

export function ProjectProvider({ children }) {
  const [project, setProject] = useState(false);

  return (
    <Context.Provider value={[project, setProject]}>{children}</Context.Provider>
  );
}

export function useProjectContext() {
  return useContext(Context);
}