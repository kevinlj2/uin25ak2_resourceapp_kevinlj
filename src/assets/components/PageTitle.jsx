import { useParams } from "react-router";
import { resources } from "../js/ressurser.js";
import { Helmet } from "react-helmet";

export default function PageTitle() {
  const { category } = useParams();
  const filterResource = resources.filter(
    (resource) => resource.category === category
  );

  return (
    <>
      {filterResource.map((title, index) => (
        <Helmet key={index}>
          <title>{title.category}</title>
        </Helmet>
      ))}
    </>
  );
}
