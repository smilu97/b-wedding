import { SVGProps } from 'react';

const KakaoMapIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={12}
    height={16}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M5.604 0h-.046A5.58 5.58 0 0 0 0 5.581c0 1.154.388 2.67 1.738 3.997 1.98 2.156 3.476 6.215 3.476 6.215a.427.427 0 0 0 .368.207.428.428 0 0 0 .368-.207s1.398-3.987 3.476-6.215c1.35-1.326 1.738-2.843 1.738-3.997A5.583 5.583 0 0 0 5.604 0Z"
      fill="#3071B6"
    />
    <path
      d="M5.581 7.268a1.594 1.594 0 1 0 0-3.19 1.594 1.594 0 0 0 0 3.19Z"
      fill="#F5E11E"
    />
  </svg>
);

export default KakaoMapIcon;
