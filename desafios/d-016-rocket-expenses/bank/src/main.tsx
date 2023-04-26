import React from "react";
import ReactDOM from "react-dom/client";
import { TableContextProvider } from "./contexts/TableProvider";
import Routes from "./Routes";
import "./global.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <TableContextProvider>
      <Routes />
    </TableContextProvider>
  </React.StrictMode>
);
