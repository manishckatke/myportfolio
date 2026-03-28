import { createBrowserRouter } from "react-router";
import Root from "./components/Root";
import Home from "./components/Home";
import Work from "./components/Work";
import CaseStudy from "./components/CaseStudy";
import Contact from "./components/Contact";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "work", Component: Work },
      { path: "case-study/:id", Component: CaseStudy },
      { path: "contact", Component: Contact },
    ],
  },
]);
