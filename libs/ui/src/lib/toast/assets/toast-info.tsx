import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';

const SvgComponent = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="feather feather-info"
    ref={ref}
    color="#ffffff"
    {...props}
  >
    <circle cx={12} cy={12} r={10} />
    <path d="M12 16v-4M12 8h.01" />
  </svg>
);

const ForwardRef = forwardRef(SvgComponent);
const ReactComponent = memo(ForwardRef);
export { ReactComponent };
