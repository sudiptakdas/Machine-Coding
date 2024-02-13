import React, { useState } from 'react';

const GridLight: React.FC = () => {
  const [order, setOrder] = useState<number[]>([]);
  const [isDeactivating, setIsDeactivating] = useState(false);
  const deactivateCells = () => {
    setIsDeactivating(true);
    const timer = setInterval(() => {
      setOrder((origOrder) => {
        const newOrder = origOrder.slice();
        newOrder.pop();

        if (newOrder.length === 0) {
          clearInterval(timer);
          setIsDeactivating(false);
        }

        return newOrder;
      });
    }, 300);
  };
  const handleActivation = (index: number) => {
    const newCell: number[] = [...order, index];
    setOrder(newCell);
    // deactivate
    if (newCell.length === config.flat(1).filter(Boolean).length) {
      deactivateCells();
    }
  };

  const config = [
    [1, 1, 1],
    [1, 0, 1],
    [1, 1, 1],
  ];
  return (
    <div className=' flex lg:justify-center  overflow-auto'>
      <div className='grid grid-cols-3 gap-4 p-4 border-2 border-black rounded-sm min-w-[500px]  max-w-fit'>
        {config
          .flat(1)
          .map((value, index) =>
            value === 1 ? (
              <div
                key={index}
                className={`h-0 pb-[100%] border-2 border-black ${
                  order.includes(index) ? ' bg-green-500' : ' bg-white'
                }`}
                onClick={() => handleActivation(index)}
                style={{
                  pointerEvents:
                    order.includes(index) || isDeactivating ? 'none' : 'auto',
                }}
              ></div>
            ) : (
              <span></span>
            )
          )}
      </div>
    </div>
  );
};

export default GridLight;
