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
import { useContext } from "react";
import { formContext } from "..";
import { useTranslation } from "@/app/i18n/client";
import { store } from "@/stores";

export const RegisterForm = observer(() => {
  const { t } = useTranslation(store.language.currentLanguage, "login");
  const { changeForm } = useContext(formContext);
  return (
    <Wrapper theme={store.theme.currentTheme}>
      <Title>{t("register")}</Title>
      <Validation>{t("validation-message-register")}</Validation>
      <Input theme={store.theme.currentTheme} placeholder="email" />
      <Input theme={store.theme.currentTheme} placeholder={t("password")} />
      <Input
        theme={store.theme.currentTheme}
        placeholder={t("confirm-password")}
      />
      <Button theme={store.theme.currentTheme}>{t("register-button")}</Button>
      <Row>
        <Paragraph>{t("footer-text-register")}</Paragraph>
        <Link onClick={changeForm}>{t("footer-link-register")}</Link>
      </Row>
    </Wrapper>
  );
});
