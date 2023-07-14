"use client";
import { store } from "@/stores";
import { observer } from "mobx-react-lite";
import { Label, Row, Select, Settings, SettingsIcon } from "./style";
import { useCallback, useEffect, useRef, useState } from "react";
import { useTranslation } from "@/app/i18n/client";

export const SettingsElement = observer(() => {
  const { t } = useTranslation(store.language.currentLanguage, "navbar");
  const settingsRef = useRef<HTMLDivElement>(null);
  const selectRef = useRef<HTMLSelectElement>(null);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);

  const createQueryString = useCallback((path: string, value: string) => {
    const langCodePattern = /^\/[a-z]{2}/;
    const newPath = path.replace(langCodePattern, `/${value}`);
    return newPath;
  }, []);

  const handleLanguageChange = useCallback(
    (e: React.ChangeEvent<HTMLSelectElement>) => {
      store.language.setLanguage(e.target.value as "en" | "pl");
      const newPath = createQueryString(
        window.location.pathname,
        e.target.value
      );
      window.location.replace(newPath);
    },
    []
  );

  const handleThemeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    store.theme.setTheme(e.target.value as "dark" | "light");
  };

  const handleSettingsOpen = useCallback(() => {
    if (!isSettingsOpen) {
      setIsSettingsOpen(true);
      requestAnimationFrame(() => {
        settingsRef.current?.focus();
      });
    }
  }, [isSettingsOpen]);

  useEffect(() => {
    const handleDocumentMouseDown = (e: MouseEvent) => {
      if (
        settingsRef.current?.contains(e.target as Node) ||
        e.target === settingsRef.current ||
        e.target === selectRef.current
      ) {
        return;
      }
      setIsSettingsOpen(false);
    };

    document.addEventListener("mousedown", handleDocumentMouseDown);

    return () => {
      document.removeEventListener("mousedown", handleDocumentMouseDown);
    };
  }, []);

  return (
    <>
      <SettingsIcon
        onClick={handleSettingsOpen}
        style={{
          backgroundImage: "url(/settings.png)",
          filter: store.theme.currentTheme === "dark" ? "invert(1)" : "none",
          marginRight: 0,
          marginLeft: 24,
          pointerEvents: isSettingsOpen ? "none" : "inherit",
        }}
      />

      <Settings
        ref={settingsRef}
        style={{
          display: isSettingsOpen ? "flex" : "none",
          backgroundColor:
            store.theme.currentTheme === "dark" ? "#464646" : "#fff",
        }}
      >
        <Row>
          <Label htmlFor="language">{t("language", "navbar")}</Label>
          <Select ref={selectRef} onChange={handleLanguageChange}>
            <option
              value="en"
              selected={store.language.currentLanguage === "en"}
            >
              {t("english", "navbar")}
            </option>
            <option
              selected={store.language.currentLanguage === "pl"}
              value="pl"
            >
              {t("polish", "navbar")}
            </option>
          </Select>
        </Row>

        <Row>
          <Label htmlFor="dark-mode">{t("color-mode", "navbar")}</Label>
          <Select ref={selectRef} onChange={handleThemeChange}>
            <option selected={store.theme.currentTheme === "dark"} value="dark">
              {t("dark", "navbar")}
            </option>
            <option
              selected={store.theme.currentTheme === "light"}
              value="light"
            >
              {t("light", "navbar")}
            </option>
          </Select>
        </Row>
      </Settings>
    </>
  );
});
