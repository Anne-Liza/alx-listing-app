import { ButtonProps } from '../../interfaces';

export default function Button({
  children,
  onClick,
  variant = 'primary',
}: ButtonProps) {
  const base =
    'inline-block px-4 py-2 rounded-lg font-medium transition';

  const style =
    variant === 'primary'
      ? 'bg-indigo-600 text-white hover:bg-indigo-700'
      : 'bg-gray-100 text-gray-800 hover:bg-gray-200';

  return (
    <button className={`${base} ${style}`} onClick={onClick}>
      {children}
    </button>
  );
}
