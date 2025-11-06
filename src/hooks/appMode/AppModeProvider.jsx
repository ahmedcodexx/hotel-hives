import { useEffect } from "react";
import { useLocalStorageState } from "../index";
import { AppModeContext } from "./useAppMode";

const AppModeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useLocalStorageState(window.matchMedia("(prefers-color-scheme: dark)").matches, "isDark");

  useEffect(() => {
    document.documentElement.classList.toggle("dark-mode", isDarkMode)
    document.documentElement.classList.toggle("light-mode", !isDarkMode)
  }, [isDarkMode]);

  const toggleMode = () => {
    setIsDarkMode((isDark) => !isDark);
  };
  return (
    <AppModeContext.Provider value={{ isDarkMode, toggleMode }}>
      {children}
    </AppModeContext.Provider>
  );
};

export default AppModeProvider;
