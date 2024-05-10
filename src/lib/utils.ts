import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { MongoClient } from "mongodb";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}