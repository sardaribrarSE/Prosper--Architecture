// components/ui/Icon.tsx
import type { ComponentPropsWithoutRef } from "react";
import Image from "next/image";

type IconName =
  | "mic"
  | "location"
  | "clock"
  | "dollarcircle"
  | "calendar"
  | "arrow_down"
  | "star"
  | "cells"
  | "filter_horizontal"
  | "play"
  | "plus"
  | "close"
  | "download"
  | "arrow_right";

const iconMap: Record<IconName, string> = {
  mic: "/Icons/Icons=mic-01.svg",
  location: "/Icons/Icons=location-06.svg",
  clock: "/Icons/Icons=clock-01.svg",
  dollarcircle: "/Icons/Icons=dollar-circle.svg",
  calendar: "/Icons/Icons=calendar-04.svg",
  arrow_down: "/Icons/Icons=arrow-down.svg",
  star: "/Icons/Icons=star.svg",
  cells: "/Icons/Icons=cells.svg",
  filter_horizontal: "/Icons/Icons=filter-horizontal.svg",
  play: "/Icons/Icons=play.svg",
  plus: "/Icons/Icons=plus-sign.svg",
  close: "/Icons/Icons=multiplication-sign.svg",
  download: "/Icons/Icons=download-01.svg",
  arrow_right: "../../Icons/Icons=arrow-right.svg",
};

type IconProps = {
  name: IconName;
  size?: number;
} & Omit<ComponentPropsWithoutRef<"span">, "children">;

export function Icon({ name, size = 20, className, ...rest }: IconProps) {
  const src = iconMap[name];

  return (
    <span className={className} {...rest} >
      <Image src={src} alt={name} width={size} height={size} />
    </span>
  );
}