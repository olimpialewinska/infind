import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  gap: 20px;
  flex-direction: row;
  width: 100%;
  height: 100%;
  overflow: hidden;
  margin: 20px;
  margin-top: 10px;
  align-items: center;
  justify-content: center;
  max-width: 1800px;

  @media (max-width: 768px) {
    flex-direction: column;
    margin: 0;
    margin-top: 10px;
    height: auto;
    overflow: auto;
  }
`;

export const Content = styled.div<{ theme: "light" | "dark" }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 40%;
  height: 100%;
  padding: 20px;
  border-radius: 20px;
  border: 1px solid
    ${(props) =>
      props.theme === "light" ? "rgba(0,0,0, 0.1)" : "rgba(255,255,255, 0.1)"};

  @media (min-width: 768px) and (max-width: 1024px) {
    width: 45%;
  }

  @media (max-width: 768px) {
    width: 90%;
    height: auto;
  }
`;

export const Title = styled.div`
  font-size: 16px;
  margin-bottom: 16px;
  opacity: 0.6;
`;

export const Input = styled.textarea<{ theme: "light" | "dark" }>`
  width: 100%;
  height: 80px;
  border: none;
  outline: none;
  margin-bottom: 10px;
  resize: none;
  font-size: 14px;
  padding: 10px;
  border-radius: 10px;
  margin-right: 0;
  background-color: ${(props) =>
    props.theme === "light" ? "rgba(0,0,0, 0.1)" : "rgba(255,255,255, 0.1)"};
`;

export const ItemBox = styled.div`
  width: 100%;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-y: auto;
`;

export const TextQuery = styled.div<{ theme: "light" | "dark" }>`
  background-color: ${(props) =>
    props.theme === "light" ? "rgba(0,0,0, 0.1)" : "rgba(255,255,255, 0.1)"};
  border-radius: 10px;
  padding: 10px;
  margin-bottom: 10px;
  width: 100%;
  font-size: 14px;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: center;
`;
