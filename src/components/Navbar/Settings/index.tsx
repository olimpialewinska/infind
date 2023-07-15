"use client";
import { store } from "@/stores";
import { observer } from "mobx-react-lite";
import { Label, Row, Select, Settings, SettingsIcon, Option } from "./style";
import { useCallback, useEffect, useRef, useState } from "react";
import { useTranslation } from "@/app/i18n/client";
import { useCookies } from "react-cookie";
import { Button } from "@/components/pages/Login/style";
import { signOut } from "@/utils/functions/auth/login";
import { useRouter } from "next/navigation";

export const SettingsElement = observer(() => {
  const { t } = useTranslation(store.language.currentLanguage, "navbar");
  const settingsRef = useRef<HTMLDivElement>(null);
  const selectRef = useRef<HTMLSelectElement>(null);
  const router = useRouter();
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [cookies, setCookie] = useCookies(["infind-theme"]);

  const createQueryString = useCallback((path: string, value: string) => {
    const langCodePattern = /^\/[a-z]{2}/;
    const newPath = path.replace(langCodePattern, `/${value}`);
    return newPath;
  }, []);

  const handleSignOut = useCallback(async () => {
    await signOut();
    router.push(`/${store.language.currentLanguage}/login`);
  }, [router, store.language.currentLanguage]);

  const handleLanguageChange = useCallback(
    (e: React.ChangeEvent<HTMLSelectElement>) => {
      store.language.setLanguage(e.target.value as "en" | "pl");
      const newPath = createQueryString(
        window.location.pathname,
        e.target.value
      );
      window.location.replace(newPath);
    },
    [createQueryString]
  );

  const handleThemeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    store.theme.setTheme(e.target.value as "dark" | "light");
    setCookie("infind-theme", e.target.value, {
      path: "/",
    });
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
          <Select
            theme={store.theme.currentTheme}
            ref={selectRef}
            onChange={handleLanguageChange}
            defaultValue={store.language.currentLanguage}
          >
            <Option value="en">{t("english", "navbar")}</Option>
            <Option value="pl">{t("polish", "navbar")}</Option>
          </Select>
        </Row>

        <Row>
          <Label htmlFor="dark-mode">{t("color-mode", "navbar")}</Label>
          <Select
            theme={store.theme.currentTheme}
            ref={selectRef}
            onChange={handleThemeChange}
            value={store.theme.currentTheme}
          >
            <Option value="dark">{t("dark", "navbar")}</Option>
            <Option value="light">{t("light", "navbar")}</Option>
          </Select>
        </Row>

        {store.user.currentUserStore ? (
          <Button
            theme={store.theme.currentTheme}
            style={{ width: "100%" }}
            onClick={handleSignOut}
          >
            {t("logOut")}
          </Button>
        ) : (
          <></>
        )}
      </Settings>
    </>
  );
});
