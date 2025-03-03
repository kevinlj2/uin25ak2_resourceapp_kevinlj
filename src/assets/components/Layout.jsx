export default function Layout() {
  return (
    <>
      <header>
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
      </header>
      <main>
        <section id="textBox"></section>
      </main>
    </>
  );
}
