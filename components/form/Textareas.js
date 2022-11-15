// import { ErrorMessage } from "@hookform/error-message";
// import { useController } from "react-hook-form";

export default function Textareas({ name = '', control, rules = {}, className = '', label = '', children, readOnly = false, placeholder = '', defaulValue = '', rows = 3, onChange = () => {}, clearErrors = () => {} }) {
  // const { field, fieldState, formState } = useController({
  //   name,
  //   control,
  //   defaulValue,
  //   rules,
  // });
  return (
    <div className={className}>
      <label htmlFor={name} className={`relative text-label focus-within:text-label block`}>
        {label}
        {children}
        <textarea
          // {...field}
          readOnly={readOnly}
          placeholder="Deskripsi Kerusakan"
          rows={rows}
          // defaultValue={value ? value : ""}
          onChange={(evt) => {
            onChange(evt);
            // field.onChange(evt.target.value);
            clearErrors();
          }}
          className={` rounded-xl mt-2 pr-4 pt-3 h-[116px] py-20 w-full ${!readOnly ? 'bg-white border-line rounded-xl border-2 focus:outline-none' : 'bg-white  focus:outline-none  focus:outline-[1px] cursor-not-allowed'}
            
          ${children ? 'pl-14' : 'pl-4'}`}
        ></textarea>
      </label>
      {/* <ErrorMessage
        errors={formState.errors}
        name={name}
        render={({ message }) => (
          <span className="text-xs text-error">
            {message ? message : `${label || placeholder} Wajib dipilih`}
          </span>
        )}
      /> */}
    </div>
  );
}
