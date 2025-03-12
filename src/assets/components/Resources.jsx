import "../styles/resources.scss";
import { resources } from "../js/ressurser.js";
import { useParams } from "react-router";

export default function Resources() {
  const { category } = useParams();

  const filteredResources = resources.filter(
    (resource) => resource.category === category
  );

  console.log(resources);
  return (
    <section>
      {filteredResources.map((resource, index) => (
        <article key={index}>
          <ul>
            {resource.sources.map((source, idx) => (
              <li key={idx}>
                <a href={source.url} _target="_blank">
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
