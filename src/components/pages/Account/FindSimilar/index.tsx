"use client";
import { useTranslation } from "@/app/i18n/client";
import { store } from "@/stores";
import { observer } from "mobx-react-lite";
import { Container, Content, Input, ItemBox, TextQuery, Title } from "./style";
import { KeyboardEvent, useState } from "react";
import { Element } from "./Element";
import { IElement } from "@/utils/interfaces/IElement";

export const FindSimilar = observer(() => {
  const [queries, setQueries] = useState<(string | IElement)[]>([
    {
      id: "1",
      title: "Test",
      img: "test",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      date: "2021",
    },
  ]);
  const { t } = useTranslation(store.language.currentLanguage, "findSimilar");
  const theme: "dark" | "light" = store.theme.currentTheme;

  const onKeyPress = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      setQueries([e.currentTarget.value, ...queries]);
      e.currentTarget.value = "";
    }
  };

  return (
    <Container>
      <Content theme={theme}>
        <Title>{t("left")}</Title>
        <Input
          placeholder={t("placeholder")}
          onKeyDown={(e) => onKeyPress(e)}
          theme={store.theme.currentTheme}
        />

        <ItemBox>
          {queries.map((query: string | IElement) => {
            if (typeof query === "string") {
              return <TextQuery key={query}>{query}</TextQuery>;
            } else {
              return <Element key={query.id} element={query} />;
            }
          })}
        </ItemBox>
      </Content>
      <Content theme={theme}>
        {" "}
        <Title>{t("right")}</Title>
      </Content>
    </Container>
  );
});
