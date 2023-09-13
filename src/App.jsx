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
import Contact, { formAction as action } from "./sections/Contact/Contact";
import Resume from "./sections/Resume/Resume";
import Profile from "./sections/Resume/Profile";
import Education from "./sections/Resume/Education";
import Involvment from "./sections/Resume/Involvment";
import Experience from "./sections/Resume/Experience";

const route = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<HomeLayout />}>
      <Route index element={<Hero />} />
      <Route path="/about-me" element={<AboutMe />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/resume" element={<Resume />}>
        <Route index element={<Profile />} />
        <Route path="education" element={<Education />} />
        <Route path="experience" element={<Experience />} />
        <Route path="involvment" element={<Involvment />} />
      </Route>
      <Route path="/get-in-touch" element={<Contact />} action={action} />
    </Route>
  )
);

export default function App() {
  return <RouterProvider router={route} />;
}
