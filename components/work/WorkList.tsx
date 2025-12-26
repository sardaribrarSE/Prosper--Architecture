"use client";

import { useState } from "react";
import type { WorkItem } from "../../lib/work/types";
import { WorkGrid } from "./WorkGrid";

interface Props {
  allItems: WorkItem[];
  featuredItems: WorkItem[];
}

export default function WorkList({ allItems, featuredItems }: Props) {
  const [tab, setTab] = useState<"ALL" | "FEATURED" | "FILTERS">("ALL");

  const items = tab === "ALL" ? allItems : featuredItems;

  const buttons = [
    { key: "ALL", label: "ALL", icon: "/Icons/work/All.png" },
    { key: "FEATURED", label: "FEATURED", icon: "/Icons/work/Featured.png" },
    { key: "FILTERS", label: "FILTERS", icon: "/Icons/work/Filters.png" },
  ] as const;

  function TabButton({
    icon,
    label,
    active,
    onClick,
  }: {
    icon: string;
    label: string;
    active?: boolean;
    onClick?: () => void;
  }) {
    // Icon colors: active #F14539 (red-orange), inactive #434343 (dark gray)
    const iconStyle = active
      ? { filter: "brightness(0) saturate(100%) invert(37%) sepia(96%) saturate(1200%) hue-rotate(357deg)" }
      : { filter: "brightness(0) saturate(100%) invert(27%) sepia(2%) saturate(1011%) hue-rotate(186deg)" };

    return (
      <button
        onClick={onClick}
        className={`flex items-center gap-2 px-4 py-3 text-xs sm:text-sm uppercase tracking-[0.16em] border transition-all ${
          active
            ? "border-gray-300 bg-zinc-900 text-white"
            : "border-gray-300 text-zinc-700"
        }`}
      >
        <img
          src={icon}
          alt=""
          className="h-6 w-6  object-contain"
          style={iconStyle}
        />
        <span>{label}</span>
      </button>
    );
  }

  return (
    <>
      {/* Intro */}
      <section className="flex flex-col items-center px-4 text-center">
        <h1 className="max-w-4xl font-poppins text-xl leading-relaxed text-[#141414] sm:text-2xl md:text-[32px] mt-10">
          We don&apos;t just design and build; we dream, envision,
          <br className="hidden sm:block" />
          and create! Our ideas come to life through
          <br className="hidden sm:block" />
          dedication, consistency, and attention to detail.
        </h1>

        {/* Tabs */}
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          {buttons.map((b) => (
            <TabButton
              key={b.key}
              icon={b.icon}
              label={b.label}
              active={b.key === tab}
              onClick={() => {
                // if (b.key === "FILTERS") return;
                setTab(b.key as "ALL" | "FEATURED" | "FILTERS");
              }}
            />
          ))}
        </div>
      </section>

      {/* Grid */}
      <section className="mt-16 px-4 sm:px-6 md:px-10">
        <WorkGrid items={items} />
      </section>
    </>
  );
}
