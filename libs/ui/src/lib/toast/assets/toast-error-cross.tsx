import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';

const SvgComponent = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>
) => (
  <svg
    width="21"
    height="21"
    viewBox="0 0 21 21"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    ref={ref}
    {...props}
  >
    <circle cx={10.018} cy={10.822} r={10} fill="#fff" />
    <path
      d="m6.96 7.765 6.115 6.115M13.075 7.765 6.96 13.88"
      stroke="#FF6969"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const ForwardRef = forwardRef(SvgComponent);
const ReactComponent = memo(ForwardRef);
export { ReactComponent };
