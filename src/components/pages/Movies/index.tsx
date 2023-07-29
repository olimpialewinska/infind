"use client";
import { useTranslation } from "@/app/i18n/client";
import { FilterModal } from "@/components/Modal";
import { Navbar } from "@/components/Navbar";
import { items } from "@/components/exampleFilmList";
import {
  Bg,
  ChatSearch,
  ChatSearchContainer,
  ChatSearchInput,
  Container,
  FilterContainer,
  FilterIcon,
  FilterTitle,
  ItemsContainer,
  Row,
  SearchIcon,
} from "@/components/styles";
import { store } from "@/stores";
import { observer } from "mobx-react-lite";
import { useState } from "react";
import { Element } from "../../Element";

export const Movies = observer(() => {
  const { t } = useTranslation(store.language.currentLanguage, "movies");
  const theme: "dark" | "light" = store.theme.currentTheme;
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => {
    setShow(true);
  };
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

        <Row>
          <FilterContainer onClick={handleShow}>
            <FilterTitle>Filtr</FilterTitle>
            <FilterIcon
              theme={store.theme.currentTheme}
              style={{ backgroundImage: `url(/filtr.png)` }}
            />
          </FilterContainer>
          <FilterContainer>
            <FilterTitle>Sort</FilterTitle>
            <FilterIcon
              theme={store.theme.currentTheme}
              style={{ backgroundImage: `url(/sort.png)` }}
            />
          </FilterContainer>
        </Row>
        <ItemsContainer>
          {items.map((item) => {
            return <Element key={item.id} element={item} />;
          })}
        </ItemsContainer>
      </Container>
      <FilterModal visible={show} hide={handleClose} />
    </Bg>
  );
});
