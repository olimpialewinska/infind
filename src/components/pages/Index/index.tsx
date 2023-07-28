"use client";
import { useTranslation } from "@/app/i18n/client";
import { Navbar } from "@/components/Navbar";
import { Bg } from "@/components/styles";
import { store } from "@/stores";
import { observer } from "mobx-react-lite";
import { Banner, Container } from "./style";
import { Row } from "./Row";

export const Index = observer(() => {
  const { t } = useTranslation(store.language.currentLanguage, "index");
  const theme: "dark" | "light" = store.theme.currentTheme;

  const generes = [
    { id: "1", label: "Action" },
    { id: "2", label: "Adventure" },
    { id: "3", label: "Animation" },
    { id: "4", label: "Comedy" },
    { id: "5", label: "Crime" },
    { id: "6", label: "Documentary" },
    { id: "7", label: "Drama" },
    { id: "8", label: "Family" },
    { id: "9", label: "Fantasy" },
    { id: "10", label: "History" },
    { id: "11", label: "Horror" },
    { id: "12", label: "Music" },
    { id: "13", label: "Mystery" },
    { id: "14", label: "Romance" },
    { id: "15", label: "Science Fiction" },
    { id: "16", label: "TV Movie" },
    { id: "17", label: "Thriller" },
    { id: "18", label: "War" },
    { id: "19", label: "Western" },
  ];

  return (
    <Bg theme={theme}>
      <Navbar />
      <Container>
        <Banner />

        {generes.map(({ id, label }) => (
          <Row key={id} title={label} />
        ))}
      </Container>
    </Bg>
  );
});
