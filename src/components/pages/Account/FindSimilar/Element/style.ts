import styled from "styled-components";

export const Wrapper = styled.div<{ theme: "light" | "dark" }>`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100px;
  border-radius: 10px;
  border: 1px solid
    ${(props) =>
      props.theme === "light" ? "rgba(0,0,0, 0.1)" : "rgba(255,255,255, 0.1)"};
  margin-bottom: 10px;
  padding: 10px;
`;

export const Image = styled.div`
  min-width: 60px;
  height: 100%;
  border-radius: 4px;
  background-color: rgba(255, 255, 255, 0.1);
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 0 10px;
  max-height: 100%;
`;

export const Title = styled.div`
  font-size: 16px;
  font-weight: 600;
  opacity: 0.8;
  margin-bottom: 2px;
`;

export const Description = styled.div`
  justify-content: center;
  flex: 1;
  font-size: 14px;
  width: 100%;
  opacity: 0.6;
  margin-bottom: 0;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const Date = styled.div`
  font-size: 12px;
  opacity: 0.4;
  margin-bottom: 0;
`;
