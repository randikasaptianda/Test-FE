import React, { useRef } from 'react';
import { Formik, Form, Field, FieldArray, ErrorMessage, validateYupSchema } from 'formik';
import * as yup from 'yup';
import Preview from '../sim&stnk/Preview';
import { BsPlusCircle } from 'react-icons/bs';

const SUPPORTED_FORMATS = ['image/jpg', 'image/jpeg', 'image/png'];

const validationSchema = yup.object({
  file: yup
    .mixed()
    .nullable()
    .required()
    .test('FILE_SIZE', 'Uploaded file is too big!', (value) => !value || (value && value.size <= 1024 * 1024))
    .test('FILE_FORMAT', 'Uploaded file has unsupported format.', (value) => !value || (value && SUPPORTED_FORMATS.includes(value?.type))),
});

const UploadFile = ({ showIcon = false }) => {
  const style = { color: 'blue' };
  const fileRef = useRef(null);

  return (
    <div className="">
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
                  // className="relative"
                >
                  <BsPlusCircle className="w-10 h-10 relative text-mn ml-12 mt-7" />
                  <p className="text-l text-mn font-semibold my-7 relative">Upload Image</p>
                </button>
                <br />
                {/* <button type="submit">Submit</button> */}
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default UploadFile;
