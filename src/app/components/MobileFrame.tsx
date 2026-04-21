import { ReactNode } from 'react';

interface MobileFrameProps {
  children: ReactNode;
}

export function MobileFrame({ children }: MobileFrameProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-gray-50 to-indigo-50 flex items-center justify-center p-4 font-sans">
      {/* iPhone Frame */}
      <div className="relative">
        {/* Phone outer frame */}
        <div className="w-[375px] h-[812px] bg-black rounded-[3rem] p-3 shadow-2xl">
          {/* Screen bezel */}
          <div className="w-full h-full bg-white rounded-[2.5rem] overflow-hidden relative">
            {/* Notch */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-7 bg-black rounded-b-3xl z-50" />

            {/* Status bar */}
            <div className="absolute top-0 left-0 right-0 h-11 flex items-start justify-between px-8 pt-2 text-xs z-40">
              <span className="font-semibold">9:41</span>
              <div className="flex gap-1 items-center">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.01 21.49L23.64 7c-.45-.34-4.93-4-11.64-4C5.28 3 .81 6.66.36 7l11.63 14.49.01.01.01-.01z"/>
                </svg>
                <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M11.5 0h-8A1.5 1.5 0 0 0 2 1.5v13A1.5 1.5 0 0 0 3.5 16h8a1.5 1.5 0 0 0 1.5-1.5v-13A1.5 1.5 0 0 0 11.5 0zM4.5 14a.5.5 0 0 1 0-1h6a.5.5 0 0 1 0 1h-6z"/>
                </svg>
              </div>
            </div>

            {/* Content area */}
            <div className="absolute top-11 bottom-0 left-0 right-0 overflow-y-auto bg-gray-50">
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
