import React, { useRef, useState } from 'react';
import Card_Form from '../base/Card_Form';
import Card_Forms from '../base/Card_Forms';
import Input from '../form/Input';
// import Input from '../form/Input';
import { BiArrowBack } from 'react-icons/bi';
import { FaRegIdCard } from 'react-icons/fa';
import { GoClippy } from 'react-icons/go';
import { BsCalendar4Week } from 'react-icons/bs';
import { useForm } from 'react-hook-form';
import { Menu } from '@headlessui/react';
import { Calendar } from 'react-date-range';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';

import dayjs from 'dayjs';
import AutoComplete from '../form/AutoComplete';
import Link from 'next/link';

export default function FormulirKlaim({ onChange = () => {}, isview = false }) {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    defaultValues: {
      kir_exp_date: '',
    },
  });

  const buttonRef = useRef();
  const btnCalender = useRef();
  const [date, setDate] = useState(new Date());

  return (
    <>
      <section className="p-8">
        <div className="flex mb-7 ">
          <BiArrowBack className="w-9 h-9 text-mn mt-2 mr-4" />
          <p className="text-2xl font-semibold text-mn">Registrasi Klaim</p>
        </div>
        <div className="grid grid-cols-2 gap-10 mb-7">
          <div className="w-auto h-auto border-b-line border-l-line border-r-line border-2 rounded-lg border-t-white flex">
            <p className="border-l-8 border-mn rounded-l-lg"></p>
            <p className="border-l-[90px]  border-line  "></p>
            <GoClippy className="w-14 h-14   text-mn ml-5 mt-3 absolute" />
            <p className="text-l text-label ml-4 mt-3">Formulir Klaim</p>
          </div>
          <div className="w-auto h-auto border-b-line border-l-line border-r-white border-2 rounded-lg border-t-white flex">
            <p className="border-l-8 border-greens rounded-l-lg"></p>
            <p className="border-l-[90px]  border-success-low  "></p>
            <FaRegIdCard className="w-14 h-14 ml-5 mt-3  text-greens  absolute" />
          </div>
        </div>
        <div className="p-2 bg-line flex justify-center mb-7">
          <p className="text-l text-mn font-semibold">Registrasi Klaim: B 1234 EFG</p>
        </div>
        <Card_Forms className={`mb-7`}>
          <div className="grid grid-cols-2 gap-1 ">
            <span className="text-m text-mn font-semibold">
              <p>No. Polisi</p>
              <p>Nama Tertanggung</p>
              <p>No. Polis</p>
              <p>Periode</p>
              <p>Nilai Pertanggungan</p>
              <p>Buatan/Merk</p>
              <p>Tahun Pembuatan</p>
              <p>No. Mesin</p>
              <p>No. Rangka</p>
            </span>
            <span className="text-m text-label font-semibold">
              <p>B 1234 EFG</p>
              <p>Pajar Pribadi</p>
              <p>VCL2007001</p>
              <p>1 Juli 2020-30 Juli 2021</p>
              <p>Rp 120.000.000</p>
              <p>Jepang/Honda</p>
              <p>2019</p>
              <p>NHX120000</p>
              <p>MCM24000</p>
            </span>
          </div>
        </Card_Forms>
        <Card_Forms className={`mb-7`}>
          <div>
            <p className="text-m text-mn font- mb-2">Nama Pengemudi</p>
            <input placeholder="Masukkan Nama Pengemudi" className="text-m w-full border-b-4 border-b-mn bg-bg focus:outline-none mb-6" />

            <AutoComplete />
            <input placeholder="Silahkan isi hubungan dengan tertanggung..." className="text-m w-full border-b-4 border-b-line bg-white focus:outline-none my-7" />

            <div className="mb-6">
              <Menu>
                <Menu.Button ref={buttonRef} className="w-full text-left">
                  <label htmlFor="date" className="relative text-[#868686] text-s mb-3  block w-full">
                    <input
                      type="text"
                      name="date"
                      id="date"
                      placeholder="Tanggal dan Waktu Kejadian"
                      className="bg-white  pl-4 pr-4 h-14 focus:outline-none border-b-4 border-b-line w-full mt-3"
                      {...register('kir_exp_date', { required: true })}
                    />
                    <BsCalendar4Week className="cursor-pointer w-6 h-6 absolute top-2/3 transform -translate-y-1/2 right-3 text-greens" />
                  </label>
                </Menu.Button>
                <Menu.Items as="div" className="drop-shadow-lg z-20">
                  <Menu.Item>
                    <Calendar
                      onChange={(item) => {
                        setValue('kir_exp_date', dayjs(item).format('YYYY-MM-DD'));
                        setDate(item);
                        buttonRef.current?.click();
                      }}
                      date={date}
                    />
                  </Menu.Item>
                </Menu.Items>
              </Menu>
            </div>

            <AutoComplete />
            <input placeholder="Silahkan isi penyebab..." className="text-m w-full border-b-4 border-b-line bg-white focus:outline-none my-7" />
          </div>
        </Card_Forms>
        <p className="text-l text-greens font-semibold mb-2">Tempat Kejadian</p>
        <Card_Forms></Card_Forms>
        <div className="flex mt-7 gap-7 justify-end">
          <Link href="/" passHref>
            <button type="button" className="text-mn bg-line rounded-lg p-3">
              Formulir
            </button>
          </Link>
          <Link href="/sim&stnk" passHref>
            <button type="button" className="text-mn bg-line rounded-lg p-3">
              SIM & STNK
            </button>
          </Link>
          <Link href="/kerusakan" passHref>
            <button type="button" className="text-mn bg-line rounded-lg p-3">
              Kendaraan
            </button>
          </Link>
        </div>
      </section>
    </>
  );
}
