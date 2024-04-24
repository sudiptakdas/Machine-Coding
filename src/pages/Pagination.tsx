import React, { useState, useEffect } from 'react';

const Pagination: React.FC = () => {
  const [products, setProducts] = useState<any>();
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [total, setTotal] = useState<number>(1);

  const pageSize = 10; // Number of products per page

  const fetchProducts = async (page: number) => {
    const res = await fetch(
      `https://dummyjson.com/products?limit=${pageSize}&skip=${
        page * pageSize - pageSize
      }`
    );
    const resJson = await res.json();
    setProducts(resJson?.products);
    setTotal(resJson?.total);
  };

  useEffect(() => {
    fetchProducts(currentPage);
  }, [currentPage]);

  const handlePageClick = (page: number) => {
    setCurrentPage(page);
  };

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  const handleNextPage = () => {
    if (currentPage < Math.ceil(total / pageSize)) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  return (
    <div className='p-6'>
      <h1 className='text-4xl font-semibold mb-4'>Products</h1>
      <div className='grid grid-cols-3 gap-4'>
        {products?.map((ele: any, idx: number) => {
          return (
            <div
              key={idx}
              className='bg-gray-300 p-4 rounded-md w-[320px] h-[340px]'
            >
              <img
                src={ele?.thumbnail}
                className='rounded-lg w-full h-[250px] mb-4'
                alt={ele.title}
              />
              <h1>{ele?.title}</h1>
            </div>
          );
        })}
      </div>
      <div className='mt-4 flex justify-center gap-2'>
        <button
          onClick={handlePrevPage}
          disabled={currentPage === 1}
          className='px-4 py-2 mr-2 bg-blue-500 text-white rounded-md disabled:bg-gray-400'
        >
          Previous
        </button>
        {products?.map((_: any, idx: number) => {
          return (
            <div>
              <button
                className=' border border-gray-600 rounded-lg p-2.5 font-semibold'
                onClick={() => handlePageClick(idx + 1)}
              >
                {idx + 1}
              </button>
            </div>
          );
        })}

        <button
          onClick={handleNextPage}
          disabled={currentPage >= Math.ceil(total / pageSize)}
          className='px-4 py-2 bg-blue-500 text-white rounded-md disabled:bg-gray-400'
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Pagination;
