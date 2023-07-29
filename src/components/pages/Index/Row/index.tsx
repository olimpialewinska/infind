import { observer } from "mobx-react-lite";
import { Container, Content, SeeMoreBtn, Title, Wrapper } from "./style";
import { IElement } from "../../Account/FindSimilar";
import { Item } from "./Item";

interface IProps {
  title: string;
}

const items: IElement[] = [
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
  {
    id: "5",
    title: "Test",
    img: "test",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    date: "2021",
  },
  {
    id: "6",
    title: "Test",
    img: "test",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    date: "2021",
  },
  {
    id: "7",
    title: "Test",
    img: "test",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    date: "2021",
  },
  {
    id: "8",
    title: "Test",
    img: "test",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ahhahahhahahhahahhahahahha jjsjj jsjjsj jsjjs jsjjs jajj ahsha hdha",
    date: "2021",
  },
];

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
