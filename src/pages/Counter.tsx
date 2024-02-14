import React, { useRef, useState } from 'react';

const Counter:React.FC = () => {
  const [value, setValue] = useState(0);
  const step = useRef(1);

  const setStep = (value: number) => {
    step.current = value;
  };

  const increment = () => {
    setValue((state) => state + step.current);
  };

  const decrement = () => {
    setValue((state) => state - step.current);
  };

  const reset = () => {
    setValue(0);
  };
  return (
    <>
      <h1 className=' text-2xl mb-4'>Counter</h1>
      <div className=' flex flex-col justify-center items-center'>
        <h1>{value}</h1>
        <div>
          <button
            onClick={decrement}
            className=' text-sm p-3 border border-gray-500 rounded-lg ml-5 mr-5'
          >
            -
          </button>
          <button
            onClick={increment}
            className=' text-sm p-3 border border-gray-500 rounded-lg mr-5'
          >
            +
          </button>
        </div>
        <div className='  mt-4 flex gap-4'>
          <span>Steps</span>
          <input
            type='number'
            id='step'
            defaultValue={step.current}
            onChange={(e) =>
              setStep((e.target as HTMLInputElement).valueAsNumber)
            }
            title='Step value'
            className=' border border-gray-500 px-2 '
          />
        </div>
        <button
          onClick={reset}
          className=' px-4 py-4 border border-gray-500 rounded-2xl ml-5 mt-4'
        >
          Reset
        </button>
      </div>
    </>
  );
};

export default Counter;
