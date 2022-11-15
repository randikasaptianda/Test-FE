import React from 'react';
import Card_Form from '../base/Card_Form';
import Card_Forms from '../base/Card_Forms';
import Input from '../form/Input';
// import Input from '../form/Input';
import { BiArrowBack } from 'react-icons/bi';
import { RiPoliceCarLine } from 'react-icons/ri';
import { GiTeamIdea } from 'react-icons/gi';
import { HiOutlinePencilAlt } from 'react-icons/hi';
import Textareas from '../form/Textareas';
import CardForms from '../base/CardForms';
import Link from 'next/link';
import UploadFile from '../base/uploadFile';

export default function Kerusakan() {
  return (
    <>
      <section className="p-8">
        <div className="flex mb-6 ">
          <Link href="/" passHref>
            <BiArrowBack className="w-9 h-9 text-mn mt-2 mr-4" />
          </Link>
          <p className="text-2xl font-semibold text-mn">Registrasi Klaim</p>
        </div>
        <div className="grid grid-cols-2 gap-10 mb-6">
          <div className="w-auto h-auto border-b-line border-l-line border-r-line border-2 rounded-lg border-t-white flex">
            <p className="border-l-8 border-mn rounded-l-lg"></p>
            <p className="border-l-[90px]  border-line  "></p>
            <RiPoliceCarLine className="w-14 h-14   text-mn ml-5 mt-5 absolute" />
            <p className="text-l text-label ml-4 mt-1">Klaim Kerusakan Kendaraan</p>
          </div>
          <div className="w-auto h-auto border-b-line border-l-line border-r-white border-2 rounded-lg border-t-white flex">
            <p className="border-l-8 border-greens rounded-l-lg"></p>
            <p className="border-l-[90px]  border-success-low  "></p>
            <GiTeamIdea className="w-14 h-14 ml-5 mt-5  text-greens  absolute" />
          </div>
        </div>

        <Card_Forms className={`mb-6`}>
          <div className="grid grid-cols-2 gap-1 ">
            <span className="text-m text-mn font-semibold">
              <p>No. Polisi</p>
              <p>Nama Tertanggung</p>
              <p>No. Polis</p>
            </span>
            <span className="text-m text-label font-semibold">
              <p>B 1234 EFG</p>
              <p>Pajar Pribadi</p>
              <p>VCL2007001</p>
            </span>
          </div>
        </Card_Forms>
        <div className="flex">
          <HiOutlinePencilAlt className="text-greens w-7 h-7 mr-4" />
          <p className="text-l text-mn font-semibold mb-2">Foto Kerusakan 1</p>
        </div>
        <CardForms className={`mb-7 flex justify-center`}>{/* <UploadFile /> */}</CardForms>
        <Textareas />
        <div className="flex mt-7">
          <HiOutlinePencilAlt className="text-greens w-7 h-7 mr-4" />
          <p className="text-l text-mn font-semibold mb-2">Foto Kerusakan 2</p>
        </div>
        <CardForms className={`mb-7 flex justify-center`}>{/* <UploadFile /> */}</CardForms>
        <Textareas />

        <CardForms className={`my-7 flex justify-center`}>{/* <UploadFile /> */}</CardForms>
        <div className="p-3 mt-6 bg-greens rounded-lg flex justify-center cursor-pointer">
          <p className="text-l text-white font-semibold">Simpan</p>
        </div>
        <div className="flex mt-7 gap-7 justify-end">
          <Link href="/" passHref>
            <button type="button" className="text-mn bg-line rounded-lg p-3 font-semibold">
              Back
            </button>
          </Link>
        </div>
      </section>
    </>
  );
}
