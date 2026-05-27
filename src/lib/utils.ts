import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function generateReferenceNumber(): string {
  const num = Math.floor(Math.random() * 900) + 100;
  return `CIP-2026-${num.toString().padStart(3, "0")}`;
}
