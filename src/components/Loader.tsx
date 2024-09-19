import React from 'react';

const Loader: React.FC = () => {
  return (
    <div className="h-40 w-screen flex justify-center items-center">
      <span className="loading loading-ring loading-lg"></span>
    </div>
  );
};

export default Loader;
