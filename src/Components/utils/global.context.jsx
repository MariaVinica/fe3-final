import React, { createContext, useMemo, useCallback } from "react";

export const initialState = { theme: "", data: [] };

export const ContextGlobal = createContext(undefined);

export const ContextProvider = ({ children }) => {
  const [state, setState] = React.useState(initialState);

  const toggleTheme = useCallback(() => {
    setState((prev) => ({ ...prev, theme: prev.theme === "light" ? "dark" : "light" }));
  }, []);

  const addToFavorites = useCallback((dentist) => {
    setState((prev) => ({ ...prev, data: [...prev.data, dentist] }));
  }, []);

  const contextValue = useMemo(() => ({ state, toggleTheme, addToFavorites }), [
    state,
    toggleTheme,
    addToFavorites,
  ]);

  return (
    <ContextGlobal.Provider value={contextValue}>
      {children}
    </ContextGlobal.Provider>
  );
};

