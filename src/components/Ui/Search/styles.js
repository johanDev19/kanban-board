import styled from "styled-components";

export const SearchContainer = styled.div`
  position: relative;
`;

export const SearchInput = styled.input`
  min-width: 200px;
  background-color: transparent;
  border: 1px solid #b2b6b2;
  border-radius: 4px;
  padding: 5px 45px 5px 5px;
  box-sizing: border-box;
`;

export const CloseButton = styled.span`
  font-weight: bold;
  color: #b2b6b2;
  position: absolute;
  top: 1px;
  right: 10px;
  font-size: 20px;
`;
