import Header from "@/components/Header";
import type { NextPage } from "next";

import Head from "next/head";

interface Props {
  toggleTheme?: React.MouseEventHandler<HTMLButtonElement>;
}

const Home: NextPage<Props> = ({ toggleTheme }) => {
  return (
    <>
      <Head>
        <title>Noot</title>
        <meta name="description" content={"Noot"} />
      </Head>
      <Header toggleTheme={toggleTheme} />
    </>
  );
};

export default Home;
