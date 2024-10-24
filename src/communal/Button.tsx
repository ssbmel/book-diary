import React, { PropsWithChildren } from "react";

function Button({ children }: PropsWithChildren) {
  return (
    <button className="bg-red-950 text-white p-[6px] rounded-sm">
      {children}
    </button>
  );
}

export default Button;
