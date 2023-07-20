import styled from "styled-components";

export const Wrapper = styled.div<{ theme: "dark" | "light" }>`
  width: 400px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px;
  background-color: rgba(255, 255, 255, 0.1);
  color: ${({ theme }) =>
    theme === "dark" ? "rgba(255,255,255, 0.7)" : "rgba(0, 0, 0, 0.7)"};
  transition: 0.3s all;
  margin-top: 60px;

  @media (max-width: 768px) and (min-width: 500px) {
    width: 70vw;
    margin-top: 0;
  }

  @media (max-width: 500px) {
    width: 90vw;
    margin-top: 0;
  }
`;

export const Title = styled.div`
  font-size: 24px;
  margin-bottom: 20px;
  text-transform: uppercase;
  font-weight: 400;
  letter-spacing: 2px;
`;

export const Input = styled.input<{ theme: "dark" | "light" }>`
  width: 100%;
  height: 40px;
  border: none;
  border-radius: 5px;
  background-color: ${({ theme }) =>
    theme === "dark" ? "rgba(255,255,255, 0.1)" : "rgba(0, 0, 0, 0.1)"};
  color: ${({ theme }) =>
    theme === "dark" ? "rgba(255,255,255, 0.7)" : "rgba(0, 0, 0, 0.7)"};
  padding: 0 10px;
  box-sizing: border-box;
  margin-bottom: 10px;
  transition: 0.2s all;

  &:focus {
    outline: none;
    background-color: ${({ theme }) =>
      theme === "dark" ? "rgba(255,255,255, 0.15)" : "rgba(0, 0, 0, 0.15)"};
  }

  &::placeholder {
    color: ${({ theme }) =>
      theme === "dark" ? "rgba(255,255,255, 0.5)" : "rgba(0, 0, 0, 0.5)"};
  }
`;

export const Button = styled.button<{ theme: "dark" | "light" }>`
  width: 50%;
  height: 40px;
  border: none;
  border-radius: 5px;
  background-color: ${({ theme }) =>
    theme === "dark" ? "rgba(255,255,255, 0.1)" : "rgba(0, 0, 0, 0.1)"};
  color: ${({ theme }) =>
    theme === "dark" ? "rgba(255,255,255, 0.7)" : "rgba(0, 0, 0, 0.7)"};
  padding: 0 20px;
  transition: 0.2s all;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) =>
      theme === "dark" ? "rgba(255,255,255, 0.15)" : "rgba(0, 0, 0, 0.15)"};
  }
`;

export const Validation = styled.div`
  font-size: 14px;
  width: 100%;
  text-align: center;
  margin-bottom: 10px;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 28px;
`;

export const Paragraph = styled.div`
  font-size: 14px;
  text-align: center;
`;

export const Link = styled.div`
  font-size: 14px;
  text-align: center;
  font-weight: 600;
  margin-left: 5px;
  cursor: pointer;
  transition: 0.2s all;

  &:hover {
    opacity: 0.7;
  }
`;

export const Item = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  justify-content: center;
  cursor: pointer;
  transition: 0.15s all;
  background-color: aliceblue;
  border-radius: 5px;

  &:hover {
    opacity: 0.9;
  }
`;
