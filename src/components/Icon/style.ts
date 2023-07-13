import styled from "styled-components";

export const IconBox = styled.div`
  width: 30px;
  height: 30px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  opacity: 0.6;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: 0.15s all;
  margin: 0 5px;

  &:hover {
    opacity: 1;
  }
`;
