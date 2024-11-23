import { tv } from 'tailwind-variants';

export const style = tv({
  slots: {
    wrapper:
      'bg-white shadow-lg rounded-md cursor-pointer hover:scale-105 transition-transform duration-300',
    info: 'flex flex-col p-8 text-gray-600',
    name: 'font-bold text-xl pb-4 text-text-light'
  }
});
