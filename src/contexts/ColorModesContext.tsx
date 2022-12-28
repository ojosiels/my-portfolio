import React, { createContext, ReactNode, useState } from "react";

interface iColorModesContext {
  currentTheme: "dark" | "light";
  changeTheme: () => void;
}

interface iColorModesProviderProps {
  children: ReactNode;
}

export const ColorModesContext = createContext({} as iColorModesContext);

const ColorModesProvider = ({ children }: iColorModesProviderProps) => {
  const [currentTheme, setCurrentTheme] = useState<"dark" | "light">("light");

  const changeTheme = () => {
    currentTheme === "light"
      ? setCurrentTheme("dark")
      : setCurrentTheme("light");
  };

  return (
    <ColorModesContext.Provider value={{ currentTheme, changeTheme }}>
      {children}
    </ColorModesContext.Provider>
  );
};

export default ColorModesProvider;
