"use client";

import styles from "./switch.module.css";
import { useEffect, useState } from "react";

declare global {
  var updateDOM: () => void;
}

type ColorSchemePreference = "system" | "dark" | "light";

const STORAGE_KEY = "nextjs-blog-starter-theme";
const modes: ColorSchemePreference[] = ["system", "dark", "light"];

let updateDOM: () => void;

/** Safe wrapper around localStorage */
const safeGetItem = (key: string): string | null => {
  try {
    return localStorage.getItem(key);
  } catch {
    return null;
  }
};

const safeSetItem = (key: string, value: string): void => {
  try {
    localStorage.setItem(key, value);
  } catch {
    // ignore quota errors in private browsing
  }
};

/**
 * Switch button to quickly toggle user preference.
 * Neo-brutalism style theme switcher
 */
const Switch = () => {
  const [mode, setMode] = useState<ColorSchemePreference>("system");

  // Sync with storage and window.updateDOM after mount
  useEffect(() => {
    const stored = safeGetItem(STORAGE_KEY);
    if (stored) setMode(stored as ColorSchemePreference);

    updateDOM = window.updateDOM ?? (() => {});

    const onStorage = (e: StorageEvent) => {
      if (e.key === STORAGE_KEY) setMode((e.newValue as ColorSchemePreference) ?? "system");
    };

    addEventListener("storage", onStorage);
    return () => removeEventListener("storage", onStorage);
  }, []);

  useEffect(() => {
    safeSetItem(STORAGE_KEY, mode);
    updateDOM?.();
  }, [mode]);

  const handleModeSwitch = () => {
    const index = modes.indexOf(mode);
    setMode(modes[(index + 1) % modes.length]);
  };

  return (
    <button
      suppressHydrationWarning
      className={styles.switch}
      onClick={handleModeSwitch}
      aria-label="Toggle theme"
    />
  );
};

export const ThemeSwitcher = () => {
  return <Switch />;
};
