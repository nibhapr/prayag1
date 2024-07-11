import React from 'react';
import { Icons } from './icons.ts';
interface IconProps {
    name: string;
    
  }
  interface Path {
    d: string;
    class?: string;
  }

const IconComponent: React.FC<IconProps> = ({ name }) => {
    const icon = (Icons as any)[name] || {};
    const paths: Path[] = icon.paths || [];
  
    return icon ? (
      <svg
        className={icon.class}
        height={icon.height}
        viewBox={icon.viewBox}
        width={icon.width}
        fill={icon.fill}
        clipRule={icon.clipRule}
        fillRule={icon.fillRule}
        stroke={icon.stroke}
        strokeWidth={icon.strokeWidth}
        strokeLinecap={icon.strokeLinecap}
        strokeLinejoin={icon.strokeLinejoin}
      >
        <title>{icon.title}</title>
        {paths.map((path: Path, index: number) => (
          <path key={index} d={path.d} className={path.class || ''} />
        ))}
      </svg>
    ) : (
      <span>Icon not found</span>
    );
  };
  export default IconComponent