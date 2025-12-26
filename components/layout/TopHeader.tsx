'use client';
import { useState } from "react";

export function TopHeader() {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <div className="relative w-full bg-[#f6f3ee] px-4 py-3">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-center gap-2 text-center sm:flex-row sm:gap-3 sm:text-sm">
        <span className="text-md text-gray-900 sm:text-base">
          The hospitality minds series: the future of workshops
        </span>

        <a
          href="#"
          className="text-md font-semibold text-red-600 underline"
        >
          Register Now
        </a>
      </div>

      <button
        onClick={() => setVisible(false)}
        aria-label="Close banner"
        className="
          absolute
          right-3
          top-3
          sm:right-6
          sm:top-1/2
          sm:-translate-y-1/2
          text-2xl
          text-gray-900
          hover:opacity-70
          focus:outline-none
        "
      >
        &times;
      </button>
    </div>
  );
}
