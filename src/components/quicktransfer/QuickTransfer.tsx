import React from 'react';

import { SendIcon } from "../../icons";
import Label from '../form/Label';

interface User {
  name: string;
  role: string;
  avatar: string;
}

const users: User[] = [
  {
    name: 'Livia Bator',
    role: 'CEO',
    avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
  },
  {
    name: 'Randy Press',
    role: 'Director',
    avatar: 'https://randomuser.me/api/portraits/men/52.jpg',
  },
  {
    name: 'Workman',
    role: 'Designer',
    avatar: 'https://randomuser.me/api/portraits/men/43.jpg',
  },
];

const QuickTransfer: React.FC = () => {
  return (
    <div className="flex-grow bg-white dark:bg-gray-900 p-6 rounded-xl space-y-4">
      {/* Avatars */}
      <div className="flex items-center justify-between h-2/3">
        {users.map((user) => (
          <div key={user.name} className="flex flex-col items-center text-sm">
            <img
              src={user.avatar}
              alt={user.name}
              className="w-16 h-16 rounded-full object-cover mb-1"
            />
            <p className="font-semibold text-charcoal dark:text-white">{user.name}</p>
            <p className="text-xs text-steel-blue">{user.role}</p>
          </div>
        ))}
        <div className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 text-xl text-gray-500 dark:bg-gray-700 dark:text-white">
          →
        </div>
      </div>

      {/* Input + Send */}
      <div className="flex items-center justify-between h-1/3 pb-4">
        <Label className="text-sm font-normal lg:text-base text-steel-blue mr-6 text-center min-w-[120px]">Write Amount</Label>
        <div className="flex-1 flex items-center bg-gray-100 rounded-full">
          <input
            type="text"
            value=""
            placeholder="525.50"
            className="flex-1 rounded-full bg-gray-100 py-2.5 pl-6 text-sm lg:text-base text-gray-800 shadow-theme-xs placeholder:text-steel-blue focus:outline-hidden w-1/2"
          />
          <button className="bg-black text-white px-4 py-2 rounded-full flex items-center gap-1 hover:bg-gray-800">
            Send 
            <SendIcon className="text-white text-2xl hover:text-gray-700 ml-2" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default QuickTransfer;
