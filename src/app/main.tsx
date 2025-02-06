import { createRoot } from "react-dom/client";
import "./index.css";
import "./i18n";
import { Router } from "./router";

createRoot(document.getElementById("root")!).render(<Router />);
