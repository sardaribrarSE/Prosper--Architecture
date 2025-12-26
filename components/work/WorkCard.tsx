import Image from "next/image";
import type { WorkItem } from "../../lib/work/types";

interface WorkCardProps {
  item: WorkItem;
}

export function WorkCard({ item }: WorkCardProps) {
  const { title, location, area, year, thumbnail, serviceTitle, typeTitle } =
    item;

  return (
    <section className="flex flex-col overflow-hidden border-2 border-[#F7F2E9]">
      <div className="relative aspect-6/4  px-1">
        {thumbnail ? (
          <Image src={thumbnail} alt={title} fill className="object-cover" />
        ) : (
          <div className="flex h-full items-center justify-center text-xs text-zinc-400">
            Image coming soon
          </div>
        )}
      </div>

      <div className="flex flex-1 flex-col bg-[#FFFFFF] border-t-2 border-[#F7F2E9] px-7 pb-7 pt-8 text-zinc-700">
        <div>
          <h3 className="mb-3 text-2xl font-poppins font-semibold leading-tight text-zinc-900">
            {title}
          </h3>

          {(typeTitle || serviceTitle) && (
            <p className="text-sm text-zinc-700">
              {typeTitle}
              {typeTitle && serviceTitle && " \u2014 "}
              {serviceTitle}
            </p>
          )}
        </div>

        <div className="mt-6 border-t border-zinc-200" />

        <div className="mt-4 flex items-center text-[16px] text-zinc-700">
          <div className=" mr-4 truncate">{location}</div>
          <div className="flex-1  whitespace-nowrap">{area}</div>
          <div className="flex-1 whitespace-nowrap">{year}</div>
        </div>
      </div>
    </section>
  );
}
