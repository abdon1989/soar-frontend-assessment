import React from 'react';
import clsx from 'clsx';

interface CreditCardProps {
  balance: number;
  cardHolder: string;
  validThru: string;
  cardNumber: string;
  mode?: 'light' | 'dark'; // light (default) or dark
}

const CreditCard: React.FC<CreditCardProps> = ({
  balance,
  cardHolder,
  validThru,
  cardNumber,
  mode = 'light',
}) => {
  const isDark = mode === 'dark';

  return (
    <div
        className={clsx(
            'rounded-2xl p-5 flex flex-col justify-between border',
            {
            'bg-white text-gray-800 border-gray-200': !isDark,
            'bg-gradient-to-r from-[#5B5A6F] to-black text-white border-gray-700': isDark,
            }
        )}
        >
        <div className="flex justify-between items-start">
            <div>
            <p className="text-xs">
                Balance
            </p>
            <h2 className={clsx('text-xl font-semibold', isDark ? 'text-white' : 'text-state-blue')}>
                ${balance.toLocaleString()}
            </h2>
            </div>
            <div className='w-8 h-8'>
              <img
                src={isDark ? "/images/credit-card/chip-card.png" : "/images/credit-card/chip-card-black.png"}
                alt="Chip Card"
              />                
            </div>
        </div>

        <div className="flex gap-12 text-xs mt-6">
          <div className="w-1/2">
            <p className={clsx('uppercase', isDark ? 'text-white/70' : 'text-[#718EBF]')}>Card Holder</p>
            <p className="text-[15px]">{cardHolder}</p>
          </div>
          <div className="w-1/2">
            <p className={clsx('uppercase', isDark ? 'text-white/70' : 'text-[#718EBF]')}>Valid Thru</p>
            <p className="text-[15px]">{validThru}</p>
          </div>
        </div>

        <div className={clsx('mt-6 mb-2 flex justify-between items-center', isDark ? 'border-gray-700' : 'border-gray-200')}>
            <p className="tracking-widest text-xl">{cardNumber}</p>
            <div className="flex gap-1">
            <div className={clsx('w-6 h-6 rounded-full z-10', isDark ? 'bg-white/50' : 'bg-[#9199AF]/50')} />
            <div className={clsx('w-6 h-6 rounded-full -ml-4 z-0', isDark ? 'bg-white/50' : 'bg-[#9199AF]/50')} />
            </div>
        </div>
    </div>
  );
};

export default CreditCard;