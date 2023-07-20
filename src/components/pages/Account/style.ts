import styled from "styled-components";

export const Buttons = styled.div`
  display: flex;
  justify-content: center;
  font-size: 12px;
  flex-wrap: wrap;
  margin-bottom: 16px;
`;

export const Button = styled.div<{ theme: "dark" | "light"; active: boolean }>`
  background-color: ${({ theme, active }) =>
    active
      ? theme === "dark"
        ? "rgba(255,255,255, 0.1)"
        : "rgba(0, 0, 0, 0.1)"
      : "transparent"};

  border-radius: 24px;
  border: ${({ theme }) =>
    theme === "dark"
      ? "1px solid rgba(255,255,255, 0.2)"
      : "1px solid rgba(0, 0, 0, 0.2)"};

  color: ${({ theme }) =>
    theme === "dark" ? "rgba(255,255,255, 0.8)" : "rgba(0, 0, 0, 0.8)"};

  margin: 0 4px;
  padding: 8px 12px;
  transition: 0.2s background-color, 0.2s border;
  cursor: pointer;
  margin-top: 8px;
  &:hover {
    background-color: ${({ theme }) =>
      theme === "dark" ? "rgba(255,255,255, 0.15)" : "rgba(0, 0, 0, 0.15)"};
    border: 1px solid transparent;
  }
`;
