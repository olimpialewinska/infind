"use client";
import { observer } from "mobx-react-lite";
import { useTranslation } from "@/app/i18n/client";
import { Navbar } from "@/components/Navbar";
import { Bg } from "@/components/styles";
import { store } from "@/stores";
import { Button, Buttons } from "./style";
import { useState } from "react";
import { FindSimilar } from "./FindSimilar";
import { WatchList } from "./WatchList";
import { Reviews } from "./Reviews";

export const Account = observer(() => {
  const [form, setForm] = useState<string>("1");
  const { t } = useTranslation(store.language.currentLanguage, "account");
  const theme: "dark" | "light" = store.theme.currentTheme;

  const buttonsData = [
    { id: "1", label: t("button-1") },
    { id: "2", label: t("button-2") },
    { id: "3", label: t("button-3") },
  ];

  return (
    <Bg theme={theme}>
      <Navbar />
      <Buttons>
        {buttonsData.map(({ id, label }) => (
          <Button
            key={id}
            theme={store.theme.currentTheme}
            active={form === id}
            onClick={() => setForm(id)}
          >
            {label}
          </Button>
        ))}
      </Buttons>

      {form === "1" && <FindSimilar />}
      {form === "2" && <WatchList />}
      {form === "3" && <Reviews />}
    </Bg>
  );
});
