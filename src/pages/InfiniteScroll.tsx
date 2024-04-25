import React, { useState, useEffect, useRef } from 'react';

const Pagination: React.FC = () => {
  const [products, setProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [page, setPage] = useState<number>(1);

  const loader = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const response = await fetch(
        `https://dummyjson.com/products?limit=10&page=${page}`
      );
      const data = await response.json();
      setProducts((prevProducts) => [...prevProducts, ...data.products]);
      setLoading(false);
    };

    fetchData();
  }, [page]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && !loading) {
        setPage((prevPage) => prevPage + 1);
      }
    });

    if (loader.current) {
      observer.observe(loader.current);
    }

    return () => {
      if (loader.current) {
        observer.unobserve(loader.current);
      }
    };
  }, [loading]);

  return (
    <div className='p-6'>
      <h1 className='text-4xl font-semibold mb-4'>Products</h1>
      <div className='grid grid-cols-3 gap-4'>
        {products.map((ele: any, idx: number) => (
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
        ))}
      </div>
      <div ref={loader} className='loader'>
        {loading && <p>Loading...</p>}
      </div>
    </div>
  );
};

export default Pagination;
