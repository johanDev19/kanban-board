import styled from 'styled-components'

export const FilterContainer = styled.div`
  display: flex;
  align-items: center;
  position: relative;
`

export const Result = styled.div`
  position: absolute;
  top: 23px;
  left: 0px;
  width: 215px;
  padding: 26px 23px;
  background-color: #FCFCFC;
  border-radius: 4px;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.265188);
  box-sizing: border-box;
`

export const ItemsContainer = styled.ul`
  list-style: none;
  padding: 0px;
  display: flex;
  flex-direction: column;
`

export const Item = styled.li`
  color: #3F3939;
  font-size: 16px;
  display: flex;
  align-items: center;
  margin-bottom: 17px;
  cursor: pointer;

  &:hover {
    opacity: .5;
  }
`
