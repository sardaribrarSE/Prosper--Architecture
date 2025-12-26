"use client";

import { useState } from "react";
import type { WorkItem } from "../../lib/work/types";
import { WorkCard } from "./WorkCard";
import { Icon } from "../ui/icon";

interface WorkGridProps {
  items: WorkItem[];
  pageSize?: number;
}

export function WorkGrid({ items, pageSize = 6 }: WorkGridProps) {
  const [visibleCount, setVisibleCount] = useState(pageSize);
  const visibleItems = items.slice(0, visibleCount);
  const hasMore = visibleCount < items.length;

  return (
    <>
      {/* Masonry-style layout */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto">
        {visibleItems.map((item, index) => (
          <div
            key={item.id}
            className={
              index % 2 === 1 ? "md:mt-14" : index !== 0 ? "-mt-8" : ""
            }
          >
            <WorkCard item={item} />
          </div>
        ))}
      </section>

      {hasMore && (
        <div className="my-16 flex justify-center">
          <button
            type="button"
            onClick={() => setVisibleCount((prev) => prev + pageSize)}
            className="items-center gap-2 rounded-sm bg-black px-5 py-4 text-md font-medium tracking-wide text-white md:inline-flex"
          >
            Load More
            <Icon name="arrow_down" size={23} className="invert brightness-50" />
          </button>
        </div>
      )}
    </>
  );
}
