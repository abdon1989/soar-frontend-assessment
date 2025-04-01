import React, { JSX } from 'react';
import { FaRegCreditCard, FaPaypal, FaUserCircle } from 'react-icons/fa';
import { DepositCardIcon, DepositJemiIcon, DepositPaypalIcon } from "../../icons";

type Transaction = {
  id: number;
  icon: JSX.Element;
  background: string;
  title: string;
  date: string;
  amount: number;
};

const transactions: Transaction[] = [
  {
    id: 1,
    icon: <FaRegCreditCard className="text-yellow-500 text-lg" />,
    background: 'bg-light-cream',
    title: 'Deposit from my Card',
    date: '28 January 2021',
    amount: -850,
  },
  {
    id: 2,
    icon: <FaPaypal className="text-blue-500 text-lg" />,
    background: 'bg-pale-periwinkle',
    title: 'Deposit Paypal',
    date: '25 January 2021',
    amount: 2500,
  },
  {
    id: 3,
    icon: <FaUserCircle className="text-teal-500 text-lg" />,
    background: 'bg-mint-cream',
    title: 'Jemi Wilson',
    date: '21 January 2021',
    amount: 5400,
  },
];

const RecentTransactions: React.FC = () => {
  return (
    <div className="flex-grow bg-white dark:bg-gray-900 p-5 rounded-xl">
      {transactions.map((tx) => (
        <div key={tx.id} className="flex items-center justify-between mb-5 last:mb-0">
          <div className="flex items-center gap-3">
            <div className={`w-12 h-12 flex items-center justify-center rounded-full ${ tx.background }`}>
              {tx.icon}
            </div>
            <div className="text-sm">
              <p className="text-charcoal text-base dark:text-white">{tx.title}</p>
              <p className="text-steel-blue text-sm">{tx.date}</p>
            </div>
          </div>
          <div
            className={`text-sm font-medium ${
              tx.amount < 0 ? 'text-red-500' : 'text-green-500'
            }`}
          >
            {tx.amount < 0 ? `-$${Math.abs(tx.amount).toLocaleString()}` : `+$${tx.amount.toLocaleString()}`}
          </div>
        </div>
      ))}
    </div>
  );
};

export default RecentTransactions;
