import React from 'react'

const HamburgerCloseIcon = ({onClick , className}) => {
    return (
        <div onClick={onClick} style={{ opacity: 1, willChange: 'auto', transform: 'none' }} className={className}>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.25"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-x m-3 aspect-square h-3 w-3 text-neutral-500"
            >
                <path d="M18 6 6 18"></path>
                <path d="m6 6 12 12"></path>
            </svg>
        </div>
    )
}

export default HamburgerCloseIcon
