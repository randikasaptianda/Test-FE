import Head from "next/head";
import Image from "next/image";
import FormulirKlaim from "../components/formulirKlaim/FormulirKlaim";
// import xIcon from "@heroicons/react/outline";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Frontend Test</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <FormulirKlaim />
      </div>
    </div>
  );
}
