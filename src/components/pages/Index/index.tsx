"use client";
import { useTranslation } from "@/app/i18n/client";
import { Navbar } from "@/components/Navbar";
import { Bg } from "@/components/styles";
import { store } from "@/stores";
import { observer } from "mobx-react-lite";
import { useCookies } from "react-cookie";

export const Index = observer(() => {
  const [cookies, setCookie] = useCookies(["infind-theme"]);
  const { t } = useTranslation(store.language.currentLanguage, "index");
  const theme: "dark" | "light" = store.theme.currentTheme;

  const handleThemeChange = (theme: "dark" | "light") => {
    store.theme.setTheme(theme);
    setCookie("infind-theme", theme, {
      path: "/",
    });
  };

  return (
    <Bg theme={theme}>
      {" "}
      <Navbar />
    </Bg>
  );
});
