"use client";
import { observer } from "mobx-react-lite";
import {
  Title,
  Wrapper,
  Input,
  Button,
  Validation,
  Link,
  Paragraph,
  Row,
  Item,
} from "../style";
import { formContext } from "..";
import { useCallback, useContext, useState } from "react";
import { useTranslation } from "@/app/i18n/client";
import { store } from "@/stores";
import { Icon } from "@/components/Icon";
import { handleSignIn } from "@/utils/functions/auth/login";
import { useRouter } from "next/navigation";
export const LoginForm = observer(() => {
  const router = useRouter();
  const { t } = useTranslation(store.language.currentLanguage, "login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(t("validation-default-message"));

  const { changeForm } = useContext(formContext);

  const handleSubmit = useCallback(async () => {
    const data = await handleSignIn(email, password);

    if (data.error) {
      return;
    }

    router.push(`/${store.language.currentLanguage}`);
  }, [email, password, router]);

  return (
    <Wrapper theme={store.theme.currentTheme}>
      <Title>{t("login")}</Title>
      <Validation>{error}</Validation>
      <Input
        theme={store.theme.currentTheme}
        placeholder="email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <Input
        theme={store.theme.currentTheme}
        placeholder={t("password")}
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <Button theme={store.theme.currentTheme} onClick={handleSubmit}>
        {t("login-button")}
      </Button>
      <Row style={{ width: "100%", marginTop: 10 }}>
        <Item style={{ marginRight: 2, backgroundColor: "#ff8484" }}>
          <Icon icon="google.png" filter={"none"}></Icon>
        </Item>
        <Item style={{ marginLeft: 2, backgroundColor: "#8cb4fa" }}>
          <Icon icon="facebook.png" filter={"none"}></Icon>
        </Item>
      </Row>

      <Row style={{ marginTop: 10 }}>
        <Paragraph>{t("footer-text")}</Paragraph>
        <Link onClick={changeForm}>{t("footer-link")}</Link>
      </Row>
    </Wrapper>
  );
});
