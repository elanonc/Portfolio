import React from 'react';

type IconProps = {
  svgContent: React.ReactNode;
  width?: number;
  height?: number;
  color?: string;
};

const Icon: React.FC<IconProps> = ({
  svgContent,
  width = 24,
  height = 24,
  color = '#000000',
}: IconProps) => (
  <div
    style={{
      width: `${width}px`,
      height: `${height}px`,
      color,
    }}
  >
    {svgContent}
  </div>
);

export default Icon;
