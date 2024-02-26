import React, { useState } from 'react';

// https://www.youtube.com/watch?v=yAMsX-JFqrY
const Stars = ({
  className = 'text-gray-200',
  onClick,
  onMouseOver,
  onMouseOut,
}: {
  className?: string;
  onClick: () => void;
  onMouseOver: () => void;
  onMouseOut: () => void;
}) => {
  return (
    <svg
      className={`w-16 h-16 text-gray-200 cursor-pointer ${className}`}
      aria-hidden='true'
      xmlns='http://www.w3.org/2000/svg'
      fill='currentColor'
      viewBox='0 0 24 24'
      onClick={onClick}
      onMouseOver={onMouseOver}
      onMouseOut={onMouseOut}
    >
      <path d='M13.8 4.2a2 2 0 0 0-3.6 0L8.4 8.4l-4.6.3a2 2 0 0 0-1.1 3.5l3.5 3-1 4.4c-.5 1.7 1.4 3 2.9 2.1l3.9-2.3 3.9 2.3c1.5 1 3.4-.4 3-2.1l-1-4.4 3.4-3a2 2 0 0 0-1.1-3.5l-4.6-.3-1.8-4.2Z' />
    </svg>
  );
};

const Rating: React.FC = () => {
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  return (
    <div>
      <h1 className=' text-4xl font-semibold mb-10'>Star Rating Component</h1>
      <div className=' flex justify-center gap-6'>
        {[...Array(5)].map((_, index) => (
          <Stars
            key={index}
            className={`${index + 1 <= rating ? ' text-yellow-400' : ''} ${
              index + 1 <= hoverRating ? ' text-yellow-400' : ''
            }`}
            onClick={() => {
              setRating(index + 1);
            }}
            onMouseOver={() => {
              setHoverRating(index + 1);
            }}
            onMouseOut={() => {
              setHoverRating(0);
            }}
          />
        ))}
      </div>
      <h1 className=' text-4xl font-semibold mt-10'>Rating Count : {rating}</h1>
      <h1 className=' text-4xl font-semibold mt-10'>Hover Rating Count : {hoverRating}</h1>
    </div>
  );
};

export default Rating;
