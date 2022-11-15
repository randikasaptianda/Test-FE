import React, { useRef } from 'react';
import { BiArrowBack } from 'react-icons/bi';
import { BsWindowDock } from 'react-icons/bs';
import { AiOutlineCar } from 'react-icons/ai';
import { Formik, Form, Field, FieldArray, ErrorMessage, validateYupSchema } from 'formik';
import * as yup from 'yup';
import Preview from './Preview';

const SUPPORTED_FORMATS = ['image/jpg', 'image/jpeg', 'image/png'];

const validationSchema = yup.object({
  file: yup
    .mixed()
    .nullable()
    .required()
    .test('FILE_SIZE', 'Uploaded file is too big!', (value) => !value || (value && value.size <= 1024 * 1024))
    .test('FILE_FORMAT', 'Uploaded file has unsupported format.', (value) => !value || (value && SUPPORTED_FORMATS.includes(value?.type))),
});

const FotoSimSTNK = () => {
  const style = { color: 'blue' };
  const fileRef = useRef(null);

  return (
    <div className="mt-10">
      <div className="flex gap-4 items-center">
        <a className="cursor-pointer">
          <BiArrowBack size={24} style={style} />
        </a>
        <p style={style} className="text-base font-semibold">
          Registrasi Klaim
        </p>
      </div>

      <div className="flex gap-5 pt-10">
        <div className="flex items-center   border rounded-md bg-secondary ">
          <div className="px-5 py-6 border ml-2 bg-secondary-low">
            <BsWindowDock style={style} size={30} />
          </div>
          <p className="text-sm bg-success-low rounded-r-md w-full py-[30px] px-4 ">Foto SIM & STNK</p>
        </div>
        <div className="flex items-center   border rounded-md bg-mn ">
          <div className="px-5 py-6 border ml-2 bg-secondary-low ">
            <AiOutlineCar className="text-mn" size={30} />
          </div>
        </div>
      </div>

      <div style={style} className="font-semibold mt-[80px] py-8 leading-8 rounded-md  border">
        <div className="flex gap-[104px] justify-center">
          <p>No. Polisi</p>
          <p className="text-placeholder">B 2345EFG</p>
        </div>
        <div className="flex gap-8 justify-center">
          <p>Nama Tertanggung</p>
          <p className="text-placeholder">B 2345EFG</p>
        </div>
        <div className="flex gap-[109px] justify-center">
          <p>No. Polis</p>
          <p className="text-placeholder">B 2345EFG</p>
        </div>
      </div>

      <p className="pt-10">Foto SIM</p>
      <div>
        <Formik
          validationSchema={validationSchema}
          initialValues={{
            file: null,
          }}
          onSubmit={(value) => {
            console.log('ini value', value);
          }}
        >
          {({ values, setFieldValue, errors }) => (
            <Form>
              <div>
                <div>
                  <input
                    ref={fileRef}
                    hidden
                    type="file"
                    onChange={(e) => {
                      setFieldValue('file', e.target.files[0]);
                    }}
                  />
                </div>
                {values.file && <Preview file={values.file} />}
                <button
                  onClick={() => {
                    fileRef.current.click();
                  }}
                >
                  Upload Image
                </button>
                <br />
                <button type="submit">Submit</button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default FotoSimSTNK;
