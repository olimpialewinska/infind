import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 100%;
  min-height: 340px;
  margin-bottom: 20px;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 0 20px;
  box-sizing: border-box;
  margin-bottom: 10px;
`;

export const Title = styled.div`
  font-size: 16px;
  font-weight: 600;
  opacity: 0.8;
`;

export const SeeMoreBtn = styled.div`
  font-size: 12px;
  opacity: 0.6;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  padding-left: 18px;
  width: 100%;
  height: 100%;
  overflow: auto;
  align-items: flex-start;
  justify-content: flex-start;
  overflow-x: auto;
  overflow-y: hidden;
  -webkit-overflow-scrolling: touch;
  &::-webkit-scrollbar {
    display: none;
  }

  @media (max-width: 768px) {
    padding-left: 6px;
  }
`;
