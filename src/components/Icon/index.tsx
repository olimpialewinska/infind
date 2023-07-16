import { observer } from "mobx-react-lite";
import { IconBox } from "./style";
import { store } from "@/stores";

interface IconProps {
  icon: string;
  size?: number;
  margin?: string;
  onClick?: () => void;
  filter?: string;
}

export const Icon = observer((props: IconProps) => {
  return (
    <IconBox
      onClick={props.onClick}
      style={{
        width: props.size,
        height: props.size,
        backgroundImage: `url(/${props.icon})`,
        margin: props.margin,
        filter: props.filter
          ? props.filter
          : store.theme.currentTheme === "dark"
          ? "invert(1)"
          : "none",
      }}
    ></IconBox>
  );
});
