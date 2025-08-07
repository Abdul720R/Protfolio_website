import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

// use to write multiple class name using cn function (like class list)
export const cn = (...inputs) => {
  return twMerge(clsx(inputs));
};