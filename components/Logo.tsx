import React from "react";

export const Logo = ({
  className,
  text,
}: {
  className?: string;
  text?: string;
}) => {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <div className="relative size-8">
        <div className="absolute left-0 top-0 size-4 bg-[#4682A9]"></div>
        <div className="absolute bottom-0 left-0 h-2 w-4 rounded-t-full bg-black"></div>
        <div className="absolute right-0 top-0 size-2 rounded-full bg-black"></div>
      </div>

      {/* Brand name */}
      <span
        className={`${text} font-semibold tracking-wide text-brand-100 sm:hidden lg:flex`}
      >
        StashBase
      </span>
    </div>
  );
};

export const LogoFull = () => {
  return (
    <div className={`flex items-center gap-2`}>
      <div className="relative size-8">
        <div className="absolute left-0 top-0 size-4 bg-[#4682A9]"></div>
        <div className="absolute bottom-0 left-0 h-2 w-4 rounded-t-full bg-black"></div>
        <div className="absolute right-0 top-0 size-2 rounded-full bg-black"></div>
      </div>

      {/* Brand name */}
      <span className={`text-3xl font-semibold tracking-wide text-brand-100`}>
        StashBase
      </span>
    </div>
  );
};
