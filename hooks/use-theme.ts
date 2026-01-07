"use client";

import { useEffect, useState, useCallback } from "react";

type Theme = "light" | "dark" | "system";

export function useTheme() {
  const [theme, setThemeState] = useState<Theme>("system");
  const [resolvedTheme, setResolvedTheme] = useState<"light" | "dark">("light");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const stored = localStorage.getItem("theme") as Theme | null;
    if (stored) {
      setThemeState(stored);
    }
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const root = document.documentElement;
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    const updateTheme = () => {
      let resolved: "light" | "dark";

      if (theme === "system") {
        resolved = mediaQuery.matches ? "dark" : "light";
      } else {
        resolved = theme;
      }

      setResolvedTheme(resolved);

      if (resolved === "dark") {
        root.classList.add("dark");
      } else {
        root.classList.remove("dark");
      }
    };

    updateTheme();
    mediaQuery.addEventListener("change", updateTheme);

    return () => mediaQuery.removeEventListener("change", updateTheme);
  }, [theme, mounted]);

  const setTheme = useCallback((newTheme: Theme) => {
    setThemeState(newTheme);
    localStorage.setItem("theme", newTheme);
  }, []);

  return {
    theme,
    setTheme,
    resolvedTheme,
    mounted,
  };
}
