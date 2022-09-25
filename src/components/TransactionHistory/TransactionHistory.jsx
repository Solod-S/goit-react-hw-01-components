import PropTypes from 'prop-types';
import {
  TransactionTable,
  TransactionTableHead,
  TransactionTableRow,
  TransactionTableHeader,
  TransactionTableBody,
  TransactionTableData,
} from './TransactionHistory.styled';
export const TransactionHistory = ({ transactions }) => {
  // const { id, type, amount, currency } = transactions;
  return (
    <TransactionTable>
      <TransactionTableHead>
        <TransactionTableRow>
          <TransactionTableHeader>Type</TransactionTableHeader>
          <TransactionTableHeader>Amount</TransactionTableHeader>
          <TransactionTableHeader>Currency</TransactionTableHeader>
        </TransactionTableRow>
      </TransactionTableHead>
      <TransactionTableBody>
        {transactions.map(({ id, type, amount, currency }) => {
          return (
            <TransactionTableRow key={id}>
              <TransactionTableData>{type}</TransactionTableData>
              <TransactionTableData>{amount}</TransactionTableData>
              <TransactionTableData>{currency}</TransactionTableData>
            </TransactionTableRow>
          );
        })}
      </TransactionTableBody>
    </TransactionTable>
  );
};
TransactionHistory.propTypes = {
  transactions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};
