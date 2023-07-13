"use client";
import { observer } from "mobx-react-lite";
import {
  Container,
  Item,
  Logo,
  Mobile,
  Wrapper,
  Icon,
  MobileItem,
} from "./style";
import { store } from "@/stores";
import { useTranslation } from "@/app/i18n/client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navigationItems = [
  {
    path: "movies",
    color: "#b500a6",
    labelKey: "movies",
  },
  {
    path: "music",
    color: "#7500c9",
    labelKey: "music",
  },
  {
    path: "books",
    color: "#0051c9",
    labelKey: "books",
  },
  {
    path: "login",
    color: "#ad0051",
    labelKey: "login",
    hideDivider: true,
  },
];

export const Navbar = observer(() => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const language = store.language.currentLanguage;
  const { t } = useTranslation(store.language.currentLanguage, "navbar");

  return (
    <Wrapper>
      <Link href={`/`}>
        <Logo
          style={{
            filter: store.theme.currentTheme === "dark" ? "invert(1)" : "none",
          }}
        />{" "}
      </Link>
      <Container>
        {navigationItems.map((item, index) => (
          <Link
            key={index}
            href={`/${language}/${item.path}`}
            style={{
              textDecoration: "none",
            }}
          >
            <Item
              selected={pathname.split("/")[2] === item.path}
              color={item.color}
              style={{
                marginRight: item.hideDivider ? 0 : undefined,
                color:
                  store.theme.currentTheme === "dark"
                    ? "rgba(255,255,255, 0.6)"
                    : "rgba(0,0,0, 0.6)",
              }}
            >
              {t(item.labelKey)}
            </Item>
          </Link>
        ))}
      </Container>

      <Mobile
        style={{
          display: isOpen ? "flex" : "none",
          backgroundColor:
            store.theme.currentTheme === "dark" ? "#242526" : "#fff",
        }}
      >
        {navigationItems.map((item, index) => (
          <Link
            key={index}
            href={`/${language}/${item.path}`}
            onClick={() => setIsOpen(false)}
            style={{
              textDecoration: "none",
              color:
                store.theme.currentTheme === "dark"
                  ? "rgba(255,255,255, 0.6)"
                  : "rgba(0,0,0, 0.6)",
            }}
          >
            <MobileItem>{t(item.labelKey)}</MobileItem>
          </Link>
        ))}
      </Mobile>
      <Icon
        onClick={() => setIsOpen(!isOpen)}
        style={{
          backgroundImage: isOpen ? "url(/close.png" : "url(/menu.png)",
          filter: store.theme.currentTheme === "dark" ? "invert(1)" : "none",
        }}
      />
    </Wrapper>
  );
});
