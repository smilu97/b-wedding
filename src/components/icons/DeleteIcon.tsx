import { SVGProps } from 'react';

const DeleteIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={16}
    height={16}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10 1H6a5 5 0 0 0-5 5v4a5 5 0 0 0 5 5h4a5 5 0 0 0 5-5V6a5 5 0 0 0-5-5ZM6 0a6 6 0 0 0-6 6v4a6 6 0 0 0 6 6h4a6 6 0 0 0 6-6V6a6 6 0 0 0-6-6H6Z"
      fill="#DDD0C4"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="m4 11 7-7 .707.707-7 7L4 11Z"
      fill="#DDD0C4"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="m5 4 7 7-.707.707-7-7L5 4Z"
      fill="#DDD0C4"
    />
  </svg>
);

export default DeleteIcon;
