import React from 'react';

function Header() {
  return (
    <header className="flex gap-10 justify-between items-center w-full">
      <h2 className="gap-1 self-stretch my-auto text-base font-bold leading-none text-blue-500">
        Hi Ryan
      </h2>
      <div className="flex gap-1 items-start self-stretch my-auto w-8">
        <div className="flex items-start w-8">
          <div className="flex gap-2 justify-center items-center px-1.5 py-1 w-8 rounded-lg shadow-sm bg-white bg-opacity-10">
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/8459b78fcd73d00667ba1b23a59135451e78e6be70b1cefb91ab73083582abac?apiKey=8d77a201ce7e4906b60f69a8213bc822&&apiKey=8d77a201ce7e4906b60f69a8213bc822" className="object-contain self-stretch my-auto w-5 aspect-square" alt="User avatar" />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;