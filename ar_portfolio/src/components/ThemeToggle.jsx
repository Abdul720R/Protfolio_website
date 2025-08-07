import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";  // use to write multiple class name

export const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "dark") {
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
    } else {
      localStorage.setItem("theme", "light");
      setIsDarkMode(false);
    }
  }, []);

  const toggleTheme = () => {
    if (isDarkMode) {
      document.documentElement.classList.remove("dark"); // switching the light mode
      localStorage.setItem("theme", "light"); // remember the mode
      setIsDarkMode(false); 
    } else {
      document.documentElement.classList.add("dark"); // switching the dark mode
      localStorage.setItem("theme", "dark"); // remember the mode
      setIsDarkMode(true);
    }
  };

  return (
    // button to set dark and light mode 
    <button
      onClick={toggleTheme}
      className={cn(
        "fixed max-sm:hidden top-5 right-5 z-50 p-2 rounded-full transition-colors duration-300",
        "focus:outlin-hidden"
      )}
    >
      {isDarkMode ? (
        // use Sun icon 
        <Sun className="h-6 w-6 text-yellow-300" />
      ) : (
        // use Moon Icon
        <Moon className="h-6 w-6 text-blue-900" />
      )}
    </button>
  );
};