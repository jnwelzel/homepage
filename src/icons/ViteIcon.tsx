import { FC } from "react";

export const ViteIcon: FC = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
    >
      <defs>
        <linearGradient
          id="linear0"
          x1="-0.008"
          x2="0.576"
          y1="0.077"
          y2="0.784"
          gradientTransform="matrix(23.7461 0 0 20.98828 .082 2.64)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#41D1FF"></stop>
          <stop offset="1" stopColor="#BD34FE"></stop>
        </linearGradient>
        <linearGradient
          id="linear1"
          x1="0.434"
          x2="0.503"
          y1="0.022"
          y2="0.89"
          gradientTransform="matrix(10.92969 0 0 19.83594 8.25 .008)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#FFEA83"></stop>
          <stop offset="0.083" stopColor="#FFDD35"></stop>
          <stop offset="1" stopColor="#FFA800"></stop>
        </linearGradient>
      </defs>
      <g>
        <path
          fill="url(#linear0)"
          d="M23.828 3.543l-11.23 20.082a.61.61 0 01-1.063.004L.082 3.543a.612.612 0 01.64-.902l11.243 2.011a.66.66 0 00.215 0l11.008-2.007a.61.61 0 01.64.898zm0 0"
        ></path>
        <path
          fill="url(#linear1)"
          d="M17.316.008L9.008 1.633a.307.307 0 00-.246.281l-.512 8.637a.31.31 0 00.375.316l2.313-.535c.214-.05.414.14.367.36l-.688 3.363a.307.307 0 00.387.355l1.43-.433a.302.302 0 01.386.351l-1.09 5.29c-.07.327.372.51.555.226l.121-.188L19.18 6.141a.306.306 0 00-.332-.438l-2.38.461a.307.307 0 01-.35-.387L17.671.391a.304.304 0 00-.352-.383zm0 0"
        ></path>
      </g>
    </svg>
  );
};
