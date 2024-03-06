import React from 'react';

interface Props {
  value: number;
}
const ProgressBar: React.FC<Props> = ({ value }) => {
  return (
    <div className=' flex flex-col justify-center items-center gap-4 relative '>
      <h1>Progress Bar</h1>
      <div
        className={`absolute border border-gray-200 w-[${value}] rounded-full h-6 left-[25%] top-10 bg-green-400`}
      ></div>
      <div className=' border border-gray-200 w-1/2 rounded-full h-6 flex justify-center items-center'>
        {value}%
      </div>
    </div>
  );
};

export default ProgressBar;
