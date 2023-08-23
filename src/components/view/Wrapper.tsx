import React from "react";

type Props = {
  children: React.ReactNode;
  className: string;
};

const Wrapper: React.FC<Props> = ({ children, className }) => {
  return (
    <div className={`w-full max-w-[1280px] mx-auto ${className || ""}`}>
      {children}
    </div>
  );
};

export default Wrapper;
