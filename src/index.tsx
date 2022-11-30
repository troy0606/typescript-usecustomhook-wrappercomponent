import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./view/App";
import reportWebVitals from "./reportWebVitals";
import store from "./redux/store";
import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import Error from "./view/pages/error";
import LoadingEffect from "./view/pages/loading_effect";
import FormValidate from "./view/pages/form_validate";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "loading_effect",
        element: <LoadingEffect />,
      },
      {
        path: "form_validate",
        element: <FormValidate />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
