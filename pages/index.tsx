import React, { useEffect } from "react";
import Head from "next/head";
// import Image from "next/image";
import styles from "../styles/Home.module.css";
import { NextPage } from "next/types";
import { useRouter } from "next/router";

const Home: NextPage = () => {
  const router = useRouter();

  useEffect(() => {
    router.push("/certification");
  }, []);
  return (
    <div className={styles.container}>
      <Head>
        <title>쩝쩝노트</title>
        <meta
          name="description"
          content="쩝쩝노트는 먹학박사들을 위한 먹킷리스트를 제공하고 멤버들과의 모임을 관리하기 위한 페이지입니다."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}></main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          developed by eassy
        </a>
      </footer>
    </div>
  );
};

export default Home;
