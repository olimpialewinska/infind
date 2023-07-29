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

export const Container = styled.div`
  display: flex;
  padding-top: 20px;
  flex-direction: column;
  width: 100%;
  max-height: 100%;
  overflow: auto;
  align-items: center;
`;

export const ChatSearchContainer = styled.div`
  width: 500px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  margin-bottom: 10px;

  @media (max-width: 768px) {
    width: 98%;
  }
`;

export const ChatSearch = styled.div<{ theme: "dark" | "light" }>`
  background-color: ${({ theme }) =>
    theme === "dark" ? "rgba(255,255,255, 0.1)" : "rgba(0,0,0, 0.1)"};
  width: 100%;
  padding: 10px;
  border-radius: 24px;
  display: flex;
`;

export const ChatSearchInput = styled.input<{ theme: "dark" | "light" }>`
  background-color: transparent;
  border: none;
  outline: none;
  font-size: 20px;
  flex: 1;
  margin: 0;
  margin-left: 10px;
  color: ${({ theme }) =>
    theme === "dark" ? "rgba(255,255,255,0.8)" : "rgba(0,0,0,0.8)"};
`;

export const SearchIcon = styled.div<{ theme: "dark" | "light" }>`
  min-width: 24px;
  height: 24px;
  border-radius: 50%;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  filter: ${({ theme }) => (theme === "dark" ? "invert(1)" : "invert(0)")};
  opacity: 0.7;
  background-image: url("/search.png");
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  width: 80%;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
  max-width: 1800px;

  @media (max-width: 768px) {
    width: 90%;
  }
`;

export const FilterContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
  align-items: center;
  justify-content: space-between;
  padding: 4px 12px;
  border-radius: 24px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  opacity: 0.8;
  cursor: pointer;
  transition: 0.15s all;

  &:hover {
    opacity: 1;
  }
`;

export const FilterTitle = styled.div`
  font-size: 14px;
`;

export const FilterIcon = styled.div<{ theme: "dark" | "light" }>`
  min-width: 18px;
  height: 18px;
  border-radius: 50%;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  filter: ${({ theme }) => (theme === "dark" ? "invert(1)" : "invert(0)")};
`;

export const ItemsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  align-items: center;
  max-width: 1800px;

  @media (max-width: 768px) {
    margin: 0;
    height: auto;
    width: 100%;
  }
`;
