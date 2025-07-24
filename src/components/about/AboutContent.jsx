import React from 'react';

const AboutContent = () => {
  return (
    <div className='flex justify-center' >
        <button
        className="fixed top-20 z-50 cursor-pointer rounded-4xl overflow-hidden"
        tabIndex={-1}
        type="button"
        aria-haspopup="dialog"
        aria-expanded="false"
        aria-controls="radix-:rgr:"
        data-state="closed"
        style={{
            pointerEvents: 'auto',
            opacity: 1,
            backdropFilter: 'blur(16px)',
            willChange: 'transform',
            transform: 'none',
            transformOrigin: '50% 50% 0px',
        }}
        >
        <div
            className="frame-inner relative flex h-full w-full m-auto  origin-top items-center space-x-2 bg-white/60 px-5 py-3 text-sm text-neutral-500"
            style={{
            pointerEvents: 'none',
            opacity: 1,
            willChange: 'auto',
            transform: 'none',
            transformOrigin: '50% 50% 0px',
            }}
        >
            <span>Careers</span>
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-neutral-500/5 text-xs">4</span>
        </div>
        </button>
    </div>
  );
};

export default AboutContent;
