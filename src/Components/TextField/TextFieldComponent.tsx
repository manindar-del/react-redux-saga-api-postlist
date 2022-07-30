import React from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';

export default function TextFieldComponent({
  icon,
  placeholder,
  type,
  register,
}: {
  icon: JSX.Element;
  placeholder: string;
  type?: 'text' | 'password';
  register: UseFormRegisterReturn,
}) {
  return (
    <div className='flex flex-col mb-2'>
      <div className='flex relative '>
        <span className='rounded-l-md inline-flex  items-center px-3 border-t bg-white border-l border-b  border-gray-300 text-gray-500 shadow-sm text-sm'>
          {icon}
        </span>
        <input
          {...register}
          type={type || 'text'}
          className=' rounded-r-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent'
          placeholder={placeholder}
        />
      </div>
    </div>
  );
}
