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
import { usePathname, useRouter } from "next/navigation";
import { useCallback, useState } from "react";
import getURL from "@/utils/functions/getURL";
import { SettingsElement } from "./Settings";
import { Button } from "../pages/Auth/style";
import { signOut } from "@/utils/functions/auth/login";

const navigationItems = [
  {
    path: "movies",
    color: "#b500a6",
    labelKey: "movies",
  },
  {
    path: "series",
    color: "#7500c9",
    labelKey: "series",
  },
  {
    path: "games",
    color: "#0051c9",
    labelKey: "games",
  },
];

export const Navbar = observer(() => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const language = store.language.currentLanguage;
  const { t } = useTranslation(store.language.currentLanguage, "navbar");

  const handleSignOut = useCallback(async () => {
    await signOut();
    router.push(`/${language}/login`);
  }, [router, language]);

  return (
    <Wrapper>
      <Link href={`/${store.language.currentLanguage}`}>
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

        {store.user.currentUserStore ? (
          <Link
            href={`/${language}/account`}
            style={{
              textDecoration: "none",
            }}
          >
            <Item
              selected={pathname.split("/")[2] === "account"}
              color={"#ad0051"}
              style={{
                marginRight: 0,
                color:
                  store.theme.currentTheme === "dark"
                    ? "rgba(255,255,255, 0.6)"
                    : "rgba(0,0,0, 0.6)",
              }}
            >
              {store.user.currentUserStore.email.split("@")[0]}
            </Item>
          </Link>
        ) : (
          <Link
            href={`/${language}/login`}
            style={{
              textDecoration: "none",
            }}
          >
            <Item
              selected={pathname.split("/")[2] === "login"}
              color={"#ad0051"}
              style={{
                marginRight: 0,
                color:
                  store.theme.currentTheme === "dark"
                    ? "rgba(255,255,255, 0.6)"
                    : "rgba(0,0,0, 0.6)",
              }}
            >
              {t("login")}
            </Item>
          </Link>
        )}

        <SettingsElement />
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

        {store.user.currentUserStore ? (
          <Link
            href={`/${language}/account`}
            onClick={() => setIsOpen(false)}
            style={{
              textDecoration: "none",
              color:
                store.theme.currentTheme === "dark"
                  ? "rgba(255,255,255, 0.6)"
                  : "rgba(0,0,0, 0.6)",
            }}
          >
            <MobileItem>
              {store.user.currentUserStore?.email.split("@")[0]}
            </MobileItem>
          </Link>
        ) : (
          <>
            <Link
              href={`/${language}/login`}
              onClick={() => setIsOpen(false)}
              style={{
                textDecoration: "none",
                color:
                  store.theme.currentTheme === "dark"
                    ? "rgba(255,255,255, 0.6)"
                    : "rgba(0,0,0, 0.6)",
              }}
            >
              <MobileItem>{t("login")}</MobileItem>
            </Link>
          </>
        )}
        <div style={{ flex: 1 }}></div>
        {store.user.currentUserStore && (
          <Button
            onClick={handleSignOut}
            theme={store.theme.currentTheme}
            style={{ width: "80%", marginBottom: 20 }}
          >
            {t("logOut")}
          </Button>
        )}
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
