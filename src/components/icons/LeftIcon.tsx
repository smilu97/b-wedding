import { SVGProps } from 'react';

const LeftIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M6.397.603A.853.853 0 0 1 7.603 1.81L3.827 5.586a2 2 0 0 0 0 2.828l3.776 3.777a.853.853 0 1 1-1.206 1.206L1.414 8.414a2 2 0 0 1 0-2.828L6.397.603Z"
      fill="#fff"
    />
  </svg>
);

export default LeftIcon;
