import Head from 'next/head';
import Image from 'next/image';
import Kerusakan from '../../components/kerusakan/Kerusakan';

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Kerusakan Kendaraan</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <Kerusakan />
      </div>
    </div>
  );
}
