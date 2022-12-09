import Image from "next/image";
export default function Props({ props: data }) {
  console.log(data.posts[0].image);
  // <h1>{data.posts[0].attributes.title}</h1>
  // <p>{data.posts[0].attributes.content}</p>

  return (
    <div>
      <h1>{data.posts[0].title}</h1>
      <p>{data.posts[0].content}</p>
      <img src={data.posts[0].image.url} width={1500} height={400} alt="" />
    </div>
  );
}
