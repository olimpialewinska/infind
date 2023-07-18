"use client";
import { useTranslation } from "@/app/i18n/client";
import { Navbar } from "@/components/Navbar";
import { Bg } from "@/components/styles";
import { store } from "@/stores";
import { observer } from "mobx-react-lite";
import { Button, Input, Title, Validation, Wrapper } from "../style";
import { Icon } from "@/components/Icon";
import Link from "next/link";
import { useCallback, useState } from "react";
import { passwordReset } from "@/utils/functions/auth/login";

export const ForgottenPassword = observer(() => {
  const [email, setEmail] = useState("");
  const { t } = useTranslation(
    store.language.currentLanguage,
    "forgottenPassword"
  );
  const theme: "dark" | "light" = store.theme.currentTheme;

  const handleSubmit = useCallback(async () => {
    await passwordReset(email, store.language.currentLanguage);
  }, [email, store.language.currentLanguage]);

  return (
    <Bg theme={theme}>
      <Navbar />

      <Wrapper theme={store.theme.currentTheme}>
        <Link
          href={`/${store.language.currentLanguage}/login`}
          style={{
            alignSelf: "flex-end",
            marginTop: -30,
            marginRight: -36,
            marginBottom: 10,
          }}
        >
          <Icon
            icon="close.png"
            size={20}
            onClick={() => {
              history.back();
            }}
          />
        </Link>
        <Title style={{ textAlign: "center" }}>{t("forgotten-password")}</Title>
        <Validation style={{ marginBottom: 16 }}>{t("info")}</Validation>
        <Input
          theme={store.theme.currentTheme}
          placeholder="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Button
          theme={store.theme.currentTheme}
          onClick={handleSubmit}
          style={{ width: "100%" }}
        >
          {t("submit")}
        </Button>
      </Wrapper>
    </Bg>
  );
});
