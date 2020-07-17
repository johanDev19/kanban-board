import styled from "styled-components";

export const MenuContainer = styled.ul`
  padding: 0px;
  margin: 0px;
  display: flex;
  list-style: none;
  height: 100%;
  align-items: center;
`;

export const MenuItem = styled.li`
  font-size: 14px;
  color: #454444;
  display: flex;
  padding-right: 40px;
  align-items: center;

  &:last-child {
    padding-right: 22px;
  }
`;
