import React from "react";
import Head from "next/head";
import PageComponents from "../components/pageComponents";
import Request from "../utils/requester";

export default function sobre({ data }) {
  return (
    <div>
      <Head>
        <title>Sobre Rethink Academy</title>
        <meta name="Sobre Rethink Academy" content="Sobre o rethink academy" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PageComponents props={data.Sobre} />
    </div>
  );
}

export async function getStaticProps() {
  try {
    const [{ value: data }] = await Promise.allSettled([
      Request({
        method: "GET",
        url: `http://localhost:1337/api/sobres?populate=deep`,
      }),
    ]);
    return {
      props: {
        data: {
          Sobre: data ? data.data : [],
        },
      },
    };
  } catch (error) {
    console.log(error);
    return {
      props: {
        data: { Sobre: [] },
        error: true,
      },
    };
  }
}
