import { forwardRef, useId } from 'react';

const Select = forwardRef(function Select(
  { options = [], label, className = '', ...props },
  ref,
) {
  const id = useId();

  return (
    <div className="w-full">
      {label && (
        <label className="" htmlFor={id}>
          {label}
        </label>
      )}
      <select
        id={id}
        ref={ref}
        className={`w-full rounded-lg border border-gray-200 bg-white px-3 py-2 text-black outline-none duration-200 focus:bg-gray-50 ${className}`}
        {...props}
      >
        {options?.map((option) => (
          <option value={option} key={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
});

export default Select;
