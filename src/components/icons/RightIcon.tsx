import { SVGProps } from 'react';

const RightIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={8}
    height={14}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M1.603 13.397A.853.853 0 1 1 .397 12.19l3.776-3.777a2 2 0 0 0 0-2.828L.397 1.809A.853.853 0 0 1 1.603.603l4.983 4.983a2 2 0 0 1 0 2.828l-4.983 4.983Z"
      fill="#fff"
    />
  </svg>
);

export default RightIcon;
