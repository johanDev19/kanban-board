import styled from 'styled-components'


export const CardContainer = styled.div`
  width: 295px;
  min-height: 140px;
  border: 1px solid #D7D6D6;
  background-color: #FFF;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.105004);
  border-radius: 4px;
  padding: 18px 12px 0px 12px;
`

export const CardTitle = styled.h6`
  font-weight: bold;
  font-size: 16px;
  color: #3F3939;
  margin: 0px;
`

export const CardDescription = styled.p`
  font-size: 14px;
  font-weight: normal;
  margin: 6px 0px 0px 0px;
  color: #3F3939;
  word-break: break-word;
`

export const CardAssigneeContainer = styled.div`
  padding-bottom: 6px;
  margin-top: 45px;
  border-bottom: 1px solid #F2F2F2;
`

export const CardAssigneeName = styled.span`
  font-size: 14px;
  color: #3F3939;
  word-break: break-word;
`

export const CardDueDateContainer = styled.div`
  padding-top: 4px;
  margin-bottom: 15px;
`

export const CardDueDate = styled.span`
  font-size: 14px;
  color: #3F3939; 
`
