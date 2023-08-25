import React from "react";

function Input({label,state,setState,type="text"}) {
  return <div className="flex gap-1 flex-col">
    {label && (
      <label htmlFor={label} className="text-teal-light text-lg px-1">
        {label}
      </label>
    )}
    <div>
      <input type={type} name={label} value={state} onChange={(e)=>setState(e.target.value)} className="bg-input-background text-start focus:outline-none text-white h-10 rounded-lg px-5 py-4 w-full " />
    </div>
  </div>;
}

export default Input;
