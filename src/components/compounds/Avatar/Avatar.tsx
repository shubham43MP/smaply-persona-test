import { AvatarProps } from './types';

export const Avatar = ({ name = 'John Smith' }: AvatarProps) => {
  const initials = name
    .split(' ')
    .map(n => n[0])
    .join('');
  return (
    <div
      className={`inline-flex items-center justify-center h-10 w-10 rounded-full bg-blue-900 text-white`}
    >
      <span className="text-lg font-bold">{initials}</span>
    </div>
  );
};
