import React, { useState, useEffect, useRef } from 'react';

const InfiniteScroll: React.FC = () => {
  const [products, setProducts] = useState<any[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [total, setTotal] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(false);

  const pageSize = 10; // Number of products per page

  const fetchProducts = async (page: number) => {
    setLoading(true);
    const res = await fetch(
      `https://dummyjson.com/products?limit=${pageSize}&skip=${
        page * pageSize - pageSize
      }`
    );
    const resJson = await res.json();
    setProducts((prevProducts) => [...prevProducts, ...resJson?.products]);
    setTotal(resJson?.total);
    setLoading(false);
  };

  useEffect(() => {
    fetchProducts(currentPage);
  }, [currentPage]);

  const observer = useRef<IntersectionObserver | null>(null);
  const lastProductRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (loading) return;
    if (observer.current) observer.current.disconnect();
    observer.current = new IntersectionObserver((entries) => {
      if (
        entries[0].isIntersecting &&
        currentPage < Math.ceil(total / pageSize)
      ) {
        setCurrentPage((prevPage) => prevPage + 1);
      }
    });
    if (lastProductRef.current)
      observer.current.observe(lastProductRef.current);
  }, [loading, currentPage, total, pageSize]);

  return (
    <div className='p-6'>
      <h1 className='text-4xl font-semibold mb-4'>Products</h1>
      <div className='grid grid-cols-3 gap-4'>
        {products.map((ele: any, idx: number) => {
          if (idx === products.length - 1) {
            return (
              <div
                key={idx}
                ref={lastProductRef}
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
          } else {
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
          }
        })}
      </div>
      {loading && <p>Loading...</p>}
    </div>
  );
};

export default InfiniteScroll;
