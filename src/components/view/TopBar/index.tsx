"use client";

import SignInLabel from "./SignInLabel";

const TopLabel = () => {
  return (
    <div className='overflow-hidden border-b text-gray-100 bg-gray-700'>
      <div className='px-4 max-w-7xl mx-auto flex justify-between items-center'>
        <SignInLabel />
      </div>
    </div>
  );
};

export default TopLabel;
