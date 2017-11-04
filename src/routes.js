import { configureRoutes } from "./core/utils/bundler";

// routes
import * as Home from "./pages/home";
import * as About from "./pages/about";

export default configureRoutes([
  Home,
  About
]);
