import { styled } from "styled-components";

export const Bg = styled.div<{ theme: "dark" | "light" }>`
  width: 100%;
  height: 100vh;
  padding-top: 60px;
  background-color: ${({ theme }) => (theme === "dark" ? "#242526" : "#fff")};
  color: ${({ theme }) => (theme === "dark" ? "#fff" : "#000")};
  transition: 0.3s all;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
