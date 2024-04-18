import React, { PropsWithChildren } from "react";

const ErrorMassage = ({ children }: PropsWithChildren) => {
  return <div>{children && <p color="red">{children}</p>}</div>;
};

export default ErrorMassage;
