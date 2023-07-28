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
import { useRouter, useSearchParams } from "next/navigation";

export const Account = observer(() => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const search = searchParams.get("type");

  const { t } = useTranslation(store.language.currentLanguage, "account");
  const theme: "dark" | "light" = store.theme.currentTheme;

  const buttonsData = [
    { id: "1", label: t("button-1"), link: "/account" },
    { id: "2", label: t("button-2"), link: "/account?type=watchList" },
    { id: "3", label: t("button-3"), link: "/account?type=reviews" },
  ];

  return (
    <Bg theme={theme}>
      <Navbar />
      <Buttons>
        {buttonsData.map(({ id, label, link }) => (
          <Button
            key={id}
            theme={store.theme.currentTheme}
            selected={
              (search === "watchList" && id === "2") ||
              (search === "reviews" && id === "3") ||
              (search === null && id === "1")
            }
            onClick={() =>
              router.push(`/${store.language.currentLanguage}${link}`)
            }
          >
            {label}
          </Button>
        ))}
      </Buttons>

      {search === "watchList" ? (
        <WatchList />
      ) : search === "reviews" ? (
        <Reviews />
      ) : (
        <FindSimilar />
      )}
    </Bg>
  );
});
