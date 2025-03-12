import { useParams } from "react-router";
import { resources } from "../js/ressurser.js";

export default function PageTitle() {
  const { category } = useParams();
  const filteredResource = resources.filter(
    (resource) => resource.category === category
  );

  return (
    <>
      {filteredResource.map((resource, index) => (
        <head key={index}>
          <title>{resource.category}</title>
        </head>
      ))}
    </>
  );
}
