import React, { useState, useEffect } from 'react';

const Debouncing: React.FC = () => {
  const [query, setQuery] = useState<string>('');
  const [value, setValues] = useState([]);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
    setValues([]);
  };

  const getData = async () => {
    const data = await fetch(`https://swapi.dev/api/people/?search=${query}`);
    const res = await data.json();
    setValues(res?.results);
  };

  useEffect(() => {
    const timeOut = setTimeout(() => {
      getData();
    }, 1000);

    return () => clearTimeout(timeOut);
  }, [query]);

  return (
    <div className='flex flex-col items-center p-6'>
      <h1 className=' mb-4 text-xl font-bold'>Search Bar</h1>
      <input
        className=' border border-black p-4 rounded-lg w-1/4'
        placeholder='Search Values'
        value={query}
        onChange={handleChange}
      />
      {value.length > 0 && (
        <div className=' flex flex-col border-x border-y rounded-lg border-black text-start mt-2 w-1/4'>
          {value.map((item: any, index) => (
            <div
              key={index}
              className={` w-full border-black px-4 py-1 ${
                value.length - 1 == index ? ' border-0' : ' border-b'
              }`}
            >
              <h1>{item?.name}</h1>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Debouncing;
