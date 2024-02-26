import React from 'react';

const Stars = ({ color = 'text-gray-200' }: { color?: string }) => {
  return (
    <svg
      className={`w-16 h-16 hover:text-yellow-400 ${color}`}
      aria-hidden='true'
      xmlns='http://www.w3.org/2000/svg'
      fill='currentColor'
      viewBox='0 0 24 24'
    >
      <path d='M13.8 4.2a2 2 0 0 0-3.6 0L8.4 8.4l-4.6.3a2 2 0 0 0-1.1 3.5l3.5 3-1 4.4c-.5 1.7 1.4 3 2.9 2.1l3.9-2.3 3.9 2.3c1.5 1 3.4-.4 3-2.1l-1-4.4 3.4-3a2 2 0 0 0-1.1-3.5l-4.6-.3-1.8-4.2Z' />
    </svg>
  );
};

const Rating: React.FC = () => {
  return (
    <div>
      <h1 className=' text-4xl font-semibold mb-10'>Star Rating Component</h1>
      <div className=' flex justify-center gap-6'>
        <Stars color={'text-gray-200'} />
        <Stars color={'text-gray-200'} /> <Stars color={'text-gray-200'} />
        <Stars color={'text-gray-200'} /> <Stars color={'text-gray-200'} />
      </div>
      <h1 className=' text-4xl font-semibold mt-10'>Rating Count : 5</h1>
    </div>
  );
};

export default Rating;
