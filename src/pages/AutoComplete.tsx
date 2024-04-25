import axios from 'axios';
import React, { useEffect, useState } from 'react';

const AutoComplete = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [originalData, setOriginalData] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get('https://reqres.in/api/users?page=1');
      const data = response?.data?.data || [];
      setResults(data);
      setOriginalData(data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setQuery(value);
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    if (query === '') {
      setResults(originalData);
      return;
    }

    const filteredResults = originalData.filter((val: any) =>
      val?.first_name.includes(query)
    );
    setResults(filteredResults);
  }, [query, originalData]);

  return (
    <div>
      <h1 className='mb-4'>User Info</h1>
      <input
        type='text'
        placeholder='Search...'
        value={query}
        onChange={handleChange}
        className='border border-black w-4/12 mb-4 p-2 rounded-md'
      />
      <div className='grid grid-cols-1 gap-6'>
        {results.map((ele: any, idx: number) => (
          <div
            key={idx}
            className='bg-blue-100 flex items-center gap-2 p-2 rounded-lg'
          >
            <img src={ele?.avatar} className='rounded-full' alt='avatar' />
            <div className='flex flex-col'>
              <h1 className='text-start'>
                {ele?.first_name} {ele?.last_name}
              </h1>
              <h1>{ele?.email}</h1>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AutoComplete;
