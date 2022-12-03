import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { RickAndMortyCharacters } from "features/rick-and-morty-characters";
import { Header } from "features/rick-and-morty-characters/components/header";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RickAndMortyCharacters />,
    errorElement: <Header title={"Page not found"} />,
  },
]);

export const Routes = () => {
  return <RouterProvider router={router} />;
};
