import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <div className=" text-amber-950"> Hello world</div>
  </StrictMode>
);
