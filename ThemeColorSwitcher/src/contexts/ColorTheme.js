import { createContext, useContext } from "react"

export const colorThemeContext = createContext({
  colorThemeMode: "white",
  yellowTheme: () => {},
  whiteTheme: () => {},
});

export const ColorThemeProvider = colorThemeContext.Provider

export default function useColorTheme() {
  return useContext(colorThemeContext)
}
