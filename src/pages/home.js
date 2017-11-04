import Home from "../app/components/home";
import Layout from "../app/components/layout";

const routes = [
  {
    path: "/",
    exact: true,
    component: Home,
    layout: Layout,
    seo: {
      title: "Home"
    }
  }
];
export default routes;
