import Request from "../utils/requester";
import Posts from "../components/posts";

export default function Index({ data }) {
  console.log(data.posts);
  data.posts.map((dataMap) => {
    console.log(dataMap.attributes);
  });
  return (
    <div>
      <Posts props={data} />
    </div>
  );
}

// This function gets called at build time
export async function getStaticProps() {
  try {
    // Call an external API endpoint to get posts
    const [{ value: dataPosts }] = await Promise.allSettled([
      Request({
        method: "GET",
        url: `http://localhost:1337/api/posts?populate=deep`,
      }),
    ]);

    // By returning { props: { posts } }, the Blog component
    // will receive `posts` as a prop at build time

    console.log({ dataPosts });

    return {
      props: {
        data: {
          posts: dataPosts ? dataPosts.data.data : [],
        },
      },
    };
  } catch (error) {
    console.log(error);
    return {
      props: {
        data: { Acessibilidade: [] },
        error: true,
      },
    };
  }
}
