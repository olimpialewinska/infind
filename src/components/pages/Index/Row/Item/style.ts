import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 200px;
  height: 100%;
  border-radius: 10px;
  background-color: rgba(255, 255, 255, 0.1);
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  margin-right: 10px;
  position: relative;
  z-index: 10;
`;

export const Img = styled.div`
  width: 100%;
  background-image: url("https://kinogram.pl/wp-content/uploads/2023/03/Kinogram_John-Wick-4.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 240px;
  border-radius: 10px 10px 0 0;
  background-color: rgba(255, 255, 255, 0.1);
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 10px;
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
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;

  overflow: hidden;
  text-overflow: ellipsis;
`;

export const Date = styled.div`
  font-size: 12px;
  opacity: 0.4;
  margin-bottom: 0;
`;

export const HeartBg = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 40px;
  height: 40px;
  border-radius: 0 10px 0 10px;
  background-color: rgba(255, 255, 255, 0.1);
`;

export const Heart = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-size: 26px;
  background-repeat: no-repeat;
  background-position: center;
  background-image: url("/heart-outlined.png");
  filter: invert(1);
  opacity: 0.6;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: 0.2s all;
  z-index: 10;

  &:hover {
    opacity: 1;
  }
`;
