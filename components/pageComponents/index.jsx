import { getGalerySlide } from "./components/galery-slide";

export default function PageComponents({ props: data }) {
  console.log(data);
  if (JSON.stringify(data) == "{}") return <div></div>;
  const componentsToShow = [];
  for (let i = 0; i < data.Conteudo?.length; i++) {
    switch (data.Conteudo[i].Componente) {
      case "galery.galery-slide":
        componentsToShow.push(getGalerySlide(data.Conteudo[i]));
        break;
    }
  }

  return (
    <div>
      {componentsToShow.map((component, index) => (
        <div key={index}>{component}</div>
      ))}
    </div>
  );
}
