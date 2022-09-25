import styled from 'styled-components';
export const TransactionTable = styled.table`
  width: 265px;
  text-align: center;
  margin-bottom: 20px;
`;
export const TransactionTableHead = styled.thead``;
export const TransactionTableRow = styled.tr`
  cursor: pointer;
  background-color: ${p => p.theme.colors.white};
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14),
    0px 2px 1px rgba(0, 0, 0, 0.2);
  transition: transform 250ms linear;
  :not(:last-child) {
    margin-bottom: ${p => p.theme.space[3]}px;
  }
  :hover {
    transform: scale(1.2);
  }
`;
export const TransactionTableHeader = styled.th`
  color: ${p => p.theme.colors.primaryText};
  background-color: ${p => p.theme.colors.blue};
  font-weight: ${p => p.theme.fontWeight.bolt};
  padding-top: ${p => p.theme.space[3]}px;
`;
export const TransactionTableBody = styled.tbody``;
export const TransactionTableData = styled.td``;
