"use client";

import { observer } from "mobx-react-lite";
import { Container, ModalBg } from "./style";
import { Element } from "../Element";

interface NewModalProps {
  visible: boolean;
  hide: () => void;
}

export const FilterModal = observer((props: NewModalProps) => {
  return (
    <ModalBg
      style={{
        opacity: props.visible ? 1 : 0,
        pointerEvents: props.visible ? "inherit" : "none",
      }}
      onClick={props.hide}
    >
      <Container></Container>
    </ModalBg>
  );
});
