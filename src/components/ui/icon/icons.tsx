import { IconNames, Icons } from "./icons/index";

export const Icon = ({
  width,
  height,
  viewBox,
  name,
}: {
  width?: number;
  height?: number;
  viewBox?: string;
  name?: IconNames;
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox={viewBox}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {Icons[name!]()}
    </svg>
  );
};
