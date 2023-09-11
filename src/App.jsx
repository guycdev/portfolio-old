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
import Resume from "./sections/Resume/Resume";
import Profile from "./sections/Resume/Profile";

const route = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<HomeLayout />}>
      <Route index element={<Hero />} />
      <Route path="/about-me" element={<AboutMe />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/resume" element={<Resume />}>
        <Route index element={<Profile />} />
        <Route path="education" element={<h2>hi</h2>} />
        <Route path="involvment" element={<h3>hello</h3>} />
      </Route>
      <Route path="/get-in-touch" element={<Contact />} />
    </Route>
  )
);

export default function App() {
  return <RouterProvider router={route} />;
}
