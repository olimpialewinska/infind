"use client";
import { useEffect } from "react";
import { languages } from "../i18n/settings";
import { store } from "@/stores";
import { useCookies } from "react-cookie";

export async function generateStaticParams() {
  return languages.map((lng) => ({ lng }));
}

export default function Layout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: {
    lng: string;
  };
}) {
  store.language.setLanguage(params.lng);
  const [cookies, setCookie] = useCookies(["infind-theme"]);

  useEffect(() => {
    const preferredTheme = window.matchMedia("(prefers-color-scheme: dark)")
      .matches
      ? "dark"
      : "light";

    if (cookies["infind-theme"]) {
      store.theme.setTheme(cookies["infind-theme"]);
    } else {
      store.theme.setTheme(preferredTheme);
    }
  }, [cookies]);

  return <div>{children}</div>;
}
