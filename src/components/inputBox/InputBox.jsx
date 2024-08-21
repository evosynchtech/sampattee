import React from "react";

function InputBox({ placeholder, type, id, setter, value }) {
  return (
    <div>
      <input
        onChange={(e) => setter(e.target.value)}
        type={type}
        placeholder={placeholder}
        id={id}
        class="bg-gray-900 outline-none focus-within:outline-1 outline-slate-700 border-none text-white text-sm rounded-lg block w-full p-2.5 "
        required
      />
    </div>
  );
}

export default InputBox;
