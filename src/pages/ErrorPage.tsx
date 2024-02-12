import React from 'react';
import Error from '../assets/404Image.jpg';
import { Link } from 'react-router-dom';

const ErrorPage: React.FC = () => {
  return (
    <div className=' flex flex-col  items-center justify-center p-10'>
      <h1>Oops! Error has happen navigae to home page</h1>
      <Link
        to='/Home'
        className=' underline text-blue-400 font-semibold text-xl hover:scale-110'
      >
        Home
      </Link>
      <img src={Error} className=' w-[800px] h-[600px]' alt='Error Image' />
    </div>
  );
};

export default ErrorPage;
