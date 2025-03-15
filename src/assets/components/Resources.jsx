import "../styles/resources.scss";
import { resources } from "../js/ressurser.js";
import { useParams } from "react-router";

export default function Resources() {
  const { category } = useParams();

  // Lager et filter som filtrerer kategoriene
  const filterResources = resources.filter(
    (resource) => resource.category === category
  );

  return (
    <section>
      {filterResources.map((resource, index) => (
        <article key={index}>
          <ul>
            {resource.sources.map((source, idx) => (
              <li key={idx}>
                <a href={source.url} target="_blank">
                  {source.title}
                </a>
              </li>
            ))}
          </ul>
        </article>
      ))}
    </section>
  );
}
