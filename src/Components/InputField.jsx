import React from 'react';

function InputField({ label, placeholder, type = 'text' }) {
  return (
    <div className="flex flex-col mt-5 w-full font-medium min-h-[58px]">
      <label className="gap-2.5 self-start text-sm text-black">
        {label}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        className="flex overflow-hidden gap-2.5 items-center py-2.5 pl-2.5 w-full text-xs rounded-xl border border-solid border-zinc-300 max-w-[404px] min-h-[32px] text-zinc-300"
        aria-label={label}
      />
    </div>
  );
}

export default InputField;