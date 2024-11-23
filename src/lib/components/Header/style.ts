import { tv } from 'tailwind-variants';

export const style = tv({
  slots: {
    wrapper: 'flex items-center justify-between sticky top-0 sm:px-20 px-4 py-6 bg-white shadow-md',
    title: 'font-bold sm:text-2xl text-base'
  }
});
