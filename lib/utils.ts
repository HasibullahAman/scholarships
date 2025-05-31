import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Combines class names with intelligent Tailwind merging.
 */
export function cn(...inputs: any[]) {
    return twMerge(clsx(inputs));
}
