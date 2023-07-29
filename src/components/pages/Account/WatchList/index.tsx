"use client";
import { useTranslation } from "@/app/i18n/client";
import { store } from "@/stores";
import { observer } from "mobx-react-lite";
import { Container } from "./style";
import { Title } from "../../Auth/style";

import { Element } from "./Element";
import { IElement } from "@/utils/interfaces/IElement";

export const WatchList = observer(() => {
  const { t } = useTranslation(store.language.currentLanguage, "watchList");
  const theme: "dark" | "light" = store.theme.currentTheme;

  const Items: IElement[] = [
    {
      id: "1",
      title: "Test",
      img: "test",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      date: "2021",
    },
    {
      id: "2",
      title: "Test",
      img: "test",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      date: "2021",
    },
    {
      id: "3",
      title: "Test",
      img: "test",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      date: "2021",
    },
    {
      id: "4",
      title: "Test",
      img: "test",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      date: "2021",
    },
  ];

  return (
    <Container>
      {Items.map((item) => {
        return <Element key={item.id} element={item} />;
      })}
    </Container>
  );
});
