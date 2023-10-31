import { Navigate, createBrowserRouter } from "react-router-dom";

import { HeroesApp } from "../HeroesApp";
import { DcPage, MarvelPage, SearchPage, HeroPage } from "../heroes";
import { LoginPage } from '../auth'
import { PublicRouter } from "../router/PublicRouter";
import { PrivateRouter } from "../router/PrivateRouter";



export const AppRouter = [
    {
      path: "/",
      element: <PrivateRouter> <HeroesApp /> </PrivateRouter> ,
      children: [ 
        {
            path: "marvel",
            element: <MarvelPage />
        },
        {
            path: "dc",
            element: <DcPage />
        },
        {
            path: "search",
            element: <SearchPage />
        },
        {
            path: "hero/:id",
            element: <HeroPage />
        }
      ]
    },
    {
      path: "login",
      element: <PublicRouter> <LoginPage /> </PublicRouter>
    },
    {
      path: "*",
      element: <Navigate to="/" replace />
  }
  ];

