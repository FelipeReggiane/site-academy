import { getGalerySlide } from "./components/galery-slide";
import { getGaleryDescription } from "./components/galery-description";

export default function PageComponents({ props: data }) {
  if (JSON.stringify(data) == "{}") return <div></div>;
  const componentsToShow = [];
  for (let i = 0; i < data.Conteudo?.length; i++) {
    switch (data.Conteudo[i].Componente) {
      case "galery.galery-slide":
        componentsToShow.push(getGalerySlide(data.Conteudo[i]));
        break;
      case "galery.galery-description":
        componentsToShow.push(getGaleryDescription(data.Conteudo[i]));
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
