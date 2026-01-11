import { createBrowserRouter } from "react-router";
import { lazy } from "react";

import { HomePage } from "@/heroes/pages/home/HomePage";
import { HeroPage } from "@/heroes/pages/hero/HeroPage";
import { AdminPage } from "@/admin/pages/AdminPage";
import { HeroesLayout } from "@/heroes/layouts/HeroesLayout";
import { AdminLayout } from "@/admin/layouts/AdminLayout";

// import { SearchPage } from "@/heroes/pages/search/SearchPage";

// ! Codigo legacy: no usar
// const SearchPage = lazy(() =>
//   import("@/heroes/pages/search/SearchPage").then((module) => ({
//     default: module.SearchPage,
//   }))
// );

const SearchPage = lazy(() => import("@/heroes/pages/search/SearchPage"));

export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <HeroesLayout />,
    children: [
      {
        // Como esta sera la ruta inicial tan pronto como cargue "HeroesLayour",
        // no se pone el path, sino la ruta "index"
        index: true,
        element: <HomePage />,
      },
      {
        // No se coloca el "/" inicial porque ya esta dado por el padre (HeroesLayout)
        path: "heroes/1",
        element: <HeroPage />,
      },
      {
        path: "search",
        element: <SearchPage />,
      },
    ],
  },
  {
    path: "/admin",
    element: <AdminLayout />,
    children: [
      {
        index: true,
        element: <AdminPage />,
      },
    ],
  },
]);
