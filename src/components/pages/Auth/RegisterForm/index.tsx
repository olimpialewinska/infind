"use client";
import { observer } from "mobx-react-lite";
import {
  Button,
  Input,
  Link,
  Paragraph,
  Row,
  Title,
  Validation,
  Wrapper,
} from "../style";
import { useCallback, useContext, useState } from "react";
import { formContext } from "..";
import { useTranslation } from "@/app/i18n/client";
import { store } from "@/stores";
import { handleSignUp } from "@/utils/functions/auth/login";

export const RegisterForm = observer(() => {
  const { t } = useTranslation(store.language.currentLanguage, "login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { changeForm } = useContext(formContext);

  const handleSubmit = useCallback(async () => {
    await handleSignUp(email, password);
  }, [email, password]);

  return (
    <Wrapper theme={store.theme.currentTheme}>
      <Title>{t("register")}</Title>
      <Validation>{t("validation-message-register")}</Validation>
      <Input
        theme={store.theme.currentTheme}
        placeholder="email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <Input theme={store.theme.currentTheme} placeholder={t("password")} />
      <Input
        theme={store.theme.currentTheme}
        placeholder={t("confirm-password")}
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button theme={store.theme.currentTheme} onClick={handleSubmit}>
        {t("register-button")}
      </Button>
      <Row>
        <Paragraph>{t("footer-text-register")}</Paragraph>
        <Link onClick={changeForm}>{t("footer-link-register")}</Link>
      </Row>
    </Wrapper>
  );
});
