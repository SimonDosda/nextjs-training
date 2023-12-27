import { Color } from './colors';
import clsx from 'clsx';
export interface ButtonProps {
  onClick?: () => void;
  disabled?: boolean;
  children?: React.ReactNode;
  color?: Color;
}
export const Button = ({
  children,
  color = 'primary',
  disabled,
}: ButtonProps) => {
  const colorVariants: Record<Color, string> = {
    primary: 'bg-primary-500 hover:bg-primary-600 focus:ring-primary-500',
    secondary:
      'bg-secondary-500 hover:bg-secondary-600 focus:ring-secondary-500',
    info: 'bg-info-500 hover:bg-info-600 focus:ring-info-500',
    success: 'bg-success-500 hover:bg-success-600 focus:ring-success-500',
    warning: 'bg-warning-500 hover:bg-warning-600 focus:ring-warning-500',
    danger: 'bg-danger-500 hover:bg-danger-600 focus:ring-danger-500',
    neutral: 'bg-neutral-500 hover:bg-neutral-600 focus:ring-neutral-500',
  };
  return (
    <button
      className={clsx(
        `${colorVariants[color]}  inline-flex items-center justify-center rounded-md border border-transparent px-4 py-2 text-sm font-medium text-white shadow-sm  focus:outline-none focus:ring-2 focus:ring-offset-2`,
        {
          'cursor-not-allowed opacity-50': disabled,
        },
      )}
      disabled={disabled}
    >
      {children}
    </button>
  );
};
