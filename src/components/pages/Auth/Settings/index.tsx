"use client";
import { observer } from "mobx-react-lite";
import { useTranslation } from "@/app/i18n/client";
import { Navbar } from "@/components/Navbar";
import { Bg } from "@/components/styles";
import { store } from "@/stores";
import { Button, Input, Title, Validation, Wrapper } from "../style";
import { useCallback, useState } from "react";
import { passwordRecovery } from "@/utils/functions/auth/login";
import { useRouter } from "next/navigation";

export const Settings = observer(() => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const { t } = useTranslation(store.language.currentLanguage, "settings");
  const theme: "dark" | "light" = store.theme.currentTheme;
  const router = useRouter();

  const handleSubmit = useCallback(async () => {
    await passwordRecovery(password);
    router.refresh();
  }, [password, router, store.language.currentLanguage]);

  return (
    <Bg theme={theme}>
      <Navbar />
      <Wrapper theme={theme}>
        <Validation
          style={{
            textAlign: "center",
            fontSize: 16,
            opacity: 0.7,
            marginTop: 0,
          }}
        >
          {store.user.currentUserStore?.email}
        </Validation>
        <Title style={{ textAlign: "center", marginBottom: 20 }}>
          {t("settings")}
        </Title>

        <Validation style={{ marginBottom: 10 }}>{t("info")}</Validation>
        <Input
          theme={store.theme.currentTheme}
          placeholder={t("password")}
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Input
          theme={store.theme.currentTheme}
          placeholder={t("confirm_password")}
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <Button
          theme={store.theme.currentTheme}
          style={{ width: "100%" }}
          onClick={handleSubmit}
        >
          {t("button")}
        </Button>
      </Wrapper>
    </Bg>
  );
});
