"use client";
import { useTranslation } from "@/app/i18n/client";
import { store } from "@/stores";
import { observer } from "mobx-react-lite";

export const Reviews = observer(() => {
  const { t } = useTranslation(store.language.currentLanguage, "reviews");
  const theme: "dark" | "light" = store.theme.currentTheme;

  return <>Reviews</>;
});
