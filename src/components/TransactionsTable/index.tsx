import { useTransactions } from '../../hooks/useTransactions';
import { currencyFormatter, dateFormatter } from '../../utilities/formatData';

import { Container } from './styles';

export function TransactionsTable() {
  const { transactions } = useTransactions();

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction) => {
            return (
              <tr key={transaction.id}>
                <td>{transaction.title}</td>
                <td className={transaction.type}>
                  {transaction.type === 'withdraw'
                    ? `- ${currencyFormatter(transaction.amount)}`
                    : currencyFormatter(transaction.amount)}
                </td>
                <td>{transaction.category}</td>
                <td>{dateFormatter(transaction.createdAt)}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </Container>
  );
}
