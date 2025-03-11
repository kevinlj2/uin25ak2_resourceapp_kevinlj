import "../styles/nav.scss";

export default function Nav() {
  return (
    <nav>
      <ul>
        <li>
          <button id="HTML" class="active">
            HTML
          </button>
        </li>
        <li>
          <button id="CSS">CSS</button>
        </li>
        <li>
          <button id="JavaScript">JavaScript</button>
        </li>
        <li>
          <button id="React">React</button>
        </li>
        <li>
          <button id="Sanity">Sanity and headless CMS</button>
        </li>
      </ul>
    </nav>
  );
}
