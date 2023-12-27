import { Color } from './colors';
import clsx from 'clsx';
export interface TagProps {
  text: string;
  color?: Color;
}
export const Tag = ({ text, color = 'primary' }: TagProps) => {
  const colorVariants: Record<Color, string> = {
    primary: 'bg-primary-500',
    secondary: 'bg-secondary-500',
    info: 'bg-info-500',
    success: 'bg-success-500',
    warning: 'bg-warning-500',
    danger: 'bg-danger-500',
    neutral: 'bg-neutral-500 ',
  };
  return (
    <div
      className={`${colorVariants[color]} inline-flex w-max rounded-full px-4 py-1 text-sm font-semibold text-white`}
    >
      {text}
    </div>
  );
};
