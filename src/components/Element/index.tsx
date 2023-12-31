import { observer } from "mobx-react-lite";
import { Content, Date, Description, Image, Title, Wrapper } from "./style";
import { store } from "@/stores";
import { IElement } from "@/utils/interfaces/IElement";

interface IProps {
  element: IElement;
}

export const Element = observer((props: IProps) => {
  return (
    <Wrapper theme={store.theme.currentTheme}>
      <Image />
      <Content>
        <Title>{props.element.title}</Title>
        <Description>{props.element.description}</Description>
        <Date>{props.element.date}</Date>
      </Content>
    </Wrapper>
  );
});
