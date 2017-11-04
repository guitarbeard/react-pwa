import About from "../app/components/about";
import Layout from "../app/components/layout";

const routes = [
  {
    path: "/about",
    exact: true,
    component: About,
    layout: Layout,
    seo: {
      title: "About"
    }
  }
];
export default routes;
