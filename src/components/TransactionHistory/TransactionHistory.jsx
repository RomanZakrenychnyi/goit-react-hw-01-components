import PropTypes from 'prop-types';
import './TransactionHistory.css';

const TransactionHistory = ({ items }) => {
  return (
    <table className="transaction-history">
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map(({amount, currency, id, type}) => (
          <tr key={id}>
            <td>{type}</td>
            <td>{amount}</td>
            <td>{currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

TransactionHistory.propTypes = {
    amount: PropTypes.string,
    currency: PropTypes.string,
    id: PropTypes.string,
    type: PropTypes.string
}

export default TransactionHistory;
