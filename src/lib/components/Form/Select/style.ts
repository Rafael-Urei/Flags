import { tv } from 'tailwind-variants';

export const style = tv({
  slots: {
    label: 'font-semibold text-sm',
    select: 'py-4 px-4 shadow-md rounded-md text-text-light placeholder:text-gray-400'
  }
});
