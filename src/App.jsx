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

const route = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<HomeLayout />}>
      <Route index element={<Hero />} />
      <Route path="/about-me" element={<AboutMe />} />
    </Route>
  )
);

export default function App() {
  return <RouterProvider router={route} />;
}
