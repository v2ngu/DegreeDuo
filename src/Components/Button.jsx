import React from 'react';

function Button({ text }) {
  return (
    <div className="flex flex-col pb-2.5 mt-8 bg-slate-100 opacity-[var(--sds-size-stroke-border)]">
      <button className="flex overflow-hidden gap-2.5 items-center py-2.5 pl-2.5 w-full bg-amber-700 rounded-xl border border-amber-700 border-solid max-w-[404px] min-h-[32px]">
        <span className="z-10 self-center mt-0 text-sm font-bold text-white">
          {text}
        </span>
      </button>
    </div>
  );
}

export default Button;