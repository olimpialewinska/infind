"use client";
import { useTranslation } from "@/app/i18n/client";
import { store } from "@/stores";
import { observer } from "mobx-react-lite";

export const WatchList = observer(() => {
  const { t } = useTranslation(store.language.currentLanguage, "watchList");
  const theme: "dark" | "light" = store.theme.currentTheme;

  return <>WatchList</>;
});
