import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RickAndMorty from "./components/RickAndMorty";
import DetailCharacter from "./components/DetailCharacter";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RickAndMorty />,
  },
  {
    path: "/character/:id",
    element: <DetailCharacter />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
