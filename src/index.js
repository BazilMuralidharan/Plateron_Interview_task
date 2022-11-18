import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";

import { Provider } from "react-redux";
import Store from "./Redux/Store";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <Provider store={Store}>
      <App />
    </Provider>
  </StrictMode>
);
