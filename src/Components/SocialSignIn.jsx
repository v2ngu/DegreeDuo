import React from 'react';

function SocialSignIn() {
  const socialButtons = [
    { name: 'Google', src: 'https://cdn.builder.io/api/v1/image/assets/TEMP/8837ce42f5aca9abc447ee7e775e4905e6f792fb966dac422644312dd8426850?apiKey=f2665882a6734c87a0db06c430954782&&apiKey=f2665882a6734c87a0db06c430954782' },
    { name: 'Apple', src: 'https://cdn.builder.io/api/v1/image/assets/TEMP/75d137c906f9f614696ee504663c993be322a572c5742a060c6aaa1dca78ce17?apiKey=f2665882a6734c87a0db06c430954782&&apiKey=f2665882a6734c87a0db06c430954782' }
  ];

  return (
    <div className="flex gap-6 items-start mt-16 text-xs font-medium text-black max-md:mt-10">
      {socialButtons.map((button, index) => (
        <button key={index} className="flex overflow-hidden flex-col flex-1 justify-center px-5 py-1 rounded-xl border-solid border-[color:var(--sds-color-border-default-default)] border-[length:var(--sds-size-stroke-border)] opacity-[var(--sds-size-stroke-border)]">
          <div className="flex gap-2.5 items-center">
            <img loading="lazy" src={button.src} alt={`${button.name} logo`} className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square" />
            <span className="self-stretch my-auto">Sign in with {button.name}</span>
          </div>
        </button>
      ))}
    </div>
  );
}

export default SocialSignIn;