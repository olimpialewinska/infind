import { observer } from "mobx-react-lite";
import { Container, Content, SeeMoreBtn, Title, Wrapper } from "./style";
import { Item } from "./Item";
import { items } from "@/components/exampleFilmList";

interface IProps {
  title: string;
}

export const Row = observer((props: IProps) => {
  return (
    <Container>
      <Wrapper>
        <Title>{props.title}</Title>
        <SeeMoreBtn>See more ➔</SeeMoreBtn>
      </Wrapper>
      <Content>
        {items.map((item) => {
          return <Item key={item.id} element={item} />;
        })}
      </Content>
    </Container>
  );
});
