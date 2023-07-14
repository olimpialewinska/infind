import styled from "styled-components";

export const SettingsIcon = styled.div`
  width: 24px;
  height: 24px;
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
  position: relative;

  &:hover {
    opacity: 1;
  }

  &::after {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
    filter: none;
    z-index: -1;
  }
`;

export const Settings = styled.div`
  width: 300px;
  position: absolute;
  top: 50px;
  right: 10px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 10;
  transition: 0.2s all;

  &:focus {
    outline: none;
  }
`;

export const Select = styled.select`
  &:focus {
    outline: none;
  }
`;

export const Row = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  &:not(:last-child) {
    margin-bottom: 16px;
  }
`;

export const Label = styled.label`
  font-size: 14px;
  font-weight: 500;
`;
