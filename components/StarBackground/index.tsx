import React from 'react';
type bgProps = {
  width: number;
  height: number;
  className: string;
};

function StarBackground({ width, height, className }: bgProps) {
  return (
    <div className={className}>
      <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 132.703 94.979">
        <path
          d="M17330,1455.333l-62,39.333,76.666-39.333-66.666,58,95.334-64.667-70.668,70.667,82.668-55.333-68.668,74.667,80-53.333L17358,1538.667l12.666-9.333"
          transform="translate(-17266.393 -1446.184)"
          fill="none"
          className="path"
          stroke="#ffe604"
          strokeWidth={5}
          strokeMiterlimit={10}
          strokeDasharray={2000}
        />
      </svg>
    </div>
  );
}

export default StarBackground;
