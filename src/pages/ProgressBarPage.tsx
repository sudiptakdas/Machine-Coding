import React, { useState } from 'react';
import ProgressBar from '../components/ProgressBar';

const ProgressBarPage = () => {
  const [value,setValue]= useState(0);
  return (
    <div>
      <ProgressBar value={value} />
    </div>
  );
};

export default ProgressBarPage;
