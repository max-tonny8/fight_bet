import { Polygon } from "./Polygon";

export const Icons = {
  Polygon,
} as const;

export type IconNames = keyof typeof Icons;
