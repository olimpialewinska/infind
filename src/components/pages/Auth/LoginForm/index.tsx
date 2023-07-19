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
} from "../style";
import { formContext } from "..";
import { useCallback, useContext, useState } from "react";
import { useTranslation } from "@/app/i18n/client";
import { store } from "@/stores";
import { Icon } from "@/components/Icon";
import {
  facebookSignIn,
  googleSignIn,
  handleSignIn,
} from "@/utils/functions/auth/login";
import { useRouter } from "next/navigation";
import { Arrow, Item, Text } from "./style";
export const LoginForm = observer(() => {
  const router = useRouter();
  const { t } = useTranslation(store.language.currentLanguage, "login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(t("validation-default-message"));

  const { changeForm } = useContext(formContext);

  const handleGoogleSignIn = useCallback(async () => {
    googleSignIn();
  }, []);

  const handleFacebookSignIn = useCallback(async () => {
    facebookSignIn(store.language.currentLanguage);
  }, [store.language.currentLanguage]);

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

      <Item
        onClick={handleGoogleSignIn}
        style={{ marginTop: 30 }}
        theme={store.theme.currentTheme}
      >
        <Icon
          icon="google.png"
          filter={store.theme.currentTheme === "dark" ? "invert(1)" : "none"}
        ></Icon>
        <Text>Log in with Google</Text>
        <Arrow theme={store.theme.currentTheme} />
      </Item>
      <Item onClick={handleFacebookSignIn} theme={store.theme.currentTheme}>
        <Icon
          icon="facebook.png"
          filter={store.theme.currentTheme === "dark" ? "invert(1)" : "none"}
        ></Icon>
        <Text>Log in with Facebook</Text>
        <Arrow theme={store.theme.currentTheme} />
      </Item>

      <Row style={{ marginTop: 10 }}>
        <Paragraph>{t("footer-text")}</Paragraph>
        <Link onClick={changeForm}>{t("footer-link")}</Link>
      </Row>
      <Row style={{ marginTop: 6 }}>
        <Paragraph>{t("forgot-password")}</Paragraph>
        <Link
          onClick={() =>
            router.push(`/${store.language.currentLanguage}/forgottenPassword`)
          }
        >
          {t("remind-password")}
        </Link>
      </Row>
    </Wrapper>
  );
});
