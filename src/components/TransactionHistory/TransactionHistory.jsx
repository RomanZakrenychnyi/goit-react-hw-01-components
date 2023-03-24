import PropTypes from 'prop-types';
import {
  TransactionTablet,
  TransactionTd,
  TransactionTh,
} from './TransactionHistory.Styled';

const TransactionHistory = ({ items }) => {
  return (
    <TransactionTablet>
      <thead>
        <tr>
          <TransactionTh>Type</TransactionTh>
          <TransactionTh>Amount</TransactionTh>
          <TransactionTh>Currency</TransactionTh>
        </tr>
      </thead>

      <tbody>
        {items.map(({ amount, currency, id, type }) => (
          <tr key={id}>
            <TransactionTd>{type}</TransactionTd>
            <TransactionTd>{amount}</TransactionTd>
            <TransactionTd>{currency}</TransactionTd>
          </tr>
        ))}
      </tbody>
    </TransactionTablet>
  );
};

TransactionHistory.propTypes = {
  amount: PropTypes.string,
  currency: PropTypes.string,
  id: PropTypes.string,
  type: PropTypes.string,
};

export default TransactionHistory;