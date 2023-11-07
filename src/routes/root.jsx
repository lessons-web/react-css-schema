import { Outlet, Link } from "react-router-dom";

export default function Root() {
  return (
    <>
      <div id="sidebar">
        <h1>React CSS Schema</h1>
        <nav>
          <ul>
            <li>
              <Link to="/basic-css">
                <a>Basic CSS</a>
              </Link>
            </li>
            <li>
              <Link to="/css-module">
                <a>CSS Module</a>
              </Link>
            </li>
            <li>
              <Link to="/css-in-js">
                <a>Css In JS</a>
              </Link>
            </li>
            <li>
              <Link to="/tailwind">
                <a>Tailwind CSS</a>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <div id="detail">
        <Outlet />
      </div>
    </>
  );
}
