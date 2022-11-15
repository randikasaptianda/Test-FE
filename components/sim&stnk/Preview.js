import React from 'react';
import { useState } from 'react';
import { RiDeleteBin5Line } from 'react-icons/ri';

const Preview = ({ file, onChange = () => {} }) => {
  const [preview, setPreview] = useState(null);
  console.log('debug preview', preview);

  const reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onload = () => {
    setPreview(reader.result);
  };

  return (
    <div>
      {preview ? (
        <div>
          <img className="rounded-xl border-line border" src={preview} alt="preview" width="800px" height="150px" />
          <RiDeleteBin5Line
            onClick={() => {
              // setPreview.onChange(null);
              // onChange.preview(null);
            }}
            className="absolute ml-[520px] mt-[-55px] w-10 h-10 text-error cursor-pointer"
          ></RiDeleteBin5Line>
        </div>
      ) : (
        ''
      )}
    </div>
  );
};

export default Preview;
