import { RouterProvider } from "react-router-dom";
import { route } from "./routes/routeRender";

export default function App() {
  return (
    <>
      <RouterProvider router={route}></RouterProvider>
    </>
  );
}
