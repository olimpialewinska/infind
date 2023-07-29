"use client";
import { useTranslation } from "@/app/i18n/client";
import { Navbar } from "@/components/Navbar";
import {
  Bg,
  ChatSearch,
  ChatSearchContainer,
  ChatSearchInput,
  Container,
  SearchIcon,
} from "@/components/styles";
import { store } from "@/stores";
import { observer } from "mobx-react-lite";

export const Series = observer(() => {
  const { t } = useTranslation(store.language.currentLanguage, "index");
  const theme: "dark" | "light" = store.theme.currentTheme;
  return (
    <Bg theme={theme}>
      {" "}
      <Navbar />
      <Container>
        <ChatSearchContainer>
          <ChatSearch theme={store.theme.currentTheme}>
            <SearchIcon theme={store.theme.currentTheme} />
            <ChatSearchInput
              placeholder="Search"
              theme={store.theme.currentTheme}
            />
          </ChatSearch>
        </ChatSearchContainer>
      </Container>
    </Bg>
  );
});
