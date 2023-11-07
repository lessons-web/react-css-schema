import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./routes/root";
import BasicCss from "./routes/basic-css";
import CssModule from "./routes/css-module";
import CSSInJs from "./routes/css-in-js";
import Tailwind from "./routes/tailwind";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "",
        element: <h1>CSS Schema</h1>,
      },
      {
        path: "basic-css",
        element: <BasicCss />,
      },
      {
        path: "css-module",
        element: <CssModule />,
      },
      {
        path: "css-in-js",
        element: <CSSInJs />,
      },
      {
        path: "tailwind",
        element: <Tailwind />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <RouterProvider router={router} />
  </>
);
