import PropTypes from 'prop-types';
import s from './transactions.module.css';

const TransactionHistory = ({ items }) => {
  return (
    <table className={s.transactionHistory}>
      <thead className={s.head}>
        <tr className={s.tableRow}>
          <th className={s.tableCell}>Type</th>
          <th className={s.tableCell}>Amount</th>
          <th className={s.tableCell}>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map(item => (
          <TransactionItem
            key={item.id}
            type={item.type}
            amount={item.amount}
            currency={item.currency}
          />
        ))}
      </tbody>
    </table>
  );
};

const TransactionItem = ({ id, type, amount, currency }) => {
  return (
    <tr className={s.tableRow} key={id}>
      <td className={s.tableCell}>{type}</td>
      <td className={s.tableCell}>{amount}</td>
      <td className={s.tableCell}>{currency}</td>
    </tr>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.array,
};

TransactionItem.propTypes = {
  id: PropTypes.string,
  type: PropTypes.string,
  amount: PropTypes.string,
  currency: PropTypes.string,
};

export default TransactionHistory;
