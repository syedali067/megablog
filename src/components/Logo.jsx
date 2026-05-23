import React from 'react'

function Logo({ width = '100px' }) {
  return (
    <div style={{ width }} className="flex items-center gap-3">

      {/* Icon */}
      <div className="flex items-center justify-center rounded-xl bg-indigo-500"
        style={{ width: 42, height: 42, minWidth: 42 }}>
        <svg viewBox="0 0 52 52" width="26" height="26" fill="none">
          <polyline points="10,38 20,18 26,30 32,18 42,38"
            stroke="white" strokeWidth="3"
            strokeLinecap="round" strokeLinejoin="round"/>
          <line x1="26" y1="30" x2="26" y2="42"
            stroke="white" strokeWidth="3" strokeLinecap="round"/>
          <circle cx="26" cy="44" r="2.5" fill="white"/>
        </svg>
      </div>

      {/* Text */}
      <div className="flex flex-col leading-tight">
        <span className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
          MegaBlog
        </span>
        <span className="text-xs tracking-widest text-gray-400 uppercase">
          Your Stories Matter
        </span>
      </div>

    </div>
  )
}

export default Logo