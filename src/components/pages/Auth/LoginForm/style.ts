import styled from "styled-components";

export const Item = styled.div<{ theme: "dark" | "light" }>`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 10px;
  transition: 0.1s all;
  cursor: pointer;
  margin-top: 0;
  border-radius: 6px;
  position: relative;
  margin-bottom: 10px;
  background-color: ${({ theme }) =>
    theme === "dark" ? "rgba(255,255,255, 0.03)" : "rgba(0, 0, 0, 0.03)"};

  &::after {
    content: "";
    width: calc(100% - 16px);
    height: 1px;
    background-color: rgba(255, 255, 255, 0.1);
    position: absolute;
    bottom: 0;
  }
  &:hover {
    background-color: ${({ theme }) =>
      theme === "dark" ? "rgba(255,255,255, 0.05)" : "rgba(0, 0, 0, 0.05)"};
  }
  &:hover:after {
    opacity: 0;
  }
`;

export const Text = styled.div`
  margin: 0;
  font-size: 14px;
  margin-left: 8px;
`;

export const Arrow = styled.div<{ theme: "dark" | "light" }>`
  width: 24px;
  height: 24px;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  background-image: url("/arrow-right.png");
  filter: ${({ theme }) => (theme === "dark" ? "invert(1)" : "none")};

  margin-left: auto;
  margin-right: 10px;
  opacity: 0.7;
  transition: 0.1s all;

  ${Item}:hover & {
    opacity: 1;

    transform: translateX(6px);
  }
`;
