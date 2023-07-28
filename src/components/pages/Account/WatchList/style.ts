import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  overflow: auto;
  align-items: center;
  max-width: 1800px;

  @media (max-width: 768px) {
    margin: 0;
    margin-top: 10px;
    height: auto;
    overflow: auto;
    width: 100%;
  }
`;
