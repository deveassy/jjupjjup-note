import "../styles/globals.css";
import { AppProps } from "next/app";
import Header from "../components/header";
import { useEffect, useState } from "react";

function MyApp({ Component, pageProps }: AppProps) {
  const [name, setName] = useState<string | null>("");
  const [flag, setFlag] = useState<string | null>("");

  useEffect(() => {
    const userName = localStorage.getItem("jjupjjup-user-name");
    const flag = localStorage.getItem("config-flag");

    setName(userName);
    setFlag(flag);
  }, []);

  return (
    <>
      {!!name && !!flag && <Header />}
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
