import React from 'react';
import { PillProps } from '../../constants';

const Pill: React.FC<PillProps> = ({ label, onClick, selected }) => {
  return (
    <button
      onClick={() => onClick(label)}
      className={`m-1 px-4 py-2 rounded-full border ${selected ? 'bg-blue-500 text-white border-blue-500' : 'bg-gray-200 text-gray-700 border-gray-300 hover:bg-gray-300'}`}
    >
      {label}
    </button>
  );
};

export default Pill;