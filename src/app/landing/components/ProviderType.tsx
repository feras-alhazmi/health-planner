import React, { PropsWithChildren } from "react";

const ProviderType = ({ children }: PropsWithChildren) => {
  return (
    <div className="bg-blue  text-white whitespace-nowrap rounded-xl p-4 w-full flex justify-center items-center shadow-lg">
      {children}
    </div>
  );
};

export default ProviderType;
