import React from "react";
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import HomeLayout from "./Layouts/HomeLayout";
import Hero from "./sections/Hero/Hero";
import AboutMe from "./sections/AboutMe/AboutMe";
import Projects from "./sections/Projects/Projects";
import Contact from "./sections/Contact/Contact";

const route = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<HomeLayout />}>
      <Route index element={<Hero />} />
      <Route path="/about-me" element={<AboutMe />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/get-in-touch" element={<Contact />} />
    </Route>
  )
);

export default function App() {
  return <RouterProvider router={route} />;
}
