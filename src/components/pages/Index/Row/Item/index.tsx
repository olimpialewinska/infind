import { IElement } from "@/utils/interfaces/IElement";
import {
  Wrapper,
  Img,
  Title,
  Description,
  Date,
  Content,
  HeartBg,
  Heart,
} from "./style";

interface IProps {
  element: IElement;
}

export const Item = (props: IProps) => {
  return (
    <Wrapper>
      <HeartBg>
        <Heart />
      </HeartBg>
      <Img />

      <Content>
        <Title>{props.element.title}</Title>
        <Description>{props.element.description}</Description>
        <Date>{props.element.date}</Date>
      </Content>
    </Wrapper>
  );
};
