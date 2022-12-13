import Head from "next/head";
import Request from "../utils/requester";
import Image from "next/image";
import PageComponents from "../components/pageComponents";

export default function Home({ data }) {
  return (
    <div>
      <Head>
        <title>Home Rethink Academy</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PageComponents props={data.Home} />
    </div>
  );
}

// This function gets called at build time
export async function getStaticProps() {
  try {
    // Call an external API endpoint to get posts
    const [{ value: data }] = await Promise.allSettled([
      Request({
        method: "GET",
        url: `https://strapi-production-a226.up.railway.app/api/homes?populate=deep`,
      }),
    ]);

    // By returning { props: { posts } }, the Blog component
    // will receive `posts` as a prop at build time

    return {
      props: {
        data: {
          Home: data ? data.data : [],
        },
      },
    };
  } catch (error) {
    console.log(error);
    return {
      props: {
        data: { Home: [] },
        error: true,
      },
    };
  }
}
