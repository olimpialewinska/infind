import { observer } from "mobx-react-lite";
import { Container, Item, Wrapper } from "./style";
import { store } from "@/stores";
import { useTranslation } from "@/app/i18n/client";
import Link from "next/link";

export const Navbar = observer(() => {
  const language = store.language.currentLanguage;
  const { t } = useTranslation(store.language.currentLanguage, "navbar");
  return (
    <Wrapper>
      <Link href={`/`}>Navbar</Link>
      <Container>
        <Link href={`/${language}/movies`}>
          <Item>{t("movies")}</Item>
        </Link>
        <Link href={`/${language}/music`}>
          <Item>{t("music")}</Item>
        </Link>
        <Link href={`/${language}/books`}>
          <Item>{t("books")}</Item>
        </Link>
      </Container>
      <Container>
        <Link href={`/${language}/login`}>{t("login")}</Link>
      </Container>
    </Wrapper>
  );
});
