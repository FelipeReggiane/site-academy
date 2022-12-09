import Request from "../utils/requester";
import Posts from "../components/posts.jsx";

export default function Index({ data }) {
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
        url: `http://localhost:1337/api/posts?populate=*`,
      }),
    ]);

    // By returning { props: { posts } }, the Blog component
    // will receive `posts` as a prop at build time

    // console.log(dataPosts);

    return {
      props: {
        data: {
          posts: dataPosts ? dataPosts.data : [],
        },
      },
    };
  } catch (error) {
    console.log(error);
    return {
      props: {
        data: { posts: [] },
        error: true,
      },
    };
  }
}
