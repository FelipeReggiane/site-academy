export default function Props({ props: data }) {
  return (
    <div>
      <h1>{data.posts[0].attributes.title}</h1>
      <p>{data.posts[0].attributes.content}</p>
    </div>
  );
}
