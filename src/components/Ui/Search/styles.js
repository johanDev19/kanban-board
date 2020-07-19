import styled from "styled-components";

export const SearchContainer = styled.div`
  position: relative;

  & > img {
    position: absolute;
    top: 6px;
    right: 10px;
  }
`;

export const SearchInput = styled.input`
  min-width: 200px;
  background-color: transparent;
  border: 1px solid #b2b6b2;
  border-radius: 4px;
  padding: 5px 45px 5px 5px;
  box-sizing: border-box;
`;
