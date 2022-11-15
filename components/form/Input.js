import { ErrorMessage } from '@hookform/error-message';
import { useState } from 'react';
import { useController } from 'react-hook-form';
import formatPrice from '../../utils/PriceUtils';

export default function Input({
  currencyFormat = false,
  name = '',
  control = {},
  defaultValue = '',
  value = '',
  rules = {},
  className = '',
  label = '',
  labelRequired = '',
  children,
  placeholder = '',
  readOnly = false,
  maxLength = '',
  minLength = '',
  type = 'text',
  clearErrors = () => {},
  onChange = () => {},
}) {
  // const { field, fieldState, formState } = useState({
  //   name,
  //   control,
  //   defaultValue,
  //   rules,
  // });

  const handleNumber = (event) => {
    if (!/[0-9]/.test(event.key)) {
      event.preventDefault();
    }
  };
  return (
    <div className={className}>
      <label htmlFor={name} className={`relative text-label focus-within:text-label block`}>
        {label}
        {labelRequired && <span className="text-placeholder ml-2">{labelRequired}</span>}
        {children}
        <input
          // {...field}
          id={name}
          type={type === 'number' ? 'text' : type}
          placeholder={placeholder}
          readOnly={readOnly}
          maxLength={maxLength}
          minLength={minLength}
          onKeyUp={type === 'number' && !currencyFormat ? handleNumber : function () {}}
          onChange={(evt) => {
            onChange(currencyFormat ? formatPrice(evt.target.value) : evt.target.value);
            onChange(currencyFormat ? formatPrice(evt.target.value) : evt.target.value);
            clearErrors();
          }}
          className={`rounded-xl mt-1 pr-4 h-14 focus:outline-[1px] w-full ${readOnly ? ' bg-bg focus:outline-0 cursor-not-allowed focus:outline-none' : 'bg-white border-line border-2 focus:outline-secondary'}  
            // fieldState.error && 'border-error border-[1px]'
           ${children ? 'pl-14' : 'pl-4'}`}
        />
        {/* {appendIcon ? <appendIcon /> : ""} */}
      </label>
      {/* <ErrorMessage
        errors={formState.errors}
        name={name}
        render={({ message }) => (
          <span className="text-xs text-error">
            <p>{message ? message : `${label || placeholder} Wajib diisi`}</p>
            <p>{formState.errors[name]?.type === 'minLength' ? 'Minimal 7 Karakter' : ''}</p>
          </span>
        )}
      /> */}
    </div>
  );
}
